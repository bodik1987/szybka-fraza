import { useState } from "react";
import InputField from "./input-field";

export default function Pasek() {
  const [springCount, setSpringCount] = useState("32");
  const [beltLength, setBeltLength] = useState("2875");

  const parseNumber = (value: string): number | null => {
    const n = parseFloat(value);
    return isNaN(n) || n === 0 ? null : n;
  };

  const getResult = () => {
    const count = parseNumber(springCount);
    const length = parseNumber(beltLength);
    if (!count || !length) return "-";
    const value = length / (count / 5);
    return isFinite(value) ? Math.round(value) : "-";
  };

  const handleNumericInput = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setter(value);
    }
  };

  const result = getResult();

  return (
    <div className="max-w-[150px]">
      <p className="card-title">Parametr B</p>

      <div className="border-2 rounded-r-md rounded-b-md px-3 py-3 space-y-3 shadow-xl">
        <InputField
          label="Ilość sprężyn"
          value={springCount}
          onChange={(val) => handleNumericInput(val, setSpringCount)}
          className="focus:outline-none focus:bg-warning/10"
        />
        <InputField
          label="Pasek (mm)"
          value={beltLength}
          onChange={(val) => handleNumericInput(val, setBeltLength)}
          className="focus:outline-none focus:bg-warning/10"
        />
        <div
          className={`text-center font-medium text-3xl py-2 rounded-md ${
            typeof result === "number"
              ? "bg-red-50 text-warning"
              : "bg-muted text-gray-500"
          }`}
        >
          {result}
        </div>
      </div>
    </div>
  );
}
