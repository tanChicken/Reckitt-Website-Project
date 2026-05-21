---
name: Vitality Core
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#5d3f40'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#926e6f'
  outline-variant: '#e7bcbd'
  surface-tint: '#be0036'
  primary: '#ba0035'
  on-primary: '#ffffff'
  primary-container: '#e80044'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b6'
  secondary: '#475d92'
  on-secondary: '#ffffff'
  secondary-container: '#adc3fe'
  on-secondary-container: '#394f83'
  tertiary: '#b3220c'
  on-tertiary: '#ffffff'
  tertiary-container: '#d63c23'
  on-tertiary-container: '#fffcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920027'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001945'
  on-secondary-fixed-variant: '#2f4578'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a6'
  on-tertiary-fixed: '#3f0300'
  on-tertiary-fixed-variant: '#8f1000'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
  reckitt-pink: '#E80044'
  deep-navy: '#001E50'
  energy-orange: '#FF593D'
  surface-gray: '#F8F9FB'
  border-subtle: '#E7E9EF'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style

The design system is engineered to reflect the authority of a global leader in health, hygiene, and nutrition. The brand personality is **Clinical yet Compassionate**, balancing the precision of scientific excellence with the approachability of consumer wellness. 

The aesthetic follows a **Corporate Modern** direction with a focus on high-clarity layouts and intentional white space. It avoids decorative excess in favor of functional elegance. The visual narrative is built on "Trusted Vitality"—utilizing a vibrant signature palette anchored by deep, stable neutrals to evoke a sense of security, innovation, and well-being.

## Colors

The palette is dominated by **Reckitt Pink**, used strategically for primary actions and brand identifiers to signal energy and care. This is balanced by **Deep Navy**, which provides the necessary gravitas and professional weight required for a healthcare context.

- **Primary (Reckitt Pink):** Used for key CTAs, active states, and high-level branding.
- **Secondary (Deep Navy):** Reserved for headers, footers, and secondary buttons to instill trust and stability.
- **Tertiary (Energy Orange):** An accent color used sparingly for notifications, highlights, or data visualization to prevent the UI from feeling too sterile.
- **Neutrals:** A range of cool grays (anchored by `#E7E9EF`) ensures that backgrounds and containers remain clean and "clinical," maintaining high accessibility scores for text overlays.

## Typography

This design system utilizes a dual-font approach to maximize both modern character and functional legibility. 

**Manrope** is the headline face, chosen for its geometric yet friendly proportions. It scales beautifully in large formats, conveying a sense of contemporary innovation. **Inter** is the workhorse for body and UI elements, selected for its exceptional readability and neutral "systematic" feel, ensuring that complex medical or corporate information is easily digestible.

- **Scale:** A traditional typographic scale is used, with generous line-heights to support an open, airy clinical feel.
- **Contrast:** Headings should predominantly use the Deep Navy color to ensure a strong visual hierarchy against the light surfaces.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid system that caps at a maximum width of 1280px to maintain readability on ultra-wide monitors.

- **Rhythm:** An 8px base unit (linear scale) governs all padding and margins. 
- **Desktop:** 12 columns, 24px gutters, 64px outside margins.
- **Tablet:** 8 columns, 20px gutters, 32px outside margins.
- **Mobile:** 4 columns, 16px gutters, 16px outside margins.

Layouts should favor vertical stack patterns and avoid overcrowding. Large "White Space Pockets" should be used to separate different therapeutic areas or product categories, reinforcing the clean, clinical brand promise.

## Elevation & Depth

This design system utilizes **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to maintain a sophisticated and modern appearance.

- **Surface Tiers:** Backgrounds use `surface-gray` (#F8F9FB), while primary content cards use pure white (#FFFFFF). 
- **Depth:** Instead of traditional drop shadows, use 1px borders in `border-subtle` (#E7E9EF). 
- **Active Elevation:** Only use shadows to indicate interaction. Shadows should be ultra-soft, using the Deep Navy color at 4-6% opacity with a large blur radius (16px+) to create a "floating" effect rather than a "heavy" one.
- **Clinical Glass:** For overlays and modals, a subtle backdrop blur (8px) with a semi-transparent white fill may be used to maintain context without visual clutter.

## Shapes

The shape language is defined as **Rounded**, providing a soft, human-centric touch to an otherwise structured corporate layout.

- **Components:** Buttons, input fields, and small cards use a 0.5rem (8px) corner radius.
- **Containers:** Large sections or primary content cards use 1rem (16px) to create a distinct "pod" feel common in modern wellness applications.
- **Icons:** Should follow a "soft-linear" style—avoiding sharp points in favor of rounded terminals to match the typography.

## Components

- **Buttons:**
    - **Primary:** Reckitt Pink fill with White text. Bold, sans-serif labels. 0.5rem radius.
    - **Secondary:** Deep Navy outline or ghost style. Used for navigation or less critical actions.
- **Input Fields:**
    - Clean 1px borders in `#E7E9EF`. On focus, the border transitions to Deep Navy (not pink) to ensure the user feels a sense of stable control while typing.
- **Cards:**
    - Pure white background on a light gray page. No border by default, or a very subtle 1px gray border. No shadow unless hovered.
- **Chips & Tags:**
    - Used for health categories (e.g., "Hygiene," "Nutrition"). These should use de-saturated versions of the brand colors (e.g., a pale pink background with dark pink text) to remain secondary to the main CTA.
- **Checkboxes/Radios:**
    - Always use Reckitt Pink for the "Checked" state to provide a clear, energetic signal of selection.
- **Progress Bars:**
    - Essential for health/wellness tracking. Use a smooth transition from Deep Navy to Reckitt Pink to indicate completion or health status.