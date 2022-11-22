import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import DefaultLayout from "../components/DefaultLayout";
import ModalContainer from "../components/ModalContainer";
import UserForm from "../components/UserForm";

export default function Usuarios() {
  const [viewTable, setViewTable] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/usuario")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleOnClose = () => {
    setViewTable(false);
  };

  return (
    <div>
      <DefaultLayout>
        <div className="flex flex-col justify-center font-sans overflow-hidden">
          <div className="flex flex-row items-center justify-center">
            <div className="p-4">
              <input
                type="text"
                id="table-search"
                className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
                placeholder="Buscar Usuario"
              />
            </div>
            <div className="p-4">
              <button
                className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setViewTable(true)}
              >
                Agregar Usuario
              </button>
            </div>
          </div>
          <div className="m-4 grid grid-cols-4 gap-4">
            {data &&
              data.map((usuario, i) => (
                <Card key={usuario._id} value={usuario._id}>
                  <h2 className="font-semibold">{usuario.nombre_usuario}</h2>
                  <p className="mt-2 text-sm text-gray-500">{usuario.email}</p>
                </Card>
              ))}
          </div>
        </div>
      </DefaultLayout>
      <ModalContainer visible={viewTable} onClose={handleOnClose}>
        <UserForm visible={viewTable} onClose={handleOnClose} />
      </ModalContainer>
    </div>
  );
}
