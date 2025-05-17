import React, { useState, useMemo } from "react";

const InputField = ({
  label,
  value,
  onChange,
  className = "",
  readOnly = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  readOnly?: boolean;
}) => (
  <div className="w-full flex flex-col">
    <label className="text-sm opacity-60 italic">{label}</label>
    <input
      type="text"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
      className={`bg-white mt-1 w-full text-center h-12 px-5 rounded-md border-accent border-2 text-2xl transition-all ${className}`}
    />
  </div>
);

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

  const oldSpring = useMemo(
    () => calculateSpring(oldWidth, oldRows),
    [oldWidth, oldRows]
  );
  const newSpring = useMemo(
    () => calculateSpring(newWidth, newRows),
    [newWidth, newRows]
  );

  const difference: number | string =
    oldSpring !== null && newSpring !== null
      ? +(newSpring - oldSpring).toFixed(1)
      : "-";

  const format = (val: number | null) =>
    val !== null && isFinite(val) ? val.toFixed(1) : "-";

  const formatDifference = (val: number | string) =>
    typeof val === "number" ? (val > 0 ? `+${val}` : `${val}`) : val;

  const resultAssembler = useMemo(() => {
    const base = parseNumber(assemblerWidth);
    return base !== null && typeof difference === "number"
      ? (base + difference).toFixed(1)
      : "";
  }, [assemblerWidth, difference]);

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
      <p className="font-medium bg-accent border-b-2 border-b-warning w-fit px-3 py-1.5 text-white rounded-t-lg">
        Przezbrojenie, sprężyna
      </p>

      <div className="bg-green-50/50 border-2 rounded-r-md rounded-b-md p-3 pt-2 shadow-xl">
        <p className="font-medium">Poprzedni materac, {format(oldSpring)}</p>
        <div className="w-full flex">
          <InputField
            label="Szerokość"
            value={oldWidth}
            onChange={(val) => handleNumericInput(val, setOldWidth)}
            className="border-r-0 rounded-r-none focus:outline-none focus:bg-warning/10"
          />
          <InputField
            label="Ilość rzędów"
            value={oldRows}
            onChange={(val) => handleNumericInput(val, setOldRows)}
            className="rounded-l-none focus:outline-none focus:bg-warning/10"
          />
        </div>

        <p className="font-medium pt-2">Nowy materac, {format(newSpring)}</p>
        <div className="w-full flex">
          <InputField
            label="Szerokość"
            value={newWidth}
            onChange={(val) => handleNumericInput(val, setNewWidth)}
            className="border-r-0 rounded-r-none focus:outline-none focus:bg-warning/10"
          />
          <InputField
            label="Ilość rzędów"
            value={newRows}
            onChange={(val) => handleNumericInput(val, setNewRows)}
            className="rounded-l-none focus:outline-none focus:bg-warning/10"
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
            className="border-r-0 rounded-r-none focus:outline-none focus:bg-warning/10 shadow-md"
          />
          <InputField
            label="Muszę być"
            value={resultAssembler}
            onChange={() => {}}
            readOnly
            className="rounded-l-none !bg-green-100 cursor-not-allowed shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
