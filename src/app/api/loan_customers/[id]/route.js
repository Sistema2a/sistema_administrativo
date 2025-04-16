import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  try {
    let { id } = await params;
    id = parseInt(id);

    const customer = await prisma.loan_customers.findUnique({
      where: {
        loan_customers_id: id,
      },
      include: {
        loan: {
          include: {
            loan_revenue: true,
          },
        },
        debt_total_customers: true,
      },
    });

    return NextResponse.json(customer);
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

export const POST = async (request, { params }) => {
  try {
    let { id } = await params;
    id = parseInt(id);

    console.log(id);
    const last_loan = await prisma.loans.findUnique({
      where: {
        loan_id: id,
      },
      include: {
        loan_revenue: {
          orderBy: {
            date: "desc",
          },
          take: 1,
        },
        loan_customers: true,
      },
    });
    const last_loan_revenue = last_loan.loan_revenue[0];

    let new_date = last_loan_revenue.date;
    new_date.setMonth(new_date.getMonth() + 1);
    let month = new_date.toLocaleDateString("es-VE", {month:"long"})

    const new_loan_revenue = await prisma.loan_revenue.create({
      data: {
        debt_revenue: last_loan_revenue.debt_revenue,
        month,
        age: last_loan_revenue.age,
        date: new_date,
        loan_id: last_loan_revenue.loan_id,
      },
    });

    return NextResponse.json(new_loan_revenue);
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
