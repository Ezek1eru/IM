import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Card(props) {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg pr-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-gray-50 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-xl text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <div className="ml-4">
        <div className="grid grid-cols-2 ">
          <div>{props.children}</div>
          <div className="ml-20 mt-5 ">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 mb-3 items-center rounded-full `}
            >
              <span className="sr-only">Activo</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
