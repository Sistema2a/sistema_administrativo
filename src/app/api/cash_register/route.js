import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const cash_register = await prisma.cash_register.findMany({});

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

    console.log(typeof description, typeof cash, typeof date, typeof concept);

    date = new Date(date);

    console.log(typeof description, typeof cash, typeof date, typeof concept);

    const cash_register = await prisma.cash_register.create({
      data: {
        description,
        cash,
        date,
        concept,
      },
    });

    console.log("Cash Register: " + cash_register);

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

    console.log("Cash Principal: " + cash_register);

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
