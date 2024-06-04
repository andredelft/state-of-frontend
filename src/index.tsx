import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Presentation2022 } from "./Presentation2022";
import { Presentation2024 } from "./Presentation2024";

const presentations: Record<string, () => JSX.Element> = {
  "2022": Presentation2022,
  "2024": Presentation2024,
};

const urlParams = new URLSearchParams(window.location.search);
const year = urlParams.get("year");

function Presentation({ year }: { year: string | null }) {
  const CurrentPresentation = year && presentations[year];

  if (CurrentPresentation) {
    return <CurrentPresentation />;
  }

  return (
    <ul>
      {Object.keys(presentations).map((year) => (
        <li key={year}>
          <a href={`?year=${year}`}>{year}</a>
        </li>
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Presentation year={year} />
  </React.StrictMode>,
);
