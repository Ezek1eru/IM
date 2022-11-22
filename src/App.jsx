import Login from "./pages/Login";
import Home from "./pages/Home";
import Misioneros from "./pages/Misioneros";
import Grupos from "./pages/Grupos";
import Directiva from "./pages/Directiva";
import Cargos from "./pages/Cargos";
import Salidas from "./pages/Salidas";
import Usuarios from "./pages/Usuarios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/misioneros" element={<Misioneros />}></Route>
            <Route path="/grupos" element={<Grupos />}></Route>
            <Route path="/directiva" element={<Directiva />}></Route>
            <Route path="/usuarios" element={<Salidas />}></Route>
            <Route path="/salidas" element={<Usuarios />}></Route>
            <Route path="/cargos" element={<Cargos />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
