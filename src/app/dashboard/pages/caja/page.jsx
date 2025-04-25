import React from "react";
import axios from "axios";
import TableCaja from "@/components/accounts/caja/TableCaja";
import FormAddTransaction from "@/components/accounts/caja/FormAddTransaction";

const loadCashRegister = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cash_register`
  );

  return data;
};
const loadCash = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cash_principal`
  );
  return data;
};

const Caja = async () => {
  const cash_register = await loadCashRegister();
  const cash = await loadCash();
  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Encabezado */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          CAJA
        </h1>
        <p className="text-lg font-semibold text-gray-700 mb-6 text-center">
          Total en Caja:{" "}
          <span className="text-green-600 text-2xl font-bold">
            {cash ? cash : 0}$
          </span>
        </p>

        {/* Botón para agregar transacción */}
        <div className="w-full flex justify-end mb-6">
          <FormAddTransaction />
        </div>

        {/* Historial de transacciones */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
          Historial de transacciones
        </h3>
        <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-inner p-4">
          <TableCaja cash_register={cash_register} />
        </div>
      </div>
    </div>
  );
};

export default Caja;
