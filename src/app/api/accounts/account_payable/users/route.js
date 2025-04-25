import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    console.log("Fetching history_debt_sistema...");
    const users_debt_sistema = await prisma.users_debt_sistema.findMany({});
    console.log("Fetched history_debt_sistema:", users_debt_sistema);

    return NextResponse.json(users_debt_sistema);
  } catch (error) {
    console.error("Error fetching history_debt_sistema:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
};
