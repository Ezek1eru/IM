import DefaultLayout from "../components/DefaultLayout";
import Card from "../components/Card";

export default function Usuarios() {
  return (
    <DefaultLayout>
      <div className=" m-4 grid grid-cols-4 gap-4">
        <Card children="Nombre" apellidos="email@uap.edu.ar"></Card>
        <Card children="Nombre" apellidos="email@uap.edu.ar"></Card>
        <Card children="Nombre" apellidos="email@uap.edu.ar"></Card>
        <Card children="Nombre" apellidos="email@uap.edu.ar"></Card>
        <Card children="Nombre" apellidos="email@uap.edu.ar"></Card>
        <Card children="Nombre" apellidos="email@uap.edu.ar"></Card>
      </div>
    </DefaultLayout>
  );
}
