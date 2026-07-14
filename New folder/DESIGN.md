---
name: Academic Excellence System
colors:
  surface: '#fff8f2'
  surface-dim: '#e2d9cd'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e7'
  surface-container: '#f6ece1'
  surface-container-high: '#f0e7db'
  surface-container-highest: '#ebe1d6'
  on-surface: '#1f1b14'
  on-surface-variant: '#4e4637'
  inverse-surface: '#353028'
  inverse-on-surface: '#f9efe4'
  outline: '#807665'
  outline-variant: '#d2c5b1'
  surface-tint: '#7b5900'
  primary: '#7b5900'
  on-primary: '#ffffff'
  primary-container: '#c89b3c'
  on-primary-container: '#4b3500'
  inverse-primary: '#f0bf5c'
  secondary: '#50652a'
  on-secondary: '#ffffff'
  secondary-container: '#cfe99f'
  on-secondary-container: '#546a2e'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a3a1a1'
  on-tertiary-container: '#393838'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea4'
  primary-fixed-dim: '#f0bf5c'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4200'
  secondary-fixed: '#d2eca2'
  secondary-fixed-dim: '#b6d088'
  on-secondary-fixed: '#131f00'
  on-secondary-fixed-variant: '#394d14'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#fff8f2'
  on-background: '#1f1b14'
  surface-variant: '#ebe1d6'
typography:
  display-lg:
    fontFamily: Alexandria
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Alexandria
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Alexandria
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Alexandria
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Cairo
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Cairo
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1280px
  gutter: 24px
  card-padding: 32px
---

## Brand & Style

The design system is engineered to project a "Modern Premium" academic identity for a distinguished programming instructor. It balances the precision of technical education with a warm, humanistic Arabic character. 

The aesthetic is rooted in **Minimalism** and **Glassmorphism**, emphasizing clarity and prestige. By utilizing high levels of whitespace and a sophisticated "Oasis" palette, the interface avoids the coldness of typical tech platforms, instead feeling like a high-end physical academy. The emotional response is one of calm confidence—reassuring students of the instructor's authority while inspiring them to begin their learning journey.

## Colors

The palette is inspired by natural parchment and traditional scholarship, modernized for a digital screen.

- **Primary Golden (#C89B3C):** Used for primary actions, progress indicators, and highlighting achievement. It denotes value and excellence.
- **Secondary Olive (#556B2F):** Used for success states, secondary navigation, and mentorship-related elements. It provides a grounded, organic contrast to the gold.
- **Accent Black (#111111):** Reserved for high-contrast typography and structural borders to maintain professional rigor.
- **Foundation (#F8F7F3 & #FFFFFF):** The background uses the soft beige to reduce eye strain, while pure white is used for elevated cards to create a subtle "layered" effect.

## Typography

This system uses a dual-language typographic hierarchy. **Alexandria** provides a geometric, modern structure for headings that feels prestigious. **Cairo** is optimized for long-form reading in Arabic, ensuring high legibility for educational content. 

**Poppins** is integrated for English-language labels, technical terms, and metadata to maintain a global, professional standard. All Arabic text should have a slightly increased line-height (minimum 1.6) compared to Latin equivalents to account for script complexity.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain the "Editorial" feel of a portfolio, centered within a 1280px container. 

- **Generous Breathing Room:** Sections are separated by large vertical gaps (120px) to allow the content to settle and prevent cognitive overload.
- **Asymmetric Balance:** Use a 12-column grid. For educational modules, a 70/30 split (Content/Sidebar) is preferred.
- **Mobile Adaptation:** On mobile, margins reduce to 20px, and section gaps shrink to 64px. Elements stack vertically, preserving the golden ratio in card heights.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and **Tonal Layering** rather than heavy shadows.

- **The Glass Layer:** Elevated components (like course cards) use a semi-transparent white background (`rgba(255, 255, 255, 0.7)`) with a 20px backdrop blur and a thin 1px border in a lighter shade of the background.
- **Soft Shadows:** When used, shadows are "Ambient"—low opacity (4-8%), large blur radius (30px+), and slightly tinted with the Primary Golden color to feel integrated with the surface.
- **Depth Levels:** 
  - Level 0: Background (#F8F7F3).
  - Level 1: Content Cards (White with subtle border).
  - Level 2: Interactive elements on hover (Glass effect + Soft Shadow).

## Shapes

The shape language is "Softly Geometric." A consistent 16px (`rounded-lg`) radius is used for primary containers to evoke a friendly, approachable atmosphere.

Smaller elements like buttons and chips utilize the 8px (`rounded-md`) radius. Avoid fully circular "pill" shapes for buttons to maintain a more architectural, academic look; instead, stick to the defined 8px corners.

## Components

- **Buttons:** Primary buttons use a solid Golden (#C89B3C) fill with white text. Secondary buttons use a ghost style with an Olive Green border and 12px horizontal padding.
- **Course Cards:** Utilize the Glassmorphism effect. The card should feature a subtle 1px Golden top-border to signify "Premium" status.
- **Code Blocks:** Given the instructor's background, code blocks should use a dark theme (Accent Black) to provide a sharp visual break from the light UI, using JetBrains Mono for the font.
- **Input Fields:** Minimalist design with only a bottom border that transitions to Golden on focus. 
- **Curriculum Lists:** Use "Olive Green" dots for bullet points or numbering to create a cohesive educational path visual.
- **Achievement Chips:** Small, semi-transparent Golden chips with Poppins typography for tags like "Certified" or "Advanced."