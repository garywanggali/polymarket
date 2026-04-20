import { NextResponse } from "next/server";

import { ingestGammaEvents } from "@/lib/ingest";

export const runtime = "nodejs";

export async function POST() {
  const summary = await ingestGammaEvents();
  return NextResponse.json(summary);
}
