import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Politicas from "./pages/Politicas";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import "./index.css";


function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;