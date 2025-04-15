import React, { useState } from "react";

export default function Pasek() {
  const [springCount, setSpringCount] = useState<string>("32");
  const [beltLength, setBeltLength] = useState<string>("2875");

  const calculateBValue = (): number | string => {
    const count = parseFloat(springCount);
    const length = parseFloat(beltLength);

    // Return "-" for invalid cases
    if (isNaN(count) || isNaN(length) || count === 0) return "-";

    const result = length / (count / 5);
    return isFinite(result) ? Math.round(result) : "-";
  };

  const handleNumericInput = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setter(value);
    }
  };

  const result = calculateBValue();

  return (
    <div>
      <p className="font-medium bg-black border-b-2 border-b-warning w-fit px-3 py-1.5 text-white rounded-t-lg">
        Parametr B - pasek
      </p>

      <div className="border-2 max-w-[320px] rounded-r-xl space-y-4 rounded-b-xl p-4">
        <div className="max-w-[320px] w-full flex gap-4">
          <div className="w-[80%] flex flex-col space-y-2">
            <label className="font-medium">Ilość sprężyn</label>
            <div className="flex items-center relative">
              <input
                type="text"
                value={springCount}
                onChange={(e) =>
                  handleNumericInput(e.target.value, setSpringCount)
                }
                className="w-full text-center h-16 px-5 rounded-xl border-accent border-2 focus:outline-none focus:border-warning text-2xl transition-all"
              />
            </div>
          </div>

          {/* Pasek input */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Pasek (mm)</label>
            <div className="flex items-center relative">
              <input
                type="text"
                value={beltLength}
                onChange={(e) =>
                  handleNumericInput(e.target.value, setBeltLength)
                }
                className="w-full text-center h-16 px-5 rounded-xl border-accent border-2 focus:outline-none focus:border-warning text-2xl transition-all"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center relative text-4xl font-medium text-warning">
          <div
            className={`p-4 rounded-lg text-3xl font-bold text-center ${
              typeof result === "number"
                ? "bg-red-50 text-warning"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {result}
          </div>
        </div>
      </div>
    </div>
  );
}
