import Kanal from "./components/kanal";
import CategoriesTable from "./components/mes";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [inputs, setInputs] = useLocalStorage("inputs", [""]);
  const [note, setNote] = useLocalStorage("note", "Note");

  const updateInput = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const removeInput = (index: number) => {
    if (window.confirm("Czy na pewno chcesz usunąć ten tekst?")) {
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    }
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">PA48 - notatki</h1>

      <p className="mt-5 font-medium">Szybki frazy</p>
      <section className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {inputs.map((text, index) => (
          <div key={index} className="flex items-center relative">
            <input
              type="text"
              value={text}
              placeholder="Wpisz tekst"
              className="w-full h-16 px-5 rounded-l-xl border-accent border-2 focus:outline-none text-2xl transition-all"
              onChange={(e) => updateInput(index, e.target.value)}
            />
            <button
              onClick={() => copyToClipboard(text)}
              className="text-accent border-accent border-r-2 border-y-2 h-16 w-20 flex items-center justify-center rounded-r-xl cursor-pointer active:bg-accent active:text-white transition-all"
            >
              <CopyIcon />
            </button>
            <button
              onClick={() => removeInput(index)}
              className="absolute -top-3.5 -right-3.5 bg-white border-2 border-accent text-warning h-6 w-6 flex items-center justify-center rounded-full cursor-pointer transition-all"
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
        <button
          onClick={addInput}
          className="fixed z-20 top-2 right-5 bg-accent text-white w-12 h-12 rounded-full cursor-pointer flex items-center justify-center active:brightness-75 transition-all"
        >
          <PlusIcon />
        </button>
      </section>

      <section className="mt-5 flex gap-5">
        <Kanal />

        <div className="max-w-[500px] w-full">
          <p className="font-medium text-center">Notatka</p>
          <textarea
            className="mt-2 bg-gray-100 rounded-lg p-3 w-full h-full"
            value={note}
            onChange={handleNoteChange}
            placeholder="Wpisz swoje notatki..."
          />
        </div>
      </section>

      <CategoriesTable />

      <p className="mt-4">
        <b>Przezbrojenie</b> <br />
        1. Wymiana blatu <br />
        2. Foto towaru i montażu <br />
        3. Wybór szablonu <br />
        4. Pozycja montażu - ustawienie punktu przesunięcia <br />
        5. Rzędy <br />
        6. Wybór stron <br />
        7. Towar <br />
        8. Klej <br />
        9. Wyłączenie noża i włączenie na pozycji 14
      </p>
    </main>
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

function DeleteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
