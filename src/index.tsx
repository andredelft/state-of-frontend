import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { PresentationList } from "presentations/PresentationList";
import { Presentation2022 } from "presentations/2022/Presentation2022";
import { Presentation2024 } from "presentations/2024/Presentation2024";

const presentationRoutes = [
  { path: "2022", element: <Presentation2022 /> },
  { path: "2024", element: <Presentation2024 /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <PresentationList presentationRoutes={presentationRoutes} />,
  },
  ...presentationRoutes,
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
