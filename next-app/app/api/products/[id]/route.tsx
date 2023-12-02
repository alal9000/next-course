import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "milk", price: 2.5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // read the request body an validate data, if not valid return 400
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // if user valid, fetch the user with the given id, if doesnt exist return 404
  if (params.id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  // update the given user and return it
  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch user from db
  // if not found return 404
  // delete the user
  // return 200

  if (params.id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  return NextResponse.json({});
}
