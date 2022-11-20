import HeaderGrupo from "./HeaderGrupo";

export default function DefaultLayout(props) {
  return (
    <div className="flex flex-col justify-between">
      <HeaderGrupo />
      <div className="grow">{props.children}</div>
    </div>
  );
}
