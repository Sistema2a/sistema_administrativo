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
    <div>
      <h1 className="text-4xl font-bold">CAJA</h1>
      <p>Total en Caja: {cash}$</p>

      <h3 className="text-xl font-bold">Historial de transacciones en caja</h3>
      <table>
        <thead>
          <tr>
            <th>Descriptción</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Concepto</th>
          </tr>
        </thead>
        <tbody>
          {cash_register.map((item) => (
            <tr key={item.cash_register_id}>
              <td>{item.description}</td>
              <td>{item.cash}$</td>
              <td>
                {new Date(item.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </td>
              <td>{item.concept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Caja;
