export default function Kanal() {
  return (
    <div className="select-none">
      <p className="card-title">Parametr D (cięcie)</p>
      <div className="border-2 rounded-b-md rounded-r-md w-fit bg-white shadow-xl">
        <div className="px-3 py-2">
          <p className="text-sm font-medium">Lewy kanal - Z</p>
          <div className="mt-1 flex gap-3 items-center">
            <div>
              <div className="flex justify-center">
                <div className="h-14 w-3 border-l border-y bg-warning rounded-l" />
                <div className="h-14 w-7 bg-white border" />
                <div className="h-14 w-7 bg-white border-r border-y" />
                <div className="h-14 w-7 bg-white border-r border-y" />
                <div className="h-14 w-1 border-r border-y bg-warning/50 rounded-r" />
              </div>
              <p className="text-center font-medium">{`x - 5`}</p>
            </div>

            <div>
              <div className="flex justify-center">
                <div className="h-14 w-1 border-l border-y bg-warning/50 rounded-l" />
                <div className="h-14 w-7 bg-white border" />
                <div className="h-14 w-7 bg-white border-r border-y" />
                <div className="h-14 w-7 bg-white border-r border-y" />
                <div className="h-14 w-3 border-r border-y bg-warning rounded-r" />
              </div>
              <p className="text-center font-medium">{`x + 5`}</p>
            </div>
          </div>
        </div>

        <div className="px-3 py-2 border-t-2">
          <p className="text-sm font-medium">Prawy kanal - C</p>

          <div className="mt-1 flex gap-3 items-center">
            <div>
              <div className="flex justify-center">
                <div className="h-14 w-3 border-l border-y bg-warning rounded-l" />
                <div className="h-14 w-7 border" />
                <div className="h-14 w-7 border-r border-y" />
                <div className="h-14 w-7 border-r border-y" />
                <div className="h-14 w-1 border-r border-y bg-warning/50 rounded-r" />
              </div>
              <p className="text-center font-medium">{`x + 5`}</p>
            </div>

            <div>
              <div className="flex justify-center">
                <div className="h-14 w-1 border-l border-y bg-warning/50 rounded-l" />
                <div className="h-14 w-7 border" />
                <div className="h-14 w-7 border-r border-y" />
                <div className="h-14 w-7 border-r border-y" />
                <div className="h-14 w-3 border-r border-y bg-warning rounded-r" />
              </div>
              <p className="text-center font-medium">{`x - 5`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
