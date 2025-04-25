import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prima = new PrismaClient();



export const GET = async () => {


    try {

        const get_customers_loans = await prima.loan_customers.findMany({
        })
        console.log(get_customers_loans)

        return NextResponse.json(get_customers_loans)


    }
    catch(error) {
        return NextResponse.json(
            {
                status: 500,
            },
            {
                message: error.message,
            }
        )
    }


}
