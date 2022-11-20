import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cargos from "./pages/Cargos";
import Directiva from "./pages/Directiva";
import Grupos from "./pages/Grupos";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Misioneros from "./pages/Misioneros";
import Salidas from "./pages/Salidas";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/misioneros" element={<Misioneros />}></Route>
          <Route path="/grupos" element={<Grupos />}></Route>
          <Route path="/directiva" element={<Directiva />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/salidas" element={<Salidas />}></Route>
          <Route path="/cargos" element={<Cargos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
