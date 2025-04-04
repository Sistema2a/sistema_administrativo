import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const cash_principal = await prisma.cash_principal.findUnique({
      where: {
        cash_id: 1,
      },
    });

    return NextResponse.json(cash_principal.cash_total);
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
}