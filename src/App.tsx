import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Shulika.Bohdan");
  const [text2, setText2] = useState("bs123");
  return (
    <div className="flex gap-5">
      <div className="w-fit flex items-center rounded-2xl shadow-xl">
        <input
          type="text"
          value={text}
          placeholder="Wpisz text"
          className="bg-white h-16 pl-5 pr-4 rounded-l-2xl border-transparent border-y-2 border-l-2 focus:border-[#0A9870] focus:outline-none focus:border-y-2 focus:border-l-2 text-2xl transition-all"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-[#0A9870] text-white h-16 w-16 aspect-square flex items-center justify-center rounded-r-2xl cursor-pointer active:bg-[#2f6d5b] transition-all group">
          <CopyIcon />
        </button>
      </div>

      <div className="w-fit flex items-center rounded-2xl shadow-xl">
        <input
          type="text"
          value={text2}
          placeholder="Wpisz text"
          className="bg-white h-16 pl-5 pr-4 rounded-l-2xl border-transparent border-y-2 border-l-2 focus:border-[#0A9870] focus:outline-none focus:border-y-2 focus:border-l-2 text-2xl transition-all"
          onChange={(e) => setText2(e.target.value)}
        />
        <button className="bg-[#0A9870] text-white h-16 w-16 aspect-square flex items-center justify-center rounded-r-2xl cursor-pointer active:bg-[#2f6d5b] transition-all group">
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}
