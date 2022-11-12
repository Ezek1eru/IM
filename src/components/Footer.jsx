import { GlobalOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 bg-gradient-to-r from-red-700 to-red-500">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-row">
          <GlobalOutlined className="text-white text-xl mr-2" />
          <Link
            to="/"
            className="flex text-white font-semibold text-2xl items-center sm:mb-0"
          >
            Instituto Misionero
          </Link>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
          <li>
            <Link
              to="/about"
              className="text-lg text-white hover:underline md:mr-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/terms&amp;conditions"
              className="text-lg text-white hover:underline md:mr-6"
            >
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="text-lg text-white hover:underline md:mr-6"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center">
        © 2022 {""} <Link to="/">Instituto Misionero</Link> {""} ™. Todos los
        derechos reservados.
      </span>
    </footer>
  );
}
