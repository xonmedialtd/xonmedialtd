---
version: alpha
name: XON Media
description: Digital agency brand system for XON MEDIA LTD — media, advertising, and growth marketing.
colors:
  primary: "#00acff"
  secondary: "#010033"
  tertiary: "#4175FC"
  neutral: "#F6F7F8"
  on-primary: "#ffffff"
  on-secondary: "#ffffff"
  on-tertiary: "#ffffff"
  on-neutral: "#101218"
  surface: "#F6F7F8"
  surface-dark: "#101218"
  muted: "#3B4244"
  outline: "#4B4F58"
  accent-hover: "#084AF3"
typography:
  display:
    fontFamily: Hacked
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Rubik
    fontSize: 90px
    fontWeight: 700
    lineHeight: 1.3
  headline-md:
    fontFamily: Rubik
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.3
  headline-sm:
    fontFamily: Rubik
    fontSize: 25px
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: Rubik
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
  body-md:
    fontFamily: Karla
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Karla
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Rubik
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.04em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 32px
  container: 1140px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-primary}"
  button-brand:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-brand-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-on-dark:
    backgroundColor: "{colors.on-primary}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: 12px
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    rounded: "{rounded.sm}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-neutral}"
    rounded: "{rounded.lg}"
    padding: 24px
  section-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-secondary}"
    padding: 64px
  caption:
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
  nav-link:
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
---

# XON Media

## Overview

XON MEDIA LTD is a digital agency brand: confident, modern, and performance-oriented. The visual system pairs a high-energy cyan brand mark with deep navy structure and crisp sans-serif UI type. Interfaces should feel like a premium marketing site — spacious hero moments, strong hierarchy, and clear calls to action — not a dense dashboard.

Personality: bold, technical-creative, trustworthy. Prefer full-bleed dark sections, large display headlines, and restrained decoration. The logo wordmark uses the distinctive **HACKED** typeface; product UI uses **Rubik** for headlines and **Karla** for body.

Local font files live in `brand/fonts/` (served from `public/fonts/` on the site). HACKED is CC-BY by David Libeau — credit required when publishing.

## Colors

Palette roots in the logo package (`brand/logo/info.txt`) plus the live site accents.

- **Primary (#00acff):** Logo background cyan — brand signal, primary CTAs, key interactive accents, and energetic highlights.
- **Secondary (#010033):** Logo icon navy — deep structural color for dark surfaces, footer, and high-contrast panels.
- **Tertiary (#4175FC):** Live-site link/accent blue — supporting interactive states, secondary buttons, and informational emphasis.
- **Neutral (#F6F7F8):** Light surface foundation for content sections and soft backgrounds (softer than pure white).

Supporting roles:

- **On-primary / on-secondary / on-tertiary (#ffffff):** Text and icons on colored or dark brand surfaces (matches logo `font` / `slogan`).
- **On-neutral (#101218):** Primary text on light surfaces.
- **Muted (#3B4244):** Secondary body copy and captions.
- **Outline (#4B4F58):** Borders, dividers, quiet chrome.
- **Accent-hover (#084AF3):** Hover/focus for tertiary blue interactive elements.
- **Surface-dark (#101218):** Alternate dark canvas for “Why us” / about bands.

## Typography

Three families, clear roles — do not introduce additional display faces.

- **Display — HACKED:** Logo wordmark and rare brand-lockup moments only. Never for long paragraphs. Source: `brand/fonts/hacked/HACKED.ttf` ([hackedfont.com](https://hackedfont.com), CC-BY David Libeau).
- **Headlines — Rubik Bold:** Section titles and marketing H1–H4. Large, confident sizes on the homepage (hero can approach ~90px on desktop). Files: `brand/fonts/rubik/`.
- **Body — Karla Regular/Bold:** Paragraphs, navigation labels at body scale, form text. Files: `brand/fonts/karla/`.

Hierarchy guidance:

- Hero / display headlines: Rubik 700, tight line-height (~1.1–1.3).
- Section titles: Rubik 700 at medium sizes.
- Body: Karla 400 at ~17px / 1.6 line-height.
- Small labels / section eyebrows: Rubik 700 at ~13px with slight tracking.

Load via `/fonts/fonts.css` (`@font-face` for Hacked, Karla, Rubik).

## Layout

Marketing single-page layout with anchored sections (`#services`, `#aboutus`) and a lightweight contact route.

- Desktop content max-width ~**1140px**, centered, with generous vertical section padding (**32–64px**).
- Use an **8px spacing rhythm** (`sm`/`md`/`lg`/`xl` tokens); gutters ~24px.
- Hero is full-bleed: brand, one headline, short support line, CTA — avoid packing stats or secondary cards into the first viewport.
- Sections are one job each (Services, Why Us, About, Contact). Prefer stacked bands over multi-column dashboard grids on marketing pages.

## Elevation & Depth

Mostly **flat / tonal**. Depth comes from:

- Alternating light (`neutral` / white) and dark (`secondary` / `surface-dark`) full-width bands
- Large background imagery where the live site already uses atmospheric photography
- Subtle borders with `outline` when separation is needed

Avoid heavy multi-layer drop shadows and glow effects. If a soft shadow is required for a floating control, keep blur low and opacity modest.

## Shapes

Moderately soft, not pill-heavy.

- Default controls and inputs: **4–8px** radius (`rounded.sm` / `rounded.md`)
- Larger media or content panels: up to **16px** (`rounded.lg`)
- Avoid `rounded-full` pills for primary navigation or hero CTAs unless matching an existing component on the live site
- Logo mark itself may sit in a cyan field (`primary`) with white wordmark

## Components

- **Buttons (primary):** Fill `secondary` navy (#010033), text white — WCAG AA for CTA labels. Medium radius, comfortable padding. Hover may shift to `tertiary` blue.
- **Buttons (brand):** Fill `primary` cyan (#00acff) with navy text when a cyan CTA is required (logo-aligned); prefer navy primary for long labels.
- **Buttons on dark bands:** White fill with navy text for contrast on `secondary` / `surface-dark` backgrounds.
- **Navigation:** Transparent/dark header over hero; white or light links; Contact routes to `/contact/`. Hash links for Services and About.
- **Inputs:** Light neutral background, 1px outline, 12px padding, small radius; clear focus using `tertiary` or `primary`.
- **Cards / service tiles:** Prefer open layout over heavy card chrome; if contained, use light surface, large radius, and ample padding — no stacked shadow theater.
- **Footer:** Dark (`secondary`), white type, mailto `info@xonmedia.ltd`, short agency line.

## Do's and Don'ts

- Do lead with the XON brand mark and cyan/navy identity before generic marketing layouts.
- Do use HACKED only for logo/wordmark treatments; Rubik + Karla for UI.
- Do keep one primary CTA per viewport; prefer navy fill + white label for readable CTAs, cyan for brand fields and accents.
- Do maintain WCAG AA contrast (4.5:1) for body text — white on `#010033` / `#101218`, dark ink on `#F6F7F8`.
- Do credit HACKED (David Libeau / hackedfont.com) when the font appears in published work.
- Don't put white text on `#00acff` for small UI labels (contrast fail) — use navy text on cyan, or white on navy.
- Don't introduce Inter, Roboto, Arial, or extra display fonts.
- Don't default to purple gradients, cream-serif editorial kits, or glassmorphism glow stacks.
- Don't clutter the hero with stats, schedules, chips, or floating badges.
- Don't use the logo cyan (`#00acff`) as long-form body text on white — reserve it for fills and accents.
