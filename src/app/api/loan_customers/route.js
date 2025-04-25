import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import axios from "axios";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    console.log("prisma");
    const loan_customers = await prisma.loan_customers.findMany({
      include: {
        loan: {
          include: {
            loan_revenue: {
              orderBy: {
                date: "desc",
              },
              take: 1,
            },
          },
        },
        debt_total_customers: true,
      },
    });

    const loans = await prisma.loans.findMany({
      include: {
        loan_customers: true,
        loan_revenue: {
          orderBy: {
            date: "desc",
          },
          take: 1,
        },
      },
    });

    const loan_revenues = await prisma.loan_revenue.findMany({
      include: {
        loans: {
          include: {
            loan_customers: true,
          },
        },
      },
    });

    console.log(loan_revenues);

    return NextResponse.json(loan_revenues);
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
  const res = NextResponse.next();
  //const formData = await req.formData();

  try {
    const formData = await req.formData();
    const file = formData.get("contract");
    console.log("formData", formData);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log("data", data);
    let {
      name,
      lastname,
      telephone,
      ci,
      direction,
      email,
      contract,
      loan,
      percentage,
      date,
    } = data;

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(
      process.cwd(),
      "public/contratos/prestamos",
      `contrato_${name}_${ci}_${date}.pdf`
    );
    await writeFile(filePath, buffer);
    console.log(`open ${filePath} to see the uploaded file`);

    loan = parseFloat(loan);
    percentage = parseInt(percentage);

    let revenue = loan * (percentage / 100);
    let loan_date = new Date(date);
    //let loan_date = Temporal.PlainDateTime.from(date).toString();
    let month = loan_date.toLocaleDateString("es-VE", { month: "long" });
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
                month,
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

    const cash = await axios.post(`http://localhost:3000/api/cash_register`, {
      description: `Prestamo a ${name} ${lastname}`,
      cash: -parseFloat(loan),
      date: loan_date,
      concept: "Prestamo",
    });
    console.log("Cash  " + cash);
    /*
    const cash_register = await prisma.cash_register.create({
      data: {
        description: `Prestamo a ${name} ${lastname}`,
        cash: loan,
        date: loan_date,
        concept: "Prestamo",
      },
    });

    const cash_principal = await prisma.cash_principal.update({
      where: {
        cash_id: 1,
      },
      data: {
        cash_total: {
          increment: -loan,
        },
      },
    });*/

    return NextResponse.json("add_customer");
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
