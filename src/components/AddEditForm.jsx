export default function AddEdditForm({ visible, onClose }) {
  const crearMisionero = async (e) => {
    const { data } = await axios.post("http://localhost:3000/api/misioneros", {
      ...e.target,
    });
    console.log(data);
  };

  return (
    <div className="flex flex-center fixed inset-0 justify-center items-center p-7 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="p-4 w-3/4 bg-white rounded-lg border border-gray-100 shadow-md">
        <div className="mx-auto w-full max-w-full">
          <form>
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
                  <label
                    data="nombre"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Nombre"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    data="apellidos"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Apellidos"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <span className="sr-only">Close modal</span>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="celular"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Celular
                  </label>
                  <input
                    type="text"
                    name="celular"
                    id="celular"
                    placeholder="Celular"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="Documento"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Documento
                  </label>
                  <input
                    type="text"
                    name="documento"
                    id="documento"
                    placeholder="Documento"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <span className="sr-only">Close modal</span>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="number"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Numero
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="guest"
                    placeholder="00000"
                    min="10000"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email@uap.edu.ar"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Categoría
                  </label>
                  <select
                    id="carrera"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option>Categoría</option>
                    <option value="readonly">Económicas</option>
                    <option value="readonly">Humanidades</option>
                    <option value="readonly">Salud</option>
                    <option value="readonly">Teología</option>
                    <option value="readonly">Postgrado</option>
                    <option value="readonly">Pre-Universitario</option>
                    <option value="readonly">ISAP</option>
                    <option value="readonly">IAP</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Carrera
                  </label>
                  <select
                    id="carrera"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option>Carrera</option>
                    <option value="readonly">Económicas</option>
                    <option value="readonly">Humanidades</option>
                    <option value="readonly">Salud</option>
                    <option value="readonly">Teología</option>
                    <option value="readonly">Postgrado</option>
                    <option value="readonly">Pre-Universitario</option>
                    <option value="readonly">ISAP</option>
                    <option value="readonly">IAP</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                onClick={crearMisionero}
              >
                Añadir Misionero
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
