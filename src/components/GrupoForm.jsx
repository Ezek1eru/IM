import { useEffect, useState } from "react";

export default function AddEdditForm({ visible, onClose }) {
  // *Variables
  const [data, setData] = useState(null);
  const [nombreGrupo, setNombreGrupo] = useState("");
  const [lugarEncuentro, setLugarEncuentro] = useState("");
  const [tipoTransporte, setTipoTransporte] = useState("");
  const [resumen, setResumen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/grupos")
      .then((res) => res.json())
      .then((data) => setResumen(data));
  }, []);

  async function handleSubmit(e) {
    fetch("http://localhost:3000/api/grupos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreGrupo: nombreGrupo,
        lugarEncuentro: lugarEncuentro,
        tipoTransporte: tipoTransporte,
        resumen: resumen,
      }),
    });
    onClose(false);
  }
  return (
    <div className="flex flex-center fixed inset-0 justify-center items-center p-7 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="p-4 w-3/4 bg-white rounded-lg border border-gray-100 shadow-md">
        <div className="mx-auto w-full max-w-full">
          <form onClick={handleSubmit} autoComplete="off">
            <div className="flex ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                onClick={() => onClose(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Nombre Grupo
                  </label>
                  <input
                    type="text"
                    name="nombreGrupo"
                    value={nombreGrupo}
                    placeholder="Nombre Grupo"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={(e) => {
                      setNombreGrupo(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Lugar de encuentro
                  </label>
                  <input
                    type="text"
                    name="lugarEncuentro"
                    value={lugarEncuentro}
                    placeholder="Lugar de encuentro"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={(e) => {
                      setLugarEncuentro(e.target.value);
                    }}
                  />
                </div>
              </div>
              <span className="sr-only">Close modal</span>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="Documento"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Tipo de Transporte
                  </label>
                  <input
                    type="text"
                    name="TipoTransporte"
                    value={tipoTransporte}
                    placeholder="Tipo de Transporte"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={(e) => {
                      setTipoTransporte(e.target.value);
                    }}
                  />
                </div>
              </div>
              <span className="sr-only">Close modal</span>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-4 mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Resumen del Grupo
                </label>
                <textarea
                  name="resumen"
                  rows={4}
                  value={resumen}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 blue-500"
                  placeholder="Resumen del grupo"
                  onChange={(e) => {
                    setResumen(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
