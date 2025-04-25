import FormAddCustomer from "@/components/loans/FormAddCustomer";

const AddCustomer = () => {
  return (
    <div className=" h-[100%] flex flex-col items-center justify-center gap-6">
      <h1 className="font-bold text-xl">AGREGAR NUEVO CLIENTE PARA PRÉSTAMO</h1>
      <FormAddCustomer />
    </div>
  );
};

export default AddCustomer;
