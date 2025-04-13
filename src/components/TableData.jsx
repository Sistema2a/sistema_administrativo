"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Link from "next/link";
import FormPaymentLoan from "./customer/FormPaymentLoan";

const TableData = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCustomers = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}api/loan_customers`
      );
      setCustomers(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "revenue_id",
    },
    {
      header: "Nombre",
      accessorKey: "loans.loan_customers.name",
    },
    {
      header: "Télefono",
      accessorKey: "loans.loan_customers.telephone",
    },
    {
      header: "Interés a Pagar",
      accessorKey: "debt_revenue",
      accessorFn: (row) => row.debt_revenue + "$",
    },
    {
      header: "Fecha",
      accessorKey: "date",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
    {
      header: "Status",
      accessorKey: "status",
      accessorFn: (row) =>
        row.status == "pending" ? "Pendiente" : "Completado",
    },
  ];

  const table = useReactTable({
    data: customers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {isLoading ? (
          <div className="text-center text-gray-700 font-semibold py-4">
            Cargando datos...
          </div>
        ) : (
          <div className="overflow-x-auto">
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-2 border border-gray-300">
                      <FormPaymentLoan loan_revenue={row.original} />
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <Link
                        href={`/dashboard/pages/customers/${row.original.loans.loan_customers_id}`}
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
        )}
      </div>
    </div>
  );
};

export default TableData;