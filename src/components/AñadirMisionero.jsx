// import ModalContainer from "./ModalContainer";
import { Dialog, Switch } from "@headlessui/react";
import { useState } from "react";

export default function UserForm({ visible, onClose }) {
  const [enabled, setEnabled] = useState(true); 
  
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
                Numero Usuario
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
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Buscar Misionero
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
