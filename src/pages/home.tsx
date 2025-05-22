import FastPhrases from "../components/fast-phrases";
import Kanal from "../components/kanal";
import Przezbrojenie from "../components/new-materac";
import Pasek from "../components/pasek";
import useLocalStorage from "../useLocalStorage";

export default function Home() {
  const [note, setNote] = useLocalStorage("note", "Note");
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };
  return (
    <section className="flex flex-col lg:flex-row gap-5">
      <Przezbrojenie />
      <div>
        <div className="flex gap-5">
          <Pasek />
          <Kanal />

          <textarea
            className="bg-white rounded-lg p-3 w-full h-full min-h-[200px] shadow-2xl"
            value={note}
            onChange={handleNoteChange}
            placeholder="Wpisz swoje notatki..."
          />
        </div>
        <FastPhrases />
      </div>
    </section>
  );
}
