import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    const data = await req.json();

    let { payment, concept, date, loan_revenue } = data;
    let { revenue_id, debt_revenue, status, loans } = loan_revenue;
    let { loan_id, loan_customers } = loans;
    let {name, lastname, loan_customers_id} = loan_customers;

    // Verificar si el monto es mayor al monto del interés
    if (payment > debt_revenue) {
      return NextResponse.json(
        { error: "El monto ingresado no puede ser superior al monto del interés" },
        { status: 400 }
      );
    }

    if(concept === "") {
      return NextResponse.json(
        { error: "El concepto no puede estar vacío" },
        { status: 400 }
      );
    }else if(concept == "interes_prestamo") {
      const new_payment = await prisma.payment_loan.create({
        data: {
          payment_amount: payment,
          concept,
          payment_date: new Date(date),
          loan_revenue_id: revenue_id,
        },
      })

      const update_loan_revenue = await prisma.loan_revenue.update({
        where: { revenue_id },
        data: {
          debt_revenue: Number(debt_revenue) - Number(payment),
          status: debt_revenue - payment == 0 ? "Paid" : status,
        },
      });

      const cash = await axios.post(`http://localhost:3000/api/cash_register`, {
        description: `Pago de ${name} ${lastname}`,
        cash: payment,
        date: date,
        concept: "Pago de interes de prestamo",
      });
      
      console.log("New Cash Register: " + cash.data);
    }



    return NextResponse.json("data");
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
