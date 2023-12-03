import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id }
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // read the request body an validate data, if not valid return 400
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // if user valid, fetch the user with the given id, if doesnt exist return 404
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // update the given user and return it
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email }
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // fetch user from db
  // if not found return 404
  // delete the user
  // return 200

  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  });

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  await prisma.user.delete({
    where: { id: user.id }
  });

  return NextResponse.json({});
}
