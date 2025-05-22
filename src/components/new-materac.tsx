import { useState } from "react";
import useLocalStorage from "../useLocalStorage";
import InputField from "./input-field";

export default function Przezbrojenie() {
  const [oldMaterac, setOldMaterac] = useLocalStorage("oldMaterac", {
    oldWidth: "",
    oldRows: "",
  });
  const [newMaterac, setNewMaterac] = useLocalStorage("newMaterac", {
    newWidth: "",
    newRows: "",
  });
  const [assemblerWidth, setAssemblerWidth] = useLocalStorage(
    "assemblerWidth",
    ""
  );

  const [oldWidth, setOldWidth] = useState(oldMaterac.oldWidth);
  const [oldRows, setOldRows] = useState(oldMaterac.oldRows);
  const [newWidth, setNewWidth] = useState(newMaterac.newWidth);
  const [newRows, setNewRows] = useState(newMaterac.newRows);

  const parseNumber = (value: string): number | null => {
    const n = parseFloat(value);
    return isNaN(n) || n === 0 ? null : n;
  };

  const calculateSpring = (width: string, rows: string) => {
    const w = parseNumber(width);
    const r = parseNumber(rows);
    return w && r ? w / r : null;
  };

  const oldSpring = calculateSpring(oldWidth, oldRows);
  const newSpring = calculateSpring(newWidth, newRows);

  const difference: number | string =
    oldSpring !== null && newSpring !== null
      ? +(newSpring - oldSpring).toFixed(1)
      : "-";

  const format = (val: number | null) =>
    val !== null && isFinite(val) ? val.toFixed(1) : "-";

  const formatDifference = (val: number | string) =>
    typeof val === "number" ? (val > 0 ? `+${val}` : `${val}`) : val;

  const resultAssembler = () => {
    const base = parseNumber(assemblerWidth);
    return base !== null && typeof difference === "number"
      ? (base + difference).toFixed(1)
      : "";
  };

  const handleNumericInput = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    storageKey?: string,
    storageField?: string
  ) => {
    if (value === "" || /^[0-9\b.]+$/.test(value)) {
      setter(value);
      if (storageKey && storageField) {
        if (storageKey === "oldMaterac") {
          setOldMaterac((prev) => ({
            ...prev,
            [storageField]: value,
          }));
        } else if (storageKey === "newMaterac") {
          setNewMaterac((prev) => ({
            ...prev,
            [storageField]: value,
          }));
        } else if (storageKey === "assemblerWidth") {
          setAssemblerWidth(value);
        }
      }
    }
  };

  const swapMateracs = () => {
    // Swap current state
    const tempWidth = oldWidth;
    const tempRows = oldRows;

    setOldWidth(newWidth);
    setOldRows(newRows);
    setNewWidth(tempWidth);
    setNewRows(tempRows);

    // Update localStorage
    setOldMaterac({
      oldWidth: newWidth,
      oldRows: newRows,
    });
    setNewMaterac({
      newWidth: tempWidth,
      newRows: tempRows,
    });
  };

  const adjustRows = (
    section: "old" | "new",
    operation: "increment" | "decrement"
  ) => {
    const currentRows = section === "old" ? oldRows : newRows;
    const currentRowsNum = parseNumber(currentRows) || 0;
    let newValue =
      operation === "increment" ? currentRowsNum + 1 : currentRowsNum - 1;

    // Ensure we don't go below 1
    newValue = Math.max(1, newValue);

    const newValueStr = newValue.toString();

    if (section === "old") {
      setOldRows(newValueStr);
      setOldMaterac((prev) => ({
        ...prev,
        oldRows: newValueStr,
      }));
    } else {
      setNewRows(newValueStr);
      setNewMaterac((prev) => ({
        ...prev,
        newRows: newValueStr,
      }));
    }
  };

  return (
    <div className="max-w-[250px]">
      <p className="card-title">Przezbrojenie, sprężyna</p>

      <div className="bg-white border-2 rounded-r-md rounded-b-md p-3 pt-2 shadow-xl">
        <p className="font-medium text-lg">
          Poprzedni materac,{" "}
          <span className="text-warning">{format(oldSpring)}</span>
        </p>
        <div className="w-full flex">
          <InputField
            label="Szerokość, mm"
            value={oldWidth}
            onChange={(val) =>
              handleNumericInput(val, setOldWidth, "oldMaterac", "oldWidth")
            }
            className="bg-white border-r-0 rounded-r-none focus:outline-none focus:bg-warning/5"
          />
          <InputField
            label="Ilość rzędów"
            value={oldRows}
            onChange={(val) =>
              handleNumericInput(val, setOldRows, "oldMaterac", "oldRows")
            }
            className="bg-white rounded-l-none focus:outline-none focus:bg-warning/5"
          />
        </div>

        <div className="mt-1 pl-1 flex justify-end gap-1">
          <button
            onClick={swapMateracs}
            className="w-1/2 bg-warning/20 active:bg-warning/30 px-3 py-1 rounded-md"
          >
            ⇅ Zamień
          </button>
          <button
            onClick={() => adjustRows("old", "decrement")}
            className="w-1/4 bg-gray-200 active:bg-gray-300 px-3 py-1 rounded-md"
          >
            -
          </button>
          <button
            onClick={() => adjustRows("old", "increment")}
            className="w-1/4 bg-gray-200 active:bg-gray-300 px-3 py-1 rounded-md"
          >
            +
          </button>
        </div>

        <p className="font-medium text-lg pt-2">
          Nowy materac,{" "}
          <span className="text-warning">{format(newSpring)}</span>
        </p>
        <div className="w-full flex">
          <InputField
            label="Szerokość, mm"
            value={newWidth}
            onChange={(val) =>
              handleNumericInput(val, setNewWidth, "newMaterac", "newWidth")
            }
            className="bg-white border-r-0 rounded-r-none focus:outline-none focus:bg-warning/5"
          />
          <InputField
            label="Ilość rzędów"
            value={newRows}
            onChange={(val) =>
              handleNumericInput(val, setNewRows, "newMaterac", "newRows")
            }
            className="bg-white rounded-l-none focus:outline-none focus:bg-warning/5"
          />
        </div>
        <div className="mt-1 pl-1 flex justify-end gap-1">
          <button
            onClick={() => adjustRows("new", "decrement")}
            className="w-1/4 bg-gray-200 active:bg-gray-300 px-3 py-1 rounded-md"
          >
            -
          </button>
          <button
            onClick={() => adjustRows("new", "increment")}
            className="w-1/4 bg-gray-200 active:bg-gray-300 px-3 py-1 rounded-md"
          >
            +
          </button>
        </div>

        <p className="-mx-3 px-3 mt-3 border-t-2 pt-2 text-lg font-medium">
          Różnica:{" "}
          <span className="text-warning">
            {formatDifference(difference)} mm
          </span>
        </p>

        <div className="w-full flex pt-1">
          <InputField
            label="W Assemblerze"
            value={assemblerWidth}
            onChange={(val) =>
              handleNumericInput(val, setAssemblerWidth, "assemblerWidth")
            }
            className="bg-gray-50 border-r-0 rounded-r-none focus:outline-none focus:bg-warning/5 shadow-md"
          />
          <InputField
            label="Muszę być"
            value={resultAssembler()}
            onChange={() => {}}
            readOnly
            className="rounded-l-none !bg-green-100 cursor-not-allowed shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
