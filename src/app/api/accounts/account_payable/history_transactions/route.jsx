import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import axios from "axios";
const prisma = new PrismaClient();

const url_cash_register = `${process.env.NEXT_PUBLIC_API_URL}/api/cash_register`;

export const GET = async () => {
  try {
    const history_trasactions = await prisma.history_debt_sistema.findMany({
      include: {
        users_debt_sistema: true,
      },
    });

    return NextResponse.json(history_trasactions);
  } catch (error) {
    console.error("Error fetching history_debt_sistema:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();

    console.log("Data received:", data);

    let { account_id, amount, concept, date } = data;

    amount = parseFloat(amount);
    date = new Date(date);
    account_id = parseInt(account_id);

    const user_debt_sistema = await prisma.users_debt_sistema.findUnique({
      where: {
        user_debt_sistema_id: account_id,
      },
    });

    let { user, debt_total } = user_debt_sistema;

    if (concept === "pago_deuda") {
      const add_history_transaction = await prisma.history_debt_sistema.create({
        data: {
          amount: -amount,
          concept: "Pago Realizado",
          date,
          user_debt_sistema_id: account_id,
        },
      });

      const update_user_debt_sistema = await prisma.users_debt_sistema.update({
        where: {
          user_debt_sistema_id: account_id,
        },
        data: {
          debt_total: {
            decrement: amount,
          },
        },
      });

      const cash_register = await axios.post(url_cash_register, {
        description: `Pago Realizado a ${user}`,
        cash: -amount,
        date: date,
        concept: "Cuenta por pagar",
      });

      return NextResponse.json("Transacción creada correctamente");
    } else {
      const add_history_transaction = await prisma.history_debt_sistema.create({
        data: {
          amount: amount,
          concept: "Monto sumado a la deuda",
          date,
          user_debt_sistema_id: account_id,
        },
      });
      const update_user_debt_sistema = await prisma.users_debt_sistema.update({
        where: {
          user_debt_sistema_id: account_id,
        },
        data: {
          debt_total: {
            increment: amount,
          },
        },
      });

      const cash_register = await axios.post(url_cash_register, {
        description: `Pago Realizado a ${user}`,
        cash: amount,
        date: date,
        concept: "Cuenta por pagar",
      });

      return NextResponse.json("Transacción creada correctamente");
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create history_debt_sistema" },
      { status: 500 }
    );
  }
};
