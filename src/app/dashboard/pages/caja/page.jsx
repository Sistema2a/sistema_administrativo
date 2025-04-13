import React from "react";
import axios from "axios";

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
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Descripción</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Monto</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Fecha</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Concepto</th>
              </tr>
            </thead>
            <tbody>
              {cash_register.map((item, index) => (
                <tr
                  key={item.cash_register_id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    {item.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    {item.cash}$
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    {new Date(item.date).toLocaleDateString("es-VE", {
                      timeZone: "America/Caracas",
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">
                    {item.concept}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Caja;