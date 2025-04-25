import axios from "axios";
import HistoryTableCustomers from "@/components/loans/HistoryTableCustomers";

const loadCustomersLoans = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/loan_customers/history_customers_loans`
  );

  return data;
};

const HistoryCustomers = async () => {
  const customers = await loadCustomersLoans();

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Encabezado */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Historial de Clientes de Préstamos
        </h1>

        {/* Tabla de historial */}
        <HistoryTableCustomers data={customers} />
      </div>
    </div>
  );
};

export default HistoryCustomers;
