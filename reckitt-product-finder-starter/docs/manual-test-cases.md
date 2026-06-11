# Manual Test Cases — URL Routing & Product Pages

**Scope:** the URL-driven wizard and the new `/products/<id>` pages.
**Setup:** run `npm run dev` and open the app (assume base URL `http://localhost:3000`).
Open the browser **DevTools → Network/Console** and keep an eye on the **address bar** —
several cases are about the URL itself.

Legend: **Pre** = preconditions, **Steps** = what to do, **Expected** = pass criteria.

---

## A. Wizard flow (clicking through the UI)

### TC-A1 — Head branch (full path)
- **Pre:** start at `/`.
- **Steps:** Click **Start Now** → select **Head** → **Next** → pick **Adult** + **Mild** → **Next**.
- **Expected:** Each screen advances Welcome → Need → Questions → Result. Final address bar contains `step=result`, `body=head`, `age=adult`, `severity=mild`. A recommendation is shown.

### TC-A2 — Throat → Sore throat branch
- **Steps:** Start → **Throat & Chest** → on the symptom screen choose **Sore Throat** → **Next** → pick **Adult** + **Moderate** → **Next**.
- **Expected:** Symptom screen appears (URL `step=symptom&body=throat`). After Next, URL has `symptom=sore-throat`. Final result URL includes `body=throat&symptom=sore-throat&age=adult&severity=moderate`.

### TC-A3 — Throat → Cough branch (skips questions)
- **Steps:** Start → **Throat & Chest** → choose **Cough** → **Next**.
- **Expected:** Goes **straight to the result** (no age/severity screen). URL contains `body=throat&symptom=cough&step=result`. The recommended product is a chest/cough product.

### TC-A4 — Heart branch (skips questions)
- **Steps:** Start → select **Heart** → **Next**.
- **Expected:** Goes **straight to the result**. URL contains `body=heart&step=result`. No questions screen shown.

### TC-A5 — Stomach branch
- **Steps:** Start → **Stomach** → **Next** → pick an audience + severity → **Next**.
- **Expected:** Questions screen shown, then result. URL includes `body=stomach&age=…&severity=…`.

---

## B. Shareable / deep links (typed directly into the address bar)

### TC-B1 — Clean result link (no `step`)
- **Steps:** Paste `/?body=head&age=adult&severity=mild` and press Enter.
- **Expected:** Loads **directly on the recommendation result** for that combination (step is derived). No need to click through the wizard.

### TC-B2 — Cough deep link
- **Steps:** Paste `/?body=throat&symptom=cough`.
- **Expected:** Loads directly on the result (chest/cough product).

### TC-B3 — Heart deep link
- **Steps:** Paste `/?body=heart`.
- **Expected:** Loads directly on the result for heart.

### TC-B4 — Partial link lands on the right screen
- **Steps:** Paste `/?body=head` (no age/severity).
- **Expected:** Lands on the **Questions** screen (not the result), because head requires answers.

### TC-B5 — Throat with no symptom
- **Steps:** Paste `/?body=throat`.
- **Expected:** Lands on the **throat symptom** sub-question screen.

### TC-B6 — Empty URL
- **Steps:** Paste `/` (no params).
- **Expected:** Shows the **Welcome** screen.

---

## C. Browser Back / Forward / Refresh

### TC-C1 — Browser Back steps backwards
- **Pre:** complete TC-A1 so you are on the result.
- **Steps:** Press the browser **Back** button repeatedly.
- **Expected:** Returns through Questions → Need → Welcome, one screen per Back press. The URL changes accordingly and the screen matches the URL.

### TC-C2 — Browser Forward re-advances
- **Steps:** After TC-C1, press the browser **Forward** button.
- **Expected:** Re-advances through the same screens; state is restored (previously chosen answers still reflected).

### TC-C3 — Refresh keeps you in place
- **Pre:** be on any mid-flow screen (e.g. Questions with Adult selected).
- **Steps:** Press **F5 / reload**.
- **Expected:** The **same screen** reloads with the same selections (state survives reload because it lives in the URL).

