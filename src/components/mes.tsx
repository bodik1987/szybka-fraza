import { useState } from "react";

const CategoriesTable = () => {
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

  const sortedData = [...data].sort((a, b) => {
    if (a.wydajnosc === "nie" && b.wydajnosc === "tak") return -1;
    if (a.wydajnosc === "tak" && b.wydajnosc === "nie") return 1;
    return 0;
  });

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="table-container">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`${
          expanded ? "rounded-t-lg" : "rounded-lg"
        } w-fit font-medium mt-5 bg-blue-500 active:brightness-75 transition-all text-white px-8 py-1 border-b-2 border-blue-800`}
      >
        MES
      </button>
      {expanded && (
        <table className="categories-table">
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
                <td>{row.kategoria}</td>
                <td>{row.podkategoria}</td>
                <td>{row.stawka}</td>
                <td>{row.wydajnosc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CategoriesTable;
