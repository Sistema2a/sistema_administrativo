import { FaAddressBook, FaListUl, FaMoneyBill } from "react-icons/fa";
import { MdBusinessCenter, MdAccountBalance } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="h-screen w-full lg:w-[20vw] bg-gray-800 text-white shadow-lg"
      aria-label="Sidebar"
    >
      <div className="h-full px-4 py-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Menú</h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/pages/loans_table"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <FaListUl className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4">Tabla de Préstamos</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/pages/addtypecustomer"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <FaAddressBook className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4">Agregar Cliente</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/pages/caja"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <MdBusinessCenter className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4">CAJA</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/pages/customers"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <IoPersonSharp className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4">Clientes</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <MdAccountBalance className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4">Cuentas</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <FaMoneyBill className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4">Inversionistas</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;