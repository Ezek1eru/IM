import Header from "./Header";

export default function DefaultLayout(props) {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <div className="grow">{props.children}</div>
    </div>
  );
}
