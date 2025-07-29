# LunaSolscape E-commerce Development Guide

## Project Overview
LunaSolscape is a celestial-themed jewelry e-commerce platform built with **Next.js 15 + PayloadCMS 3 + PostgreSQL + TailwindCSS v4.1**. The USP is the **color gradient product sorting** that mirrors celestial transitions (sunrise → sunset, moonrise → moonset).

## Architecture Patterns

### Dual Theme System

- **ThemeMode**: `sunrise` | `sunset` | `moonrise` | `moonset` (celestial gradient themes)
- Components use `useTheme()` hook to access both states
- CSS classes dynamically apply via `ThemeProvider` context

```tsx
// Example: ColorGradientShowcase.tsx shows theme-aware gradients
const getSectionGradient = () => {
  switch (themeMode) {
    case 'sunrise':
      return 'from-pink-50 to-orange-50'
    case 'moonrise':
      return 'from-blue-50 to-purple-50'
    // ...
  }
}
```

### Payload CMS Integration

- **Config**: `payload.config.ts` defines collections (users, products, blog posts, media)
- **Auto-generated routes**: `src/app/(payload)/` contains CMS API endpoints
- **Admin panel**: Accessible at `/admin` via Payload's built-in interface
- **Database**: PostgreSQL adapter configured for production

### State Management Pattern

- **Cart**: Context-based reducer pattern in `CartContext.tsx` with localStorage persistence
- **Theme**: Context provider pattern in `ThemeProvider.tsx` with localStorage sync
- **No external state libs** - uses React's built-in context + useReducer

## Development Workflows

### Build & Development

```bash
npm run dev                    # Start dev server with Payload
npm run build                  # Production build
npm run generate:types         # Generate Payload TypeScript types
npm run format                 # Prettier formatting
npm run lint:fix              # ESLint auto-fix
```

### Payload CMS Setup

- Collections auto-sync with PostgreSQL schema
- Types generated via `npm run generate:types` → creates `payload-types.ts`
- Media uploads handled by Sharp integration
- Admin interface requires authentication setup

## Project-Specific Conventions

### Component Organization

- **Layout components**: `Navbar`, `Footer` in `/components`
- **Feature components**: `ColorGradientShowcase`, `FeaturedProducts`, etc.
- **Page components**: Route-based in `/app` directory
- **Utility components**: `ThemeProvider`, context providers

### Color & Gradient System

Products have `hue` values (0-360) for gradient sorting:

```tsx
// Products sorted by hue create visual color spectrum
const sortedProducts = products.sort((a, b) =>
  sortDirection === 'asc' ? a.hue - b.hue : b.hue - a.hue
)
```

### Cart Implementation

- Items persist in localStorage as `lunasolscape-cart`
- Reducer handles ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART
- Auto-calculates totals and item counts

## Key Integration Points

### Next.js + Payload

- `withPayload()` wrapper in `next.config.ts` enables CMS integration
- Route groups `(payload)` isolate CMS routes from public pages
- Image optimization configured for Unsplash and localhost

### TailwindCSS v4

- Dark mode via `class` strategy
- Custom gradient utilities for celestial themes
- Typography plugin for rich content rendering

### Critical Files to Understand

- `src/app/layout.tsx` - Root layout with providers
- `src/components/ThemeProvider.tsx` - multi-theme system
- `src/contexts/CartContext.tsx` - E-commerce state management
- `payload.config.ts` - CMS schema and configuration
- `src/components/ColorGradientShowcase.tsx` - Core feature demo

## Database & Content Management

- **PayloadCMS** manages products, users, blog posts, and media
- **PostgreSQL** via `@payloadcms/db-postgres` adapter
- **Rich text** editing with Lexical editor
- **Authentication** built into Payload for admin users

_Focus on the celestial theming system and color gradient sorting when building new features - this is the core differentiator._