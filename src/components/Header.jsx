import { GlobalOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Misioneros from "../pages/Misioneros";

export default function Header() {
  return (
    <div className="flex flex-wrap place-items-center">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-gradient-to-r from-red-700 to-red-500 w-screen">
          <div className="px-5 py-6 flex w-full items-center">
            <GlobalOutlined className="text-2xl text-white mr-2"></GlobalOutlined>
            <Link to="/" className="text-3xl text-white font-bold font-heading">
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
              <button
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                Menu
                <svg
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
    