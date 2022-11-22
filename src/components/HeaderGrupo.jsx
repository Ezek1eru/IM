import { Link } from "react-router-dom";

export default function HeaderGrupo() {
  return (
    <div className="flex content-center justify-center mt-3">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link to={"/DirectivaGrupo"}>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white "
          >
            Directiva
          </button>
        </Link>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          Inscriptos
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-b border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          Salidas
        </button>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b rounded-r-lg border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          Informes
        </button>
      </div>
    </div>
  );
}
