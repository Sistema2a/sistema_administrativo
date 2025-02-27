import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const POST = async (req) => {
  try {
    const data = await req.json();
    console.log(data);
    const { num_month, age } = data;

    const add_month = await prisma.loan_months.create({
      data: {
        num_month,
        age,
      },
    });

    return NextResponse.json(add_month);
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
