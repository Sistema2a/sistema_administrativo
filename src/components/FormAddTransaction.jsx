"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormAddTransaction = () => {
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await axios.post("/api/cash_register", data);

    if (res.status == 200) router.push("/dashboard");
  });

  return (
    <>
      <button
        className="bg-black text-yellow-600 px-[1rem] py-[.5rem]"
        onClick={() => setShowForm(true)}
      >
        Ingresar Transacción
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
              Agregar Transacción
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">
              
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción
                </label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="description"
                    {...register("description", {
                      required: "La descripción es obligatoria",
                    })}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Ingrese una descripción"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    $
                  </span>
                </div>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="cash"
                  className="block text-sm font-medium text-gray-700"
                >
                  Monto
                </label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="cash"
                    {...register("cash", {
                      required: "El monto es obligatoria",
                    })}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Ingrese un monto"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    $
                  </span>
                </div>
                {errors.cash && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cash.message}
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

              <div>
                <label
                  htmlFor="concept"
                  className="block text-sm font-medium text-gray-700"
                >
                  Concepto
                </label>
                <div className="relative mt-1">
                <select
                    id="concept"
                    {...register("concept", {
                      required: "El concepto es obligatorio",
                      validate: value => value!=""
                    })}
                    className="block w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >

                    <option value="Pago de capital de prestamo">
                      Pago de capital de Préstamo
                    </option>
                    <option value="Pago de interes de prestamo">Pago de interés</option>
                    <option value="Gasto personal">Gasto Personal</option>
                    <option value="Cuenta por pagar">Cuenta por cobrar</option>
                    <option value="Pago cuenta por pagar">Pago cuenta por cobrar</option>
                    <option value="Capital de Inversor">Capital de Inversor</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                {errors.concept && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.concept.message}
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

export default FormAddTransaction;
