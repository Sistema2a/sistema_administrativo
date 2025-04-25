import TableData from "@/components/loans/TableData";

const LoansTable = async () => {
  return (
    <div className="w-full h-full flex items-center  flex-col">
      <h1 className="text-4xl font-bold my-10">Tabla de Préstamos</h1>
      <TableData />
    </div>
  );
};

export default LoansTable;
