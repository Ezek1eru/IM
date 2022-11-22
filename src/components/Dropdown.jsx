import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const abrirCerrarMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex content-center justify-center mt-3">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={abrirCerrarMenu}
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
      <div
        id="dropdown"
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
      >
        <ul
          className="py-1 text-sm text-gray-700"
          aria-labelledby="dropdowDefault"
        >
          <li>
            <Link
              to="/grupos"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              Grupos
            </Link>
          </li>
          <li>
            <Link
              to="/usuarios"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              Usuarios
            </Link>
          </li>
          <li>
            <Link
              to="/transportes"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              Transportes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
