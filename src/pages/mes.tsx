import { useState } from "react";

const Mes = () => {
  const data = [
    {
      kategoria: "Awaria",
      podkategoria: "Inne (konieczność opisu)",
      stawka: "C",
      wydajnosc: "tak",
    },
    {
      kategoria: "Postój nieplanowany",
      podkategoria: "Brak operatora",
      stawka: "C",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój nieplanowany",
      podkategoria: "Brak surowca",
      stawka: "C",
      wydajnosc: "tak",
    },
    {
      kategoria: "Postój nieplanowany",
      podkategoria: "Brak wstęgi",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Postój nieplanowany",
      podkategoria: "Inne",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Postój nieplanowany",
      podkategoria: "Zebranie produkcyjne",
      stawka: "C",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Brak planu produkcyjnego",
      stawka: "C",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Konserwacja: AM/5S",
      stawka: "B",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Konserwacja: Serwis DUR",
      stawka: "B",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Próby technologiczne",
      stawka: "B",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Przerwa śniadaniowa",
      stawka: "A",
      wydajnosc: "tak",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Przezbrojenie",
      stawka: "B",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Szkolenie",
      stawka: "C",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój planowany",
      podkategoria: "Weekend/Święto",
      stawka: "C",
      wydajnosc: "nie",
    },
    {
      kategoria: "Postój Planowany",
      podkategoria: "Rozruch technologiczny",
      stawka: "B",
      wydajnosc: "nie",
    },
    {
      kategoria: "Ustawienia",
      podkategoria: "Inne",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Ustawienia/technologia",
      podkategoria: "Pomiar kleju",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Ustawienia/technologia",
      podkategoria: "Regulacje",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Ustawienia/technologia",
      podkategoria: "Wymiana blatu",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Ustawienia/technologia",
      podkategoria: "Wymiana noża",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Produkcja",
      podkategoria: "Praca efektywna",
      stawka: "A",
      wydajnosc: "tak",
    },
    {
      kategoria: "Produkcja",
      podkategoria: "Spowolniona praca",
      stawka: "A",
      wydajnosc: "tak",
    },
    {
      kategoria: "Produkcja",
      podkategoria: "Przekroczona spowolniona praca",
      stawka: "B",
      wydajnosc: "tak",
    },
    {
      kategoria: "Postój nieplanowany",
      podkategoria: "Czas nieoznaczony",
      stawka: "C",
      wydajnosc: "tak",
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [selectedStawka, setSelectedStawka] = useState<string | null>(null);

  const handleFilterByStawka = (stawka: string | null) => {
    setSelectedStawka(stawka);
    if (stawka) {
      setFilteredData(data.filter((item) => item.stawka === stawka));
    } else {
      setFilteredData(data);
    }
  };

  const uniqueStawki = ["A", "B", "C"];

  const sortedData = [...filteredData].sort((a, b) => {
    if (a.wydajnosc === "nie" && b.wydajnosc === "tak") return -1;
    if (a.wydajnosc === "tak" && b.wydajnosc === "nie") return 1;
    return 0;
  });

  return (
    <div className="mt-4 table-container">
      <div className="">
        <label htmlFor="stawka-filter">Filtr po stawce: </label>
        <select
          id="stawka-filter"
          value={selectedStawka || ""}
          className="ml-2 bg-white py-1.5 rounded-xl shadow-md"
          onChange={(e) => handleFilterByStawka(e.target.value || null)}
        >
          <option value="" className="font-medium text-center">
            Wszystkie
          </option>
          {uniqueStawki.map((stawka) => (
            <option key={stawka} value={stawka} className="text-center">
              {stawka}
            </option>
          ))}
        </select>
      </div>

      <table className="mt-3 categories-table overflow-hidden rounded-t-lg shadow-2xl">
        <thead>
          <tr>
            <th>Kategoria</th>
            <th>Podkategoria</th>
            <th>Stawka</th>
            <th>Wydajność wpluw</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td className="opacity-70">{row.kategoria}</td>
              <td className="font-medium">{row.podkategoria}</td>
              <td className="!text-center capitalize">{row.stawka}</td>
              <td className="!text-center capitalize">{row.wydajnosc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mes;
