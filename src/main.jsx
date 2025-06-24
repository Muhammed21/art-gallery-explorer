import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import AppRouter from "./app/routes/AppRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Chargement...</div>}>
      <img
        src="/home/pattern.svg"
        style={{
          position: "relative",
          top: -1,
          left: 0,
          height: 20,
          width: "100%",
          objectFit: "cover",
        }}
      />
      <AppRouter />
    </Suspense>
  </StrictMode>
);
