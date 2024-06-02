import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Presentation2022 } from "./Presentation2022";
import { Presentation2024 } from "./Presentation2024";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const urlParams = new URLSearchParams(window.location.search);
const year = urlParams.get("year");

root.render(
  <React.StrictMode>
    {year === "2022" ? (
      <Presentation2022 />
    ) : year === "2024" ? (
      <Presentation2024 />
    ) : (
      <ul>
        <li>
          <a href="?year=2022">2022</a>
        </li>
        <li>
          <a href="?year=2024">2024</a>
        </li>
      </ul>
    )}
  </React.StrictMode>,
);
