import { GlobalOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Misioneros from "../pages/Misioneros";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <div className="flex flex-wrap place-items-center content-center">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-gradient-to-r from-red-700 to-red-500 w-screen">
          <div className="px-5 py-6 flex w-full items-center">
            <GlobalOutlined className="text-2xl text-white mr-2"></GlobalOutlined>
            <Link to="/Home" className="text-3xl text-white font-bold font-heading">
              Instituto Misionero
            </Link>
            <ul className="text-white hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li className="cursor-pointer hover:text-gray-300">
                <Link to="/misioneros">Misioneros</Link>
              </li>
              <li>
                <Link to="/grupos">Grupos</Link>
              </li>
              <li>
                <Link to="/directiva">Directiva</Link>
              </li>
              <li>
                <Link to="/cargos">Cargos</Link>
              </li>
              <li>
                <Link to="/salidas">Salidas</Link>
              </li>
              <li>
                <Link to="/usuarios">Usuarios</Link>
              </li>
            </ul>
            <div>
              <Dropdown />
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
