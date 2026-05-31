import { NextResponse } from "next/server";
import { getOrdersWithProducts } from "@/lib/data";

export async function GET() {
  return NextResponse.json(getOrdersWithProducts());
}
