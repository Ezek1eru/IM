// import ModalContainer from "./ModalContainer";
import { Switch, Dialog } from "@headlessui/react";
import { useState } from "react";

export default function UserForm({onClose}) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex flex-center fixed inset-0 justify-center items-center p-7 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-100 shadow-md">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="flex ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                onClick={() => onClose(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="mb-5">
              <label
                htmlFor="fName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Nombre Usuario
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Nombre Usuario"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <span className="sr-only">Close modal</span>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email@uap.edu.ar"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Cargo
              </label>
              <select
                id="carrera"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Seleccione un Cargo</option>
                <option value="readonly">Directiva</option>
                <option value="readonly">Director de Grupo</option>
                <option value="readonly">Presidente</option>
                <option value="readonly">Secretaria</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Usuario Activo
              </label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 mb-3 items-center rounded-full `}
              >
                <span className="sr-only">Activo</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
            <span className="sr-only">Close modal</span>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Agregar Usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
