import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const accounts = await prisma.users_account_receivable.findMany({});
    return NextResponse.json(accounts);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching accounts" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();

    let { account, date } = data;

    let debt_total = 0;

    const newAccountReceivable = await prisma.users_account_receivable.create({
      data: {
        account,
        debt_total,
      },
    });

    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
