"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormAddTransaction = ({ payableUsers }) => {
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log("Data submitted:", data);
    const res = await axios.post(
      "/api/accounts/account_payable/history_transactions",
      data
    );

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
                  htmlFor="account"
                  className="block text-sm font-medium text-gray-700"
                >
                  Elegir cuenta
                </label>
                <div className="relative mt-1">
                  <select
                    id="account_id"
                    {...register("account_id", {
                      required: "El concepto es obligatorio",
                      validate: (value) => value != "",
                    })}
                    className="block w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {payableUsers.map((user, index) => (
                      <option key={index} value={user.user_debt_sistema_id}>
                        {user.user}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.account_id && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.account_id.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Monto
                </label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="amount"
                    {...register("amount", {
                      required: "El monto es obligatoria",
                    })}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Ingrese un monto"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    $
                  </span>
                </div>
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.amount.message}
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
                  Seleccione un concepto
                </label>
                <div className="relative mt-1">
                  <select
                    id="concept"
                    {...register("concept", {
                      required: "El concepto es obligatorio",
                      validate: (value) => value != "",
                    })}
                    className="block w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="sumar_deuda">Sumar a la deuda</option>
                    <option value="pago_deuda">Realizar pago</option>
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
