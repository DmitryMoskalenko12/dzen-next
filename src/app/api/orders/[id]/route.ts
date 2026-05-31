import { NextResponse } from "next/server";
import { deleteOrderFromDb } from "@/lib/data";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const numericId = Number(id);
  deleteOrderFromDb(numericId);
  return NextResponse.json({ ok: true, id: numericId });
}
