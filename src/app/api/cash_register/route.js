import { Temporal } from "temporal-polyfill";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    let cash_register = await prisma.cash_register.findMany({});

    return NextResponse.json(cash_register);
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
      },
      {
        message: error.message,
      }
    );
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log(data);

    let { description, cash, date, concept } = data;

    cash = Number(cash);
    date = new Date(date);


    const cash_register = await prisma.cash_register.create({
      data: {
        description,
        cash,
        date,
        concept,
      },
    });


    const cash_principal = await prisma.cash_principal.update({
      where: {
        cash_id: 1,
      },
      data: {
        cash_total: {
          increment: cash,
        },
      },
    });


    return NextResponse.json(cash_register);
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
      },
      {
        message: error.message,
      }
    );
  }
};
