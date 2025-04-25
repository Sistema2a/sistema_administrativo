"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import dayjs from "dayjs";

const TableAccountsPayable = ({ data }) => {
  const columns = [
    {
      header: "ID",
      accessorKey: "history_debt_sistema_id",
    },
    {
      header: "Nombre",
      accessorKey: "users_debt_sistema.user",
    },
    {
      header: "Monto",
      accessorKey: "amount",
      accessorFn: (row) => row.amount + "$",
    },
    {
      header: "Concepto",
      accessorKey: "concept",
    },
    {
      header: "Fecha",
      accessorKey: "date",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
  ];

  const [filtering, setFiltering] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <input
        type="text"
        value={filtering}
        placeholder="Buscar..."
        className="mb-4 p-2 border border-gray-300 rounded-md"
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr className="bg-gray-200 text-gray-700" key={index}>
              {headerGroup.headers.map((header, i) => (
                <th
                  key={i}
                  className="border border-gray-300 px-4 py-2 text-sm font-medium text-left"
                >
                  {header.column.columnDef.header}
                </th>
              ))}
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
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
        <span className="text-gray-700">
          Página {table.getState().pagination.pageIndex + 1} de{" "}
          {table.getPageCount()}
        </span>
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
    </>
  );
};

export default TableAccountsPayable;
