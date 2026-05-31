import { NextResponse } from "next/server";
import { createProduct, ordersDb, productsDb } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const specification = searchParams.get("specification");
  let items = productsDb.map((product) => ({
    ...product,
    orderTitle:
      ordersDb.find((order) => order.id === product.order)?.title || "—",
  }));
  if (type) items = items.filter((product) => product.type === type);
  if (specification)
    items = items.filter((product) => product.specification === specification);
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    title?: string;
    type?: string;
    order?: number;
    specification?: string;
  };
  const title = String(body.title || "").trim();
  const type = String(body.type || "").trim();
  const order = Number(body.order);
  if (title.length < 3 || !type || !order) {
    return NextResponse.json(
      { message: "Заполните название, тип и приход" },
      { status: 400 },
    );
  }
  return NextResponse.json(
    createProduct({ title, type, order, specification: body.specification }),
    { status: 201 },
  );
}
