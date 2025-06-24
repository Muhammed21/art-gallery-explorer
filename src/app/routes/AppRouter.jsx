import { routes } from "./router";
import App from "../App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {routes.map(({ path, element }, i) => (
            <Route key={i} index={path === "/"} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
