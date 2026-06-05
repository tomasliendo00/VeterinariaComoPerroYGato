---
name: Serene Pet Care
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414750'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#717881'
  outline-variant: '#c0c7d1'
  surface-tint: '#02629e'
  primary: '#005387'
  on-primary: '#ffffff'
  primary-container: '#1b6ca8'
  on-primary-container: '#d9e9ff'
  inverse-primary: '#9acbff'
  secondary: '#006a62'
  on-secondary: '#ffffff'
  secondary-container: '#9cefe4'
  on-secondary-container: '#0a6f66'
  tertiary: '#764400'
  on-tertiary: '#ffffff'
  tertiary-container: '#985900'
  on-tertiary-container: '#ffe3cb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#9acbff'
  on-primary-fixed: '#001d34'
  on-primary-fixed-variant: '#004a78'
  secondary-fixed: '#9ff1e7'
  secondary-fixed-dim: '#83d5cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#ffdcbe'
  tertiary-fixed-dim: '#ffb86f'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#693c00'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is defined by "Professional Warmth." It bridges the gap between the clinical precision required of a medical facility and the emotional empathy expected by pet owners. The design style is **Modern Corporate** with a soft, organic edge. 

The aesthetic prioritizes clarity and calm, using generous white space to reduce visual anxiety. It avoids the cold, sterile feeling of traditional medicine by incorporating rounded geometries and a palette inspired by nature and care. The emotional goal is to make the user feel that their pet is in safe, expert, and loving hands.

## Colors
This palette is designed to evoke trust (Blue) and tranquility (Teal), with a spark of energy and affection (Orange).

- **Primary (Trust Blue):** Used for navigation, primary actions, and authoritative headers. It establishes the clinic's professional foundation.
- **Secondary (Soft Teal):** Used for supportive elements, success states, and calming background accents.
- **Accent (Warm Orange):** Used sparingly for call-to-actions (CTAs), highlights, and active states to provide a sense of life and friendliness.
- **Neutral & Surface:** An off-white background prevents screen glare, while pure white surfaces indicate interactive or elevated content areas.

## Typography
The typography system uses **Plus Jakarta Sans** for headlines to provide a friendly, optimistic, and slightly rounded character that matches the brand's approachable nature. 

For body text, **Be Vietnam Pro** is used to ensure maximum legibility and a contemporary, clean feel. 

- **Headlines:** Use tight letter-spacing and bold weights to create a sense of structure.
- **Body:** Use generous line-heights (1.5x minimum) to maintain a feeling of airiness and readability.
- **Labels:** Used for micro-copy and metadata; capitalization is used sparingly to avoid appearing "shouty."

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **Rhythm:** Spacing is strictly based on an 8px scale.
- **Gutters:** Standard 24px gutters provide breathing room between content blocks.
- **Margins:** Desktop views utilize wide 64px side margins to center the content and maintain a high-end, "boutique" medical feel. 
- **Adaptation:** On mobile, margins reduce to 16px, and vertical spacing (padding-top/bottom) between sections is maintained at `lg` (48px) to keep the experience feeling unhurried.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layers**. This design system avoids harsh borders in favor of soft shadows that mimic natural light.

- **Level 1 (Surface):** Default state for cards and inputs. A subtle 1px border in a light teal-grey or a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)).
- **Level 2 (Hover/Active):** Elements lift slightly with a more pronounced but still soft shadow (0px 8px 30px rgba(0,0,0,0.08)).
- **Glassmorphism:** Use backdrop blurs (10px - 15px) for navigation bars when scrolling to maintain context of the background colors while keeping the text legible.

## Shapes
The shape language is consistently **Rounded**. This softens the medical context and makes the interface feel more pet-friendly.

- **Components:** Buttons and input fields use a 0.5rem (8px) radius.
- **Containers:** Large cards and informational blocks use `rounded-lg` (1rem / 16px).
- **Featured Elements:** Large promotional banners or images of pets may use `rounded-xl` (1.5rem / 24px) to emphasize the soft aesthetic.
- **Icons:** Icons should feature rounded caps and corners; sharp angles are to be avoided.

## Components
- **Buttons:** Primary buttons use the Trust Blue with white text. Secondary buttons use a Soft Teal ghost style (outline). All buttons have a minimum height of 48px to ensure accessibility.
- **Chips:** Used for pet categories (e.g., "Gato," "Perro," "Exóticos"). These use the Secondary Soft Teal at 10% opacity with a darker teal text.
- **Inputs:** Fields are large with a subtle off-white fill. On focus, the border transitions to Primary Blue with a soft outer glow.
- **Cards:** Cards for "Service Offerings" or "Medical Records" feature a white background, Level 1 shadow, and a 16px padding.
- **Lists:** Lists in medical contexts use Secondary Teal checkmarks for completed items and soft dividers (`1px solid #E5E5E5`).
- **Additional Components:**
    - **Pet Avatar:** Circular frames for pet photos with a 2px Trust Blue border.
    - **Urgency Banner:** A thin, Warm Orange top-bar for emergency alerts or clinic holiday hours.