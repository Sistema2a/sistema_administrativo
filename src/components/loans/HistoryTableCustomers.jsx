"use client";
import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import Link from "next/link";

const HistoryTableCustomers = ({ data }) => {
  const columns = [
    {
      header: "ID",
      accessorKey: "loan_customers_id",
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Apellido",
      accessorKey: "lastname",
    },
    {
      header: "Télefono",
      accessorKey: "telephone",
    },
    {
      header: "C.I.",
      accessorKey: "ci",
    },
    {
      header: "Correo",
      accessorKey: "email",
    },
    {
      header: "Dirección",
      accessorKey: "direction",
    },
  ];

  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    enableSorting: false,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Filtro de búsqueda */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="Buscar..."
            className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-600">
            Total registros: {data.length}
          </span>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  key={index}
                >
                  {headerGroup.headers.map((header, i) => (
                    <th
                      key={i}
                      className="border border-gray-300 px-4 py-2 text-sm font-medium text-left"
                    >
                      {header.column.columnDef.header}
                    </th>
                  ))}
                  <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-left">
                    Acción
                  </th>
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                  key={index}
                >
                  {row.getVisibleCells().map((cell, cellIndex) => (
                    <td
                      className="px-4 py-2 border border-gray-300 text-sm text-gray-700"
                      key={cellIndex}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <td className="px-4 py-2 border border-gray-300">
                    <Link
                      href={`/dashboard/pages/loans/customers/${row.original.loan_customers_id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Ver Cliente
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            >
              Primera Página
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            >
              Página Anterior
            </button>
          </div>
          <span className="text-gray-700">
            Página {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            >
              Página Siguiente
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
            >
              Última Página
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTableCustomers;