import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();


export const GET = async (request, {params} ) => {
    try{
        const {id} = await  params
        console.log(id)

        return NextResponse.json('params.id')

    }catch(error){
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