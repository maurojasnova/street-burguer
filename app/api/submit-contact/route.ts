import { NextResponse } from "next/server";

type Form = {
    name?: string,
    email?: string,
    message?: string
}

export async function POST(request: Request) {
  const data: Form = await request.json();
  console.log("data: ", data)
  const { name, email, message } = data

  return NextResponse.json({ name, email, message })
}