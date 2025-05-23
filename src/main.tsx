import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout";
import Mes from "./pages/mes";
import Home from "./pages/home";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/mes" element={<Mes />} />

        {/* <Route path="folders">
          <Route element={<Folders />}>
            <Route index element={<div>Folders</div>} />
            <Route path=":id" element={<div>Folder Id</div>} />
          </Route>
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
