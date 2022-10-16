import DefaultLayout from "../components/DefaultLayout";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Directiva() {
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center font-sans overflow-hidden">
        <div className="flex flex-row items-center justify-center">
          <div className="p-4">
            <input
              type="text"
              id="table-search"
              className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
              placeholder="Buscar Miembro Directiva"
            />
          </div>
          <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/form">Agregar Directiva</Link>
          </button>
        </div>
        <div className=" m-4 grid grid-cols-4 gap-4">
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
          <Card>
            <h2 className="font-semibold">Nombre</h2>
            <p className="mt-2 text-sm text-gray-500"> email@uap.edu.ar </p>
            <p className="mt-3 text-sm text-gray-500">Grupo</p>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
