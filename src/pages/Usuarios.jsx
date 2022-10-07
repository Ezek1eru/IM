import DefaultLayout from "../components/DefaultLayout";
import Card from "../components/Card";

export default function Usuarios() {
  return (
    <DefaultLayout>
      <div className=" m-4 grid grid-cols-4 gap-4">
        <Card>
          <h2 className="font-semibold">Nombre</h2>
          <p className="mt-2 text-sm text-gray-500">email@uap.edu.ar</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Nombre</h2>
          <p className="mt-2 text-sm text-gray-500">email@uap.edu.ar</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Nombre</h2>
          <p className="mt-2 text-sm text-gray-500">email@uap.edu.ar</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Nombre</h2>
          <p className="mt-2 text-sm text-gray-500">email@uap.edu.ar</p>
        </Card>
      </div>
    </DefaultLayout>
  );
}
