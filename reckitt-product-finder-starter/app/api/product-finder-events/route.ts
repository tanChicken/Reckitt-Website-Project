import { NextRequest, NextResponse } from "next/server";

/**
 * Simple analytics endpoint for the product finder funnel.
 * In production, forward these events to GA4, BigQuery, Supabase, or a CRM.
 */
export async function POST(request: NextRequest) {
  const event = await request.json();

  // For local development only. Replace this with your real analytics integration.
  console.log("[product-finder-event]", event);

  return NextResponse.json({ ok: true });
}
