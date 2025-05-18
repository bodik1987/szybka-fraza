import { useState } from "react";
import InputField from "./input-field";

export default function Przezbrojenie() {
  const [oldWidth, setOldWidth] = useState("");
  const [oldRows, setOldRows] = useState("");
  const [newWidth, setNewWidth] = useState("");
  const [newRows, setNewRows] = useState("");
  const [assemblerWidth, setAssemblerWidth] = useState("");

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
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value === "" || /^[0-9\b.]+$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="max-w-[250px]">
      <p className="card-title">Przezbrojenie, sprężyna</p>

      <div className="bg-white/80 border-2 rounded-r-md rounded-b-md p-3 pt-2 shadow-xl">
        <p className="font-medium">Poprzedni materac, {format(oldSpring)}</p>
        <div className="w-full flex">
          <InputField
            label="Szerokość, mm"
            value={oldWidth}
            onChange={(val) => handleNumericInput(val, setOldWidth)}
            className="bg-white border-r-0 rounded-r-none focus:outline-none focus:bg-warning/5"
          />
          <InputField
            label="Ilość rzędów"
            value={oldRows}
            onChange={(val) => handleNumericInput(val, setOldRows)}
            className="bg-white rounded-l-none focus:outline-none focus:bg-warning/5"
          />
        </div>

        <p className="font-medium pt-2">Nowy materac, {format(newSpring)}</p>
        <div className="w-full flex">
          <InputField
            label="Szerokość, mm"
            value={newWidth}
            onChange={(val) => handleNumericInput(val, setNewWidth)}
            className="bg-white border-r-0 rounded-r-none focus:outline-none focus:bg-warning/5"
          />
          <InputField
            label="Ilość rzędów"
            value={newRows}
            onChange={(val) => handleNumericInput(val, setNewRows)}
            className="bg-white rounded-l-none focus:outline-none focus:bg-warning/5"
          />
        </div>

        <p className="mt-2 text-warning font-medium">
          Różnica: {formatDifference(difference)} mm
        </p>

        <div className="w-full flex pt-1">
          <InputField
            label="W Assemblerze"
            value={assemblerWidth}
            onChange={(val) => handleNumericInput(val, setAssemblerWidth)}
            className="bg-white border-r-0 rounded-r-none focus:outline-none focus:bg-warning/5 shadow-md"
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
