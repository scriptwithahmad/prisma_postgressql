import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json(); 
    console.log(res)
    return NextResponse.json(res);
}