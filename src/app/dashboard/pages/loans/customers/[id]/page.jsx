import axios from "axios";
import Image from "next/image";
import LoanSelector from "@/components/loans/LoanSelector";
import FormAddLoan from "@/components/loans/FormAddLoan";

const loadCustomer = async (id) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/loan_customers/${id}`
  );
  return data;
};

const page = async ({ params }) => {
  const { id } = await params;
  const customer = await loadCustomer(id);

  return (
    <div className="w-full h-full p-6 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <Image
            src={"/image.png"}
            alt="customer"
            width={100}
            height={100}
            className="rounded-full border-2 border-blue-500"
            placeholder="empty"
            blurDataURL="/image.png"
            priority={true}
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {customer.name} {customer.lastname}
            </h1>
            <p className="text-gray-600">ID: {customer.loan_customers_id}</p>
          </div>
        </div>
        <FormAddLoan customer={customer} />
      </div>

      {/* Loans Section */}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Préstamos Pendientes
        </h3>
        <LoanSelector loans={customer.loan} />
      </section>
    </div>
  );
};

export default page;
