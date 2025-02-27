import Link from "next/link";

const AddTypeCustomer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-bold">
      <h1 className="text-3xl mb-10">QUÉ TIPO DE CLIENTE DESEA AGREGAR?</h1>

      <Link
        href="/dashboard/pages/addcustomer"
        className="w-[20rem] text-center bg-black text-white py-2 px-6 rounded-lg border-2 hover:bg-white hover:text-yellow-700 hover:border-yellow-700 mb-4"
      >
        Agregar Cliente para Préstamo
      </Link>
      <Link
        href="#"
        className="w-[20rem] text-center bg-black text-white py-2 px-6 rounded-lg border-2 hover:bg-white hover:text-yellow-700 hover:border-yellow-700 mb-4"
      >
        Agregar Inversor
      </Link>
    </div>
  );
};

export default AddTypeCustomer;
