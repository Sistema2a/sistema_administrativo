import React from "react";
import axios from "axios";
import FormAddTransactionReceivable from "@/components/accounts/account_receivable/FormAddTransactionReceivable";
import TableAccountReceivable from "@/components/accounts/account_receivable/TableAccountReceivable";
import FormAddAccount from "@/components/accounts/account_receivable/FormAddAccount";

const loadUsersAccountsReceivable = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/account_receivable/accounts`
  );
  const data1 = [
    { name: "Juan Perez", debt_total: 100 },
    { name: "Juan Perez", debt_total: 100 },
  ];

  if (data) {
    return data;
  } else {
    return data1;
  }
};

const loadHistoryAccountsReceivable = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/accounts/account_receivable/history_transactions`
  );

  console.log(data);

  const data1 = [
    {
      history_debt_sistema_id: 1,
      name: "Juan Perez",
      debt_total: 100,
      concept: "Compra",
      date: "2023-10-01",
    },
    {
      history_debt_sistema_id: 1,
      name: "Juan Perez",
      debt_total: 100,
      concept: "Compra",
      date: "2023-10-01",
    },
  ];

  return data;
};

const AccountReceivable = async () => {
  const accountsReceivable = await loadUsersAccountsReceivable();
  const historyAccountsReceivable = await loadHistoryAccountsReceivable();

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Encabezado */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Cuentas por Pagar
        </h1>

        <div className="w-full flex justify-end mb-6">
          <FormAddAccount />
        </div>

        {/* Botón para agregar transacción */}
        <div className="w-full flex justify-end mb-6">
          <FormAddTransactionReceivable
            accountsReceivable={accountsReceivable}
          />
        </div>
        {/* Usuarios a los que se debe pagar */}

        <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-inner p-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Nombre
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Monto por Cobrar
                </th>
              </tr>
            </thead>
            <tbody>
              {accountsReceivable.map((account, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {account.account}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {account.debt_total}$
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Historial de transacciones */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
          Historial de transacciones
        </h3>
        <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-inner p-4 mb-8">
          <TableAccountReceivable data={historyAccountsReceivable} />
        </div>
      </div>
    </div>
  );
};

export default AccountReceivable;
