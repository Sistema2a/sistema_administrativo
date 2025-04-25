import { useState } from "react";
import {
  FaAddressBook,
  FaListUl,
  FaMoneyBill,
  FaHistory,
} from "react-icons/fa";
import { MdBusinessCenter, MdAccountBalance, MdPayments } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import Link from "next/link";

const Sidebar = () => {
  const [menuStates, setMenuStates] = useState({
    investors: false,
    loans: false,
    accounts: false,
  });

  const toggleMenu = (menu) => {
    setMenuStates((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

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
            <button
              onClick={() => toggleMenu("loans")}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <MdPayments className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4 flex-1 text-left">Préstamos</span>
              <span className="text-sm">{menuStates.loans ? "▲" : "▼"}</span>
            </button>
            {menuStates.loans && (
              <ul className="mt-2 space-y-2 pl-8">
                <li>
                  <Link
                    href="/dashboard/pages/loans/addcustomer"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    <FaAddressBook className="w-3 h-3 text-gray-400 group-hover:text-white" />
                    <span className="ml-4">Agregar Cliente</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/pages/loans/loans_table"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    <FaListUl className="w-3 h-3 text-gray-400 group-hover:text-white" />
                    <span className="ml-4">Tabla de Préstamos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/pages/loans/customers/history"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    <FaHistory className="w-3 h-3 text-gray-400 group-hover:text-white" />
                    <span className="ml-4">Historial de Clientes</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Inversionistas con Submenú */}
          <li>
            <button
              onClick={() => toggleMenu("investors")}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <FaMoneyBill className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4 flex-1 text-left">Inversionistas</span>
              <span className="text-sm">
                {menuStates.investors ? "▲" : "▼"}
              </span>
            </button>
            {menuStates.investors && (
              <ul className="mt-2 space-y-2 pl-8">
                <li>
                  <Link
                    href="#"
                    className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    Agregar Inversor
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    Tabla de Inversores
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block p-2 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    Historial de Inversores
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleMenu("accounts")}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <MdAccountBalance className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <span className="ml-4 flex-1 text-left">Cuentas</span>
              <span className="text-sm">{menuStates.accounts ? "▲" : "▼"}</span>
            </button>
            {menuStates.accounts && (
              <ul className="mt-2 space-y-2 pl-8">
                <li>
                  <Link
                    href="/dashboard/pages/accounts/account_payable"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    <GrMoney className="w-3 h-3 text-gray-400 group-hover:text-white" />
                    <span className="ml-4">Cuentas por Pagar</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/pages/accounts/account_receivable"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    <GrMoney className="w-3 h-3 text-gray-400 group-hover:text-white" />
                    <span className="ml-4">Cuentas por Cobrar</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/pages/caja"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                  >
                    <MdBusinessCenter className="w-3 h-3 text-gray-400 group-hover:text-white" />
                    <span className="ml-4">CAJA</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
