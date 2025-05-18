import Kanal from "../components/kanal";
import Przezbrojenie from "../components/new-materac";
import Pasek from "../components/pasek";

export default function Home() {
  return (
    <section className="mt-8 flex flex-col lg:flex-row gap-5">
      <Przezbrojenie />
      <Pasek />
      <Kanal />
    </section>
  );
}
