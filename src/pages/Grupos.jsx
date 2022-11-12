import DefaultLayout from "../components/DefaultLayout";
import ModalContainer from "../components/ModalContainer";
import GrupoForm from "../components/GrupoForm";
import { useState } from "react";
import Pagination from "../components/Pagination";

export default function Grupos() {
  const [viewTable, setViewTable] = useState(false);

  const handleOnClose = () => {
    setViewTable(false);
  };

  return (
    <div>
      <DefaultLayout>
        <div className="flex flex-col items-center justify-center font-sans ">
          <div className="flex flex-row items-center justify-around">
            <div className="p-4">
              <input
                type="text"
                id="table-search"
                className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
                placeholder="Buscar Grupo"
              />
            </div>
            <button
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setViewTable(true)}
            >
              Agregar Grupo
            </button>
          </div>
          <div className="w-5/6 lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Nombre Grupo</th>
                    <th className="py-3 px-6 text-left">Lugar</th>
                    <th className="py-3 px-6 text-center">
                      Tipo de Transporte
                    </th>
                    <th className="py-3 px-6 text-center">
                      Punto de Encuentro
                    </th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <span className="font-medium">Nombre</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>Lugar</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>Tipo de Transporte</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>Punto de Encuentro</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DefaultLayout>
      <Pagination />
      <ModalContainer visible={viewTable} onClose={handleOnClose}>
        <GrupoForm onClose={handleOnClose} />
      </ModalContainer>
    </div>
  );
}
