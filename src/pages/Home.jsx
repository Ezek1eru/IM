import DefaultLayout from "../components/DefaultLayout";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <DefaultLayout>
        <div className="overflow-x-hidden h-full grow">
          <h1 className="w-full h-full border-t-2 border-b-2 border-white bg-red-500">
            IMAGEN UAP
          </h1>
        </div>
      </DefaultLayout>
      <Footer />
    </div>
  );
}
