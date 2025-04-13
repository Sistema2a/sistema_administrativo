"use client";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 h-screen overflow-hidden">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100%-4rem)]">
        {/* Sección Prestamos */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Préstamos</h2>
            <p className="text-gray-600">
              Total: <span className="font-semibold text-blue-500">120</span>
            </p>
            <p className="text-gray-600">
              Pendientes: <span className="font-semibold text-red-500">30</span>
            </p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
            Ver más
          </button>
        </div>

        {/* Sección Inversionistas */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Inversionistas
            </h2>
            <p className="text-gray-600">
              Total: <span className="font-semibold text-blue-500">15</span>
            </p>
            <p className="text-gray-600">
              Activos: <span className="font-semibold text-green-500">10</span>
            </p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
            Ver más
          </button>
        </div>

        {/* Sección Caja */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Caja</h2>
            <p className="text-gray-600">
              Total en caja:{" "}
              <span className="font-semibold text-green-500">$25,000</span>
            </p>
            <p className="text-gray-600">
              Última actualización:{" "}
              <span className="font-semibold text-gray-800">Hoy</span>
            </p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
            Ver más
          </button>
        </div>

        {/* Sección Pagos */}
        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pagos</h2>
            <p className="text-gray-600">
              Pagos realizados:{" "}
              <span className="font-semibold text-blue-500">50</span>
            </p>
            <p className="text-gray-600">
              Pendientes: <span className="font-semibold text-red-500">5</span>
            </p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;