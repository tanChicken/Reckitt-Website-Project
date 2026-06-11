// ── Feature flags ────────────────────────────────────────────────────────────
// Central place to switch unfinished/future features on and off.
//
// PRODUCT_PAGES_ENABLED controls the whole "/products" area:
//   • the product library/listing page   →  /products
//   • the individual product detail pages →  /products/<id>
//   • the "View full details" link on the recommendation screen
//
// While this is `false`, all of the above are hidden and any direct visit to a
// /products URL returns the 404 (Not Found) page. The code is fully preserved.
//
// 👉 TO RE-ENABLE FOR THE FUTURE: change this to `true` and save. That's it —
//    the pages and links come back automatically, no other edits needed.
export const PRODUCT_PAGES_ENABLED = false;
