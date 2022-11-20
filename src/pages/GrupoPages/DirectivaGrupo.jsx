import DefaultLayoutGrupo from "../../layouts/DefaultLayoutGrupo";
import Card from "../components/Card";
import ModalContainer from "../components/ModalContainer";
import DirectivaForm from "../components/DirectivaForm";

export default function Directiva() {
  return (
    <div>
      <DefaultLayoutGrupo>
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
      </DefaultLayoutGrupo>
    </div>
  );
}
