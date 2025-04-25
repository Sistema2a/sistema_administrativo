"use client";
import { useState } from "react";
import axios from "axios";
import FormPaymentLoan from "./FormPaymentLoan";

const LoanSelector = ({ loans }) => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const extenderLoan = async (loanId) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/loan_customers/${loanId}`
    );
    console.log(data);
    return data;
  };

  return (
    <div className="mt-4">
      <select
        className="border border-gray-300 rounded px-4 py-2"
        onChange={(e) =>
          setSelectedLoan(
            loans.find((loan) => loan.loan_id === parseInt(e.target.value))
          )
        }
      >
        <option value="">Seleccione un préstamo</option>
        {loans.map((loan) => (
          <option key={loan.loan_id} value={loan.loan_id}>
            Préstamo {loan.loan}$
          </option>
        ))}
      </select>

      {selectedLoan && (
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Monto</th>
                <th className="border border-gray-300 px-4 py-2">Fecha</th>
                <th className="border border-gray-300 px-4 py-2">Estado</th>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="border border-gray-300 px-4 py-2">
                  {selectedLoan.loan_id}
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  {selectedLoan.loan}$
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  {new Date(selectedLoan.date).toLocaleDateString({
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  {selectedLoan.status}
                </th>
                <th className="border border-gray-300 px-4 py-2">
                <FormPaymentLoan id={selectedLoan.loan_id} />
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  <button onClick={() => extenderLoan(selectedLoan.loan_id)}>Extender</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedLoan.loan_revenue.map((revenue) => (
                <tr key={revenue.revenue_id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {revenue.revenue_id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {revenue.debt_revenue}$
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(revenue.date).toLocaleDateString({
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {revenue.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <FormPaymentLoan id={revenue.revenue_id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoanSelector;
