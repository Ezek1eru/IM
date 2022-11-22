import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  
  return (
    <div className="flex flex-row h-screen w-screen items-center justify-around bg-gradient-to-r from-red-700 to-red-500">
      <div className="h-96">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_z2sbj8cm.json"
          background="transparent"
          speed="1"
          autoplay
        ></lottie-player>
      </div>
      <form action="/login" method="post">
        <div className="container max-w-md shadow-md hover:shadow-lg transition duration-300">
          <div className="py-12 p-10 bg-white rounded-xl">
            <div className="mb-6">
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
                Nombre de usuario
              </label>
              <input
                type="text"
                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="@email"
                name="nombre_usuario"
              />
            </div>
            <div>
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2">
                Contraseña
              </label>
              <input
                type="text"
                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                placeholder="Password"
                name="password"
              />
            </div>
            <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
