import type { AudienceId, BodyPartId, SeverityId } from "@/types/productFinder";

// ── Finder availability rules ────────────────────────────────────────────────
// Single source of truth for which answer combinations are allowed. Used both by
// the UI (to disable options) and by the URL parser (to reject hand-crafted or
// shared links that contain a disallowed combination). Keeping the rules here
// means the on-screen "disabled" state and the validation can never drift apart.

/** Is this audience selectable for the given body area? */
export function isAudienceAvailable(
  needId: BodyPartId | undefined,
  audienceId: AudienceId,
): boolean {
  // Stomach products are not offered for young children.
  if (needId === "stomach" && audienceId === "child") return false;
  return true;
}

/** Is this severity selectable for the given body area + audience combination? */
export function isSeverityAvailable(
  needId: BodyPartId | undefined,
  audienceId: AudienceId | undefined,
  severityId: SeverityId,
): boolean {
  // "Severe" is not offered for these younger-audience combinations.
  if (needId === "throat" && audienceId === "child" && severityId === "severe")
    return false;
  if (needId === "head" && audienceId === "teen" && severityId === "severe")
    return false;
  return true;
}
