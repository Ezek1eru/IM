import { GlobalOutlined } from "@ant-design/icons";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
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
                className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
                data-dropdown-toggle="dropdown"
              >
                Usuario{" "}
                <svg
                  className="w-4 h-4 ml-2"
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
              <div
                className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
                id="dropdown"
              >
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
