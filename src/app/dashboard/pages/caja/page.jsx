import React from "react";
import axios from "axios";
import TableCaja from "@/components/TableCaja";
import FormAddTransaction from "@/components/FormAddTransaction";


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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">CAJA</h1>
        <p className="text-lg font-semibold text-gray-700 mb-6 text-center">
          Total en Caja: <span className="text-green-600">{cash ? cash : 0}$</span>
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Historial de transacciones</h3>
        <FormAddTransaction  />
        <div className="overflow-x-auto">
          <TableCaja cash_register={cash_register} />
        </div>
      </div>
    </div>
  );
};

export default Caja;