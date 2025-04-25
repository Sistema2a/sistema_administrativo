import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import axios from "axios";

const prisma = new PrismaClient();

const url_cash_register = `${process.env.NEXT_PUBLIC_API_URL}/api/cash_register`;

export const GET = async () => {
  try {
    const history_transations =
      await prisma.history_account_receivable.findMany({
        include: {
          users_account_receivable: true,
        },
      });
    return NextResponse.json(history_transations);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching accounts" },
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

    const user_account_receivable =
      await prisma.users_account_receivable.findUnique({
        where: {
          users_account_receivable_id: account_id,
        },
      });

    console.log("User account receivable:", user_account_receivable);

    let { account, debt_total } = user_account_receivable;

    if (concept === "cobro_deuda") {
      const add_history_transaction =
        await prisma.history_account_receivable.create({
          data: {
            amount: -amount,
            concept: "Deuda saldada por el cliente",
            date,
            users_account_receivable_id: account_id,
          },
        });

      const update_user_account_receivable =
        await prisma.users_account_receivable.update({
          where: {
            users_account_receivable_id: account_id,
          },
          data: {
            debt_total: {
              decrement: amount,
            },
          },
        });

      const cash_register = await axios.post(url_cash_register, {
        description: `Pago Realizado por ${account}`,
        cash: amount,
        date: date,
        concept: "Pago de cuenta por cobrar",
      });

      return NextResponse.json("Transacción creada correctamente");
    } else {
      console.log("test");

      const add_history_account_receivable =
        await prisma.history_account_receivable.create({
          data: {
            amount,
            concept: "Cuenta por cobrar",
            date,
            users_account_receivable_id: account_id,
          },
        });

      console.log(add_history_account_receivable);

      const update_user_account_receivable =
        await prisma.users_account_receivable.update({
          where: {
            users_account_receivable_id: account_id,
          },
          data: {
            debt_total: {
              increment: amount,
            },
          },
        });
      console.log(update_user_account_receivable);

      const cash_register = await axios.post(url_cash_register, {
        description: `Cuenta por cobrar de ${account}`,
        cash: -amount,
        date: date,
        concept: "Cuenta por cobrar",
      });

      return NextResponse.json("Transacción creada correctamente");
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
