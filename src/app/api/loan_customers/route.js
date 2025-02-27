import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    console.log("prisma");
    const loan_customers = await prisma.loan_customers.findMany();

    console.log(loan_customers);

    return NextResponse.json(loan_customers);
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

export const POST = async (req, res) => {
  try {
    const data = await req.json();

    let {
      name,
      lastname,
      telephone,
      ci,
      direction,
      email,
      loan,
      percentage,
      date,
    } = data;

    loan = parseFloat(loan);
    percentage = parseInt(percentage);

    let revenue = loan * (percentage / 100);
    let loan_date = new Date(date);
    let num_month = loan_date.getMonth();
    let age = loan_date.getFullYear();
    let debt_total = loan + revenue;

    const add_customer = await prisma.loan_customers.create({
      data: {
        name,
        lastname,
        telephone,
        ci,
        direction,
        email,
        loan: {
          create: {
            loan,
            percentage,
            revenue,
            date: loan_date,
            loan_revenue: {
              create: {
                debt_revenue: revenue,
                num_month,
                age,
                date: loan_date,
              },
            },
          },
        },
        debt_total_customers: {
          create: {
            debt_total,
          },
        },
      },
    });

    console.log(add_customer);

    return NextResponse.json(add_customer);
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
