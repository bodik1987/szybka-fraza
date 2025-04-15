export default function Kanal() {
  return (
    <div className="max-w-[320px] select-none">
      <p className="font-medium border-b-2 border-b-warning bg-black w-fit px-3 py-1.5 text-white rounded-t-lg">
        Parametr D (cięcie)
      </p>
      <div className="border-2 grid grid-cols-2 gap-4 max-w-[320px] rounded-b-xl rounded-r-xl">
        <div className="border-r-2 w-[160px] py-2">
          <p className="text-center text-sm font-medium">Lewy kanal Z</p>

          <div className="mt-2 flex justify-center">
            <div className="h-16 w-1 border-l border-y bg-warning/50 rounded-l" />
            <div className="h-16 w-9 border" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-3 border-r border-y bg-warning rounded-r" />
          </div>
          <p className="text-center font-medium">{`x + 5`}</p>

          <div className="mt-4 flex justify-center">
            <div className="h-16 w-3 border-l border-y bg-warning rounded-l" />
            <div className="h-16 w-9 border" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-1 border-r border-y bg-warning/50 rounded-r" />
          </div>
          <p className="text-center font-medium">{`x - 5`}</p>
        </div>

        <div className="py-2">
          <p className="text-center text-sm font-medium">Prawy kanal C</p>

          <div className="mt-2 flex justify-center">
            <div className="h-16 w-1 border-l border-y bg-warning/50 rounded-l" />
            <div className="h-16 w-9 border" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-3 border-r border-y bg-warning rounded-r" />
          </div>
          <p className="text-center font-medium">{`x - 5`}</p>

          <div className="mt-4 flex justify-center">
            <div className="h-16 w-3 border-l border-y bg-warning rounded-l" />
            <div className="h-16 w-9 border" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-9 border-r border-y" />
            <div className="h-16 w-1 border-r border-y bg-warning/50 rounded-r" />
          </div>
          <p className="text-center font-medium">{`x + 5`}</p>
        </div>
      </div>
    </div>
  );
}
