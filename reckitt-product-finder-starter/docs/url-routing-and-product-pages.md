# URL Routing & Product Pages

This document describes the routing architecture introduced to make the product
finder shareable and SEO-friendly. Previously the entire experience lived inside
a single client component (`ProductFinder`) with the current screen tracked by a
local `useState` step counter — nothing was reflected in the URL. Now:

- **Every wizard screen has a real, shareable link** driven by query params.
- **Every product has its own page** at `/products/<id>`.
- **Browser Back / Forward / Refresh** all work as expected.

---

## 1. The wizard is driven by the URL

The whole funnel state now lives in the query string instead of React state.
This is the single source of truth — `ProductFinder` reads it on every render and
writes to it on every navigation.

### Query parameter contract

| Param      | Values                                          | Meaning                              |
| ---------- | ----------------------------------------------- | ------------------------------------ |
| `step`     | `welcome` `need` `symptom` `questions` `result` | Navigational stage (see below)       |
| `body`     | `head` `throat` `heart` `stomach`               | Body area (NeedSelectionStep)        |
| `symptom`  | `sore-throat` `cough`                           | Throat sub-question (throat only)    |
| `age`      | `adult` `teen` `child` `someone-else`           | Audience                             |
| `severity` | `mild` `moderate` `severe` `not-sure`           | Symptom severity                     |

### Example URLs

| URL                                          | Screen shown                          |
| -------------------------------------------- | ------------------------------------- |
| `/`                                          | Welcome                               |
| `/?step=need`                                | Body-area selection                   |
| `/?step=symptom&body=throat`                 | Throat symptom sub-question           |
| `/?step=questions&body=head`                 | Age + severity questions              |
| `/?body=head&age=adult&severity=mild`        | Recommendation result                 |
| `/?body=throat&symptom=cough`                | Recommendation result (cough → chest) |
| `/?body=heart`                               | Recommendation result (heart)         |

### How the current screen is decided — `deriveStep()`

`step` is written on every in-app navigation so Back/Forward land exactly where
expected. But it is **optional**: if it is missing (for example an externally
shared link), the stage is derived from the answers present:

```
if no `body`                              -> welcome
if body = throat and no `symptom`         -> symptom
if effective need is heart or chest       -> result   (these skip the questions)
if `age` and `severity` are both present  -> result
otherwise                                 -> questions
```

"Effective need" accounts for the one rewrite in the flow: a `throat` body with a
`cough` symptom is treated as `chest` for the purposes of the recommendation.

This dual approach means a clean, hand-written link such as
`/?body=head&age=adult&severity=mild` still resolves straight to the result page,
while internal navigation stays precise.

### Branching preserved

The original flow had branches that are faithfully reproduced:

- `throat` → asks a symptom sub-question first.
- `cough` → rewrites the need to `chest` and skips the questions screen.
- `heart` → skips the questions screen and goes straight to the result.
- `head` / `stomach` → go through the questions screen.

### push vs. replace

`ProductFinder` uses a small `navigate()` helper that writes param updates to the
URL:

- **Step transitions** (Welcome → Need, Need → Questions, Next, Back, etc.) use
  `router.push` so each creates a history entry and Back works naturally.
- **Picking an answer** within the questions screen (age / severity) uses
  `router.replace`, so selecting and re-selecting an option does not flood the
  browser history.

### Suspense requirement

`useSearchParams()` must be wrapped in a `<Suspense>` boundary in the Next.js App
Router. The home page does this:

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <ProductFinder />
    </Suspense>
  );
}
```

---

## 2. Product pages — `/products/<id>`

Each product in `data/productFinder.ts` now has its own page, reachable at
`/products/<product.id>` (e.g. `/products/strepsils-original`).

- **Server component**: `app/products/[id]/page.tsx`
  - `generateStaticParams()` pre-renders one static page per product at build time.
  - `generateMetadata()` sets a per-product `<title>` and `description` for SEO.
  - Unknown ids return `notFound()` (the 404 page).
- **Client island**: `components/products/ProductDetail.tsx`
  - Handles the interactive variant / flavour selectors.
  - Reuses the same display-derivation logic as the recommendation step, so a
    product looks identical whether reached through the finder or via a direct
    link (image, description, active ingredient, dosage, key benefits, price,
    "Where to buy", and safety/disclaimer points).

### Where product links appear

- **Products library** (`app/products/page.tsx`): each card's "View Details"
  button links to `/products/<id>`.
- **Recommendation step**: a "View full details" button links to the recommended
  product's own page.

---

## 3. Files changed

| File                                                   | Change                                                            |
| ------------------------------------------------------ | ----------------------------------------------------------------- |
| `components/product-finder/ProductFinder.tsx`          | Rewritten to read/write wizard state from the URL query string.   |
| `app/page.tsx`                                          | Wrapped `ProductFinder` in a `<Suspense>` boundary.               |
| `app/products/[id]/page.tsx`                            | **New** — server route for individual product pages.              |
| `components/products/ProductDetail.tsx`                 | **New** — client component rendering a single product.            |
| `app/products/page.tsx`                                 | "View Details" now links to `/products/<id>` (was `#`).           |
| `components/product-finder/steps/RecommendationStep.tsx`| Added a "View full details" link to the product page.             |

> Note: `SafetyStep` (the former step 5) was already unreachable in the previous
> code and is no longer rendered. The component file is kept for future use.

---

## 4. How to add a new product

1. Add a new entry to `productItems` in `data/productFinder.ts` with a unique,
   URL-safe `id` (lowercase, hyphenated — e.g. `gaviscon-advance`).
2. Drop the product image at `public/products/<id>.png` (and any variant/flavour
   images using the `<id>-<flavor>-<variant>.png` convention).
3. The page at `/products/<id>` is generated automatically — no routing code
   needed.

---

## 5. Testing the changes

```bash
npm run dev      # then visit the URLs in the tables above
npx tsc --noEmit # type-check
npm run build    # confirms all product pages pre-render as static (SSG)
```

A successful build lists `/products/[id]` as `●  (SSG)` with one entry per
product, and `/` as `○  (Static)`.
