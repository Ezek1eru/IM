import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout(props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="DefaultLayout-body grow">{props.children}</div>
      <Footer />
    </div>
  );
}
