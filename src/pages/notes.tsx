import useLocalStorage from "../useLocalStorage";

export default function Notes() {
  const [note, setNote] = useLocalStorage("note", "Note");
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };
  return (
    <>
      <p className="mt-4 bg-white p-4 pt-3 rounded-xl w-fit shadow-md">
        <b>Przezbrojenie</b> <br />
        Wymiana blatu / Pozycja montażu / Rzędy / Wybór stron / Klej /
        Wyłączenie noża i włączenie na pozycji 14
      </p>

      <div className="mt-4 max-w-[500px] w-full">
        <p className="font-medium">Notatka</p>
        <textarea
          className="mt-2 bg-white rounded-lg p-3 w-full h-full min-h-[200px] shadow-2xl"
          value={note}
          onChange={handleNoteChange}
          placeholder="Wpisz swoje notatki..."
        />
      </div>
    </>
  );
}
