import axios from "axios"

const loadCustomer = async (id) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/loan_customers/${id}`
  );
  return data;
}

const page = async ({params}) => {

  const {id} = await params
  console.log(id, typeof id)
  const customer = await loadCustomer(id)

  return (
    <div>page</div>
  )
}

export default page