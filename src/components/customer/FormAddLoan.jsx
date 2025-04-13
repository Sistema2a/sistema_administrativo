"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormAddLoan = ({ customer }) => {
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    data.id = customer.loan_customers_id;
    data.name = customer.name;
    data.lastname = customer.lastname;

    const res = await axios.post("/api/loan_customers/new_loan", data);

    if (res.status == 200) router.push("/dashboard");
  });

  return (
    <>
      <button
        className="bg-black text-yellow-600 px-[2rem] py-[1rem]"
        onClick={() => setShowForm(true)}
      >
        Agregar préstamo
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Agregar Préstamo
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Campo Monto */}
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Monto
                </label>
                <div className="relative mt-1">
                  <input
                    type="number"
                    id="loan"
                    {...register("loan", {
                      required: "El monto es obligatorio",
                    })}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Ingrese el monto"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    $
                  </span>
                </div>
                {errors.loan && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.loan.message}
                  </p>
                )}
              </div>

              {/* Campo Porcentaje */}
              <div>
                <label
                  htmlFor="percentage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Porcentaje
                </label>
                <div className="relative mt-1">
                  <input
                    type="number"
                    id="percentage"
                    {...register("percentage", {
                      required: "El porcentaje es obligatorio",
                    })}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Ingrese el porcentaje"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    %
                  </span>
                </div>
                {errors.percentage && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.percentage.message}
                  </p>
                )}
              </div>

              {/* Campo Fecha */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha
                </label>
                <input
                  type="datetime-local"
                  id="date"
                  {...register("date", { required: "La fecha es obligatoria" })}
                  className="mt-1 block w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormAddLoan;
