import React, { useState, useMemo } from "react";

const InputField = ({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) => (
  <div className="w-full flex flex-col">
    <label className="text-sm opacity-60 italic">{label}</label>
    <input
      type="text"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`mt-1 w-full text-center h-12 px-5 rounded-md border-accent border-2 text-2xl transition-all ${className}`}
    />
  </div>
);

export default function Pasek() {
  const [springCount, setSpringCount] = useState("32");
  const [beltLength, setBeltLength] = useState("2875");

  const parseNumber = (value: string): number | null => {
    const n = parseFloat(value);
    return isNaN(n) || n === 0 ? null : n;
  };

  const result = useMemo(() => {
    const count = parseNumber(springCount);
    const length = parseNumber(beltLength);
    if (!count || !length) return "-";
    const value = length / (count / 5);
    return isFinite(value) ? Math.round(value) : "-";
  }, [springCount, beltLength]);

  const handleNumericInput = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="max-w-[150px]">
      <p className="font-medium bg-accent border-b-2 border-b-warning w-fit px-3 py-1.5 text-white rounded-t-lg">
        Parametr B
      </p>

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
