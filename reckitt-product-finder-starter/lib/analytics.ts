import type { FinderAnswers, FunnelEvent } from "@/types/productFinder";

export async function trackFunnelEvent(
  eventName: string,
  step: number,
  answers?: Partial<FinderAnswers>
) {
  const payload: FunnelEvent = {
    eventName,
    step,
    answers,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch("/api/product-finder-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch {
    // Do not block the user journey if analytics fails.
  }
}
