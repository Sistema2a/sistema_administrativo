"use client";
import data from "@/data.json";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Link from "next/link";

const next_ip = process.env.NEXT_PUBLIC_API_URL;
console.log(next_ip);
const TableData = () => {
  const [customers, setCustomers] = useState([
    {
      revenue_id: 2,
      debt_revenue: 60,
      num_month: 1,
      age: 2025,
      date: "2025-02-28T00:00:00.000Z",
      status: "pending",
      loan_id: 2,
      create_at: "2025-03-01T00:45:23.165Z",
      update_at: "2025-03-01T00:45:23.165Z",
      loans: {
        loan_id: 2,
        loan: 300,
        percentage: 20,
        revenue: 60,
        date: "2025-02-28T00:00:00.000Z",
        status: "pending",
        loan_customers_id: 2,
        create_at: "2025-03-01T00:45:23.165Z",
        update_at: "2025-03-01T00:45:23.165Z",
        loan_customers: [],
      },
    },
  ]);

  const loadCustomers = async () => {
    // const { data } = await axios.get(
    //   `http://${process.env.NEXT_URL}/api/loan_customers`
    // );
    console.log(process.env.NEXT_IP);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/loan_customers`
    );
    setCustomers(data);
  };
  useEffect(() => {
    loadCustomers();
  }, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "loan_id",
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
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr className="text-center" key={index}>
              {headerGroup.headers.map((header, i) => (
                <th key={i}>{header.column.columnDef.header}</th>
              ))}
              <th></th>
              <th></th>
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => {
            return (
              <tr className="text-center" key={index}>
                {row.getVisibleCells().map((cell, cellIndex) => {
                  return (
                    <td className="px-4" key={cellIndex}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
                <td className="px-4">
                  <button>Pagar</button>
                </td>
                <td className="px-4">
                  <button>Renovar</button>
                </td>
                <td className="px-4">
                  <Link
                    href={`/dashboard/pages/customers/${row.original.loans.loan_customers_id}`}
                  >
                    Ver Cliente
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
