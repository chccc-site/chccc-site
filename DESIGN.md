# Design System — CHCCC Site

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#B8342E` | CTA buttons, active nav, accent borders, links |
| `primary-dark` | `#8C2822` | Hover state for primary |
| `bg` | `#FAF7F2` | Page background (warm cream) |
| `surface` | `#FFFFFF` | Card backgrounds |
| `text` | `#2D2D2D` | Body text, headings |
| `text-light` | `#6B6B6B` | Secondary text, labels, dates |
| `border` | `#E8E4DF` | Dividers, card borders |
| `footer-bg` | `#2D2D2D` | Footer background |
| `footer-text` | `#999999` | Footer links |

## Typography

- **Font stack**: `'Noto Sans', 'Noto Sans SC', system-ui, -apple-system, sans-serif`
- **Weights**: 300 (light — hero times), 400 (normal — body), 500 (medium — headings, nav)
- **Body**: `text-base` (16px), `leading-relaxed` (1.8)
- **Page headings**: `text-[28px] font-normal`, centered
- **Section headings**: `text-[26px] sm:text-[28px] font-normal`
- **Card titles**: `text-lg font-medium`
- **Labels**: `text-sm text-text-light`
- **Nav links**: `text-[15px] font-medium`

## Spacing

- **Scale**: 8px base (`gap-2` = 8px, `gap-4` = 16px, `gap-6` = 24px, `gap-8` = 32px)
- **Section padding**: `py-12 sm:py-16` or `py-14 sm:py-20`
- **Content container**: `max-w-[1200px] mx-auto px-4 sm:px-8`
- **Card padding**: `p-6` or `p-7`
- **Between cards**: `gap-6 sm:gap-8`

## Components

- **Border radius**: `rounded-lg` (8px) on all cards, photos, buttons
- **Card shadow**: `shadow-[0_1px_3px_rgba(0,0,0,0.08)]`
- **Card hover**: `transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`
- **CTA button**: `bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90`
- **Scroll animation**: `section-animate` class with `opacity 0.6s ease-out, transform 0.6s ease-out`
- **Photos**: Astro `<Image>` with `object-cover`, responsive `widths` and `sizes`

## Layout Patterns

- **Split layout**: `grid grid-cols-1 sm:grid-cols-2 gap-8 items-center` (text + photo)
- **Card grid**: `flex flex-wrap justify-center gap-6` or `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- **Centered content**: `text-center max-w-[600px] mx-auto`

## Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet/Desktop**: `sm:` (640px+)
- **Large desktop**: `lg:` (1024px+) — used sparingly (news grid 3-col)

## Bilingual

- Chinese pages: `lang="zh-Hant"`, Noto Sans SC
- English pages: `lang="en"`, Noto Sans
- Every page exists under both `/zh/` and `/en/`
- Language toggle in Nav switches to same page in other locale