### TC-C4 — Answer selection does NOT flood history
- **Pre:** on the Questions screen.
- **Steps:** Click **Adult**, then **Teen**, then **Child** (changing your mind), then click a severity. Now press browser **Back** once.
- **Expected:** Back goes to the **previous screen** (Need/Symptom), **not** through each individual answer click. (Answer changes use `replace`, so they don't each create a history entry.)

---

## D. In-app navigation buttons

### TC-D1 — In-app "Previous"/"Back" buttons
- **Steps:** From each screen (Need, Symptom, Questions, Result) use the on-screen **Previous/Back** button.
- **Expected:**
  - Need → back to Welcome.
  - Symptom → back to Need.
  - Questions → back to Symptom (if throat) or Need (otherwise).
  - Result → back to Questions (head/stomach/sore-throat), Symptom (cough), or Need (heart).

### TC-D2 — Start Over / Restart
- **Pre:** on the result screen.
- **Steps:** Click **Start Over**.
- **Expected:** Returns to the **Welcome** screen and the URL is cleared back to `/` (no leftover params).

### TC-D3 — Logo click resets
- **Steps:** From a mid-flow screen, click the **Reckitt logo** in the header.
- **Expected:** Returns to the Welcome screen / home.

---

## E. Conditional option rules (regression — must still work)

### TC-E1 — Stomach disables "Child"
- **Steps:** Choose **Stomach** → on Questions, look at the audience options.
- **Expected:** **Child** is disabled / not selectable.

### TC-E2 — Throat + Child disables "Severe"
- **Steps:** Choose **Throat → Sore Throat** → pick **Child**.
- **Expected:** **Severe** severity becomes disabled. If "Severe" was already selected, it is cleared.

### TC-E3 — Head + Teen disables "Severe"
- **Steps:** Choose **Head** → pick **Teen**.
- **Expected:** **Severe** severity becomes disabled / cleared.

---

## F. Product pages (`/products/<id>`)

### TC-F1 — Open a product page directly
- **Steps:** Visit `/products/strepsils-original`.
- **Expected:** A standalone product page loads with brand, category, description, image, active ingredient, dosage, key benefits, tags, and (if present) the safety/disclaimer list.

### TC-F2 — Variant / flavour selectors work
- **Pre:** open a product that has variants/flavours (e.g. a Strepsils or Gaviscon product).
- **Steps:** Click different **pack size** / **flavour** chips.
- **Expected:** The image, description, price, ingredient/dosage update to match the selection without a full page reload.

### TC-F3 — "Where to buy" link
- **Steps:** On a product with a URL, click **Where to buy**.
- **Expected:** Opens the product's external link in a **new tab**.

### TC-F4 — Unknown product → 404
- **Steps:** Visit `/products/does-not-exist`.
- **Expected:** The **Not Found (404)** page is shown, not a crash.

### TC-F5 — Browser tab title / SEO metadata
- **Steps:** On a product page, check the **browser tab title**.
- **Expected:** Title reads `<Brand> — Reckitt` (per-product), not a generic title.

---

## G. Links between pages

### TC-G1 — Products library → detail
- **Steps:** Go to `/products`, click **View Details** on any card.
- **Expected:** Navigates to that product's `/products/<id>` page (no longer a dead `#` link).

### TC-G2 — Recommendation → product page
- **Pre:** reach a recommendation result.
- **Steps:** Click **View full details**.
- **Expected:** Opens the recommended product's `/products/<id>` page.

### TC-G3 — Product page back-links
- **Steps:** On a product page, use **All products** / breadcrumb **Products**, and **Find my product**.
- **Expected:** "All products"/"Products" → `/products`; "Find my product" → `/` (the finder).

---

## H. Build / static generation (optional, technical)

### TC-H1 — All product pages pre-render
- **Steps:** Run `npm run build`.
- **Expected:** Output lists `/products/[id]` as `● (SSG)` with one entry per product, `/` as `○ (Static)`, and the build completes with no type errors.

---

## Quick smoke test (5 minutes)
1. `/` → Start → Head → Adult + Mild → Next → result shows. (TC-A1)
2. Copy the result URL, open in a new tab → same result. (TC-B1)
3. Browser Back a few times → walks back through screens. (TC-C1)
4. On the result, click **View full details** → product page opens. (TC-G2)
5. Change a variant chip on the product page → details update. (TC-F2)
6. Visit `/products/xxx-bad-id` → 404. (TC-F4)
