import { CaretRightFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import CargosForm from "../components/CargosForm";
import DefaultLayout from "../components/DefaultLayout";
import ModalContainer from "../components/ModalContainer";

export default function Cargos() {
  const [viewTable, setViewTable] = useState(false);
  const [data, setData] = useState(null);

  const handleOnClose = () => {
    setViewTable(false);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/cargos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <DefaultLayout>
        <div className="flex flex-col items-center justify-center font-sans ">
          <div className="flex items-end justify-end">
            <button
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setViewTable(true)}
            >
              Agregar Cargo
            </button>
          </div>
          <div className="w-5/6 lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Cargo</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data &&
                    data.map((cargo, i) => (
                      <tr
                        key={cargo._id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <span className="font-medium">
                                {cargo.nombre}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
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
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DefaultLayout>
      <ModalContainer visible={viewTable} onClose={handleOnClose}>
        <CargosForm onClose={handleOnClose} />
      </ModalContainer>
    </div>
  );
}
