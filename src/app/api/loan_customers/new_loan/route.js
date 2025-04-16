import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const data = await req.json();

    let { loan, percentage, date, id, name, lastname } = data;

    loan = parseFloat(loan);
    percentage = parseInt(percentage);
    id = parseInt(id);
    let revenue = loan * (percentage / 100);
    date = new Date(date);
    //let num_month = date.getMonth() + 1;
    let month = date.toLocaleDateString("es-VE",{month:"long"});

    let age = date.getYear();

    const new_loan = await prisma.loans.create({
      data: {
        loan,
        percentage,
        revenue,
        date,
        loan_customers_id: id,
        loan_revenue: {
          create: {
            debt_revenue: revenue,
            month,
            age,
            date,
          },
        },
      },
    });

    const cash = await axios.post(`http://localhost:3000/api/cash_register`, {
      description: `Prestamo a ${name} ${lastname}`,
      cash: -loan,
      date: date,
      concept: "Prestamo",
    });

    return NextResponse.json(new_loan);
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
