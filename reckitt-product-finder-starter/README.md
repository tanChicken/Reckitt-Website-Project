# Reckitt Product Finder Starter

# Print (Hello World)

A clean **repository-ready starter skeleton** for a pink-themed interactive FMCG product finder website.

Primary theme color: `#f20683`

This starter is built with:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Accessible, HCI-friendly UI structure
- Simple product-finder logic
- Basic funnel analytics endpoint stub

---

## 1. Quick start

### Install dependencies

```bash
npm install
```

### Create your local environment file

```bash
copy .env.local.example .env.local
```

For Mac/Linux:

```bash
cp .env.local.example .env.local
```

### Run locally

```bash
npm run dev
```

Open this in your browser:

```text
http://localhost:3000
```

---

## 2. What this website does

The website follows this user journey:

```text
Welcome → Select need → Answer questions → Get recommendation → Safety advice / Next steps
```

The purpose is to help users answer simple questions and receive a **general product-category suggestion**.

Important: this starter does **not** diagnose users. It includes safety-first wording and label guidance because medicine-related product suggestions should be handled responsibly.

---

## 3. Folder structure

```text
reckitt-product-finder-starter/
├── app/
│   ├── api/product-finder-events/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── product-finder/
│   │   ├── steps/
│   │   │   ├── NeedSelectionStep.tsx
│   │   │   ├── QuestionsStep.tsx
│   │   │   ├── RecommendationStep.tsx
│   │   │   ├── SafetyStep.tsx
│   │   │   └── WelcomeStep.tsx
│   │   ├── ProductFinder.tsx
│   │   └── ProgressHeader.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Pill.tsx
├── data/
│   └── productFinder.ts
├── docs/
│   └── pink-desktop-flow-reference.png
├── lib/
│   ├── analytics.ts
│   ├── cn.ts
│   └── recommendation.ts
├── public/
│   └── brand-placeholder.svg
├── types/
│   └── productFinder.ts
├── .env.local.example
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Which file does what

| File                                                     | What it does                                                                                                                              |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `app/page.tsx`                                           | Main homepage. It renders the product finder app.                                                                                         |
| `app/layout.tsx`                                         | Root layout and metadata for the Next.js app.                                                                                             |
| `app/globals.css`                                        | Global CSS, Tailwind setup, pink brand variables, background, and focus styles.                                                           |
| `app/api/product-finder-events/route.ts`                 | Simple backend endpoint for tracking funnel events like quiz started, question completed, and recommendation viewed.                      |
| `components/product-finder/ProductFinder.tsx`            | Main controller component. Handles steps, user answers, navigation, and event tracking. Start coding here if you want to change the flow. |
| `components/product-finder/ProgressHeader.tsx`           | Top navigation bar and progress indicator.                                                                                                |
| `components/product-finder/steps/WelcomeStep.tsx`        | First screen. Hero section, CTA button, and product-category preview.                                                                     |
| `components/product-finder/steps/NeedSelectionStep.tsx`  | Lets users choose their need, such as sore throat, pain, cough, hygiene, or home cleaning.                                                |
| `components/product-finder/steps/QuestionsStep.tsx`      | Follow-up questions for audience, severity, and preferences.                                                                              |
| `components/product-finder/steps/RecommendationStep.tsx` | Shows the suggested product category and alternative categories.                                                                          |
| `components/product-finder/steps/SafetyStep.tsx`         | Shows safe-use advice, label guidance, pharmacist/doctor reminder, and restart action.                                                    |
| `components/ui/Button.tsx`                               | Reusable accessible button component with primary, secondary, and ghost styles.                                                           |
| `components/ui/Card.tsx`                                 | Reusable card component with rounded corners and soft shadows.                                                                            |
| `components/ui/Pill.tsx`                                 | Reusable selectable option button for quiz answers.                                                                                       |
| `data/productFinder.ts`                                  | The main content/data file. Edit this to add needs, questions, preferences, products, and tags.                                           |
| `lib/recommendation.ts`                                  | Recommendation logic. Edit this when you want to change how product categories are suggested.                                             |
| `lib/analytics.ts`                                       | Client-side function that sends funnel events to the API route.                                                                           |
| `lib/cn.ts`                                              | Small helper for joining CSS class names.                                                                                                 |
| `types/productFinder.ts`                                 | TypeScript types for needs, answers, products, and recommendations.                                                                       |
| `tailwind.config.ts`                                     | Tailwind design tokens, including the pink brand color `#f20683`.                                                                         |
| `.env.local.example`                                     | Example environment variables. Copy this to `.env.local`.                                                                                 |
| `public/brand-placeholder.svg`                           | Placeholder brand asset. Replace this with your real approved asset later.                                                                |
| `docs/pink-desktop-flow-reference.png`                   | Design reference image from the pink desktop flow concept.                                                                                |

---

## 5. Where you should start coding

### To change the questions

Edit:

```text
data/productFinder.ts
```

Look for:

```ts
needOptions;
severityOptions;
preferenceOptions;
```

### To change the product recommendations

Edit:

```text
data/productFinder.ts
lib/recommendation.ts
```

`data/productFinder.ts` controls the product/category data.

`lib/recommendation.ts` controls the decision logic.

### To change the pink theme

Edit:

```text
tailwind.config.ts
app/globals.css
```

Current primary pink:

```text
#f20683
```

### To change the page flow

Edit:

```text
components/product-finder/ProductFinder.tsx
```

This file controls which step appears and what happens when the user clicks Continue, Back, or Restart.

---

## 6. Simple FMCG marketing traffic events included

The skeleton already sends simple funnel events to:

```text
/api/product-finder-events
```

Current tracked events include:

- `finder_started`
- `need_selected`
- `questions_completed`
- `recommendation_viewed`
- `finder_restarted`
- back-navigation events

For an FMCG marketing dashboard, you can later connect these events to GA4, Supabase, BigQuery, or Power BI.

Suggested marketing metrics:

- Total visitors
- Product finder starts
- Product finder completion rate
- Most selected needs
- Most recommended products
- Drop-off step
- CTA clicks
- Mobile vs desktop users
- Traffic source

---

## 7. HCI and accessibility notes

This starter includes simple HCI-friendly patterns:

- Clear step-by-step journey
- Large headings and CTAs
- Consistent layout and navigation
- Strong contrast between pink buttons and white text
- Visible keyboard focus states
- Accessible button states using `aria-pressed`
- Safety disclaimer and pharmacist/doctor guidance
- Progress indicator so users know where they are
- Back and restart actions to support user control

---

## 8. Build for production

```bash
npm run build
npm run start
```

---

## 9. Before submitting or deploying

Checklist:

- Replace placeholder brand asset in `public/`
- Confirm product names and wording are approved
- Add real product images only if you have permission
- Connect analytics endpoint to your real tracking tool
- Test mobile and desktop layouts
- Test keyboard navigation
- Test color contrast
- Confirm disclaimers with your supervisor/client

---

## 10. Git commands

After you unzip and open the project:

```bash
git init
git add .
git commit -m "Initial product finder starter"
```

Then create a GitHub repo and push:

```bash
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
