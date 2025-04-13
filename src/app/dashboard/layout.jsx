"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col lg:grid lg:grid-cols-[20vw,80vw] overflow-hidden">
      {/* Botón para abrir/cerrar el Sidebar en pantallas pequeñas */}
      <button
        className="lg:hidden bg-blue-500 text-white px-4 py-2 m-2 rounded-md z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Cerrar Menú" : "Abrir Menú"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[80vw] max-w-xs bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:static lg:translate-x-0 lg:h-full lg:w-full`}
      >
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <main className="flex-1 p-4 overflow-y-hidden">{children}</main>

      {/* Fondo oscuro para cerrar el Sidebar en pantallas pequeñas */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}