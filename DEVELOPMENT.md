# MadeByMiles Development Guide

This document provides guidance for extending and maintaining the MadeByMiles site.

## Architecture

The site is built with:
- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Server Components** by default
- **Client Components** only where needed (timeline, animations)
- **CSS Modules** for component styles
- **Design tokens** in `/app/lib/tokens.css`

## Project Structure

```
/app
  /components         # React components
    Hero.tsx         # Hero section (server)
    WhatIDo.tsx      # Capabilities grid (server)
    WorkAndImpact.tsx # Projects showcase (server)
    CareerTimeline.tsx # Interactive timeline (client)
    Advisory.tsx     # CTA section (server)
    RevealOnScroll.tsx # Intersection Observer wrapper (client)
  /lib
    tokens.css       # Design system tokens
    motion.css       # Animation utilities
    types.ts         # TypeScript definitions
    utils.ts         # Utility functions
  layout.tsx         # Root layout with metadata
  page.tsx           # Home page
  globals.css        # Global styles
  sitemap.ts         # Dynamic sitemap
  robots.ts          # Dynamic robots.txt
/public
  /images           # Static assets
```

## Design System

### Using Design Tokens

All design tokens are defined in `/app/lib/tokens.css`. Use CSS variables:

```css
.my-component {
  color: var(--color-text-primary);
  padding: var(--space-8);
  font-family: var(--font-display);
  transition: all var(--motion-duration-short) var(--motion-ease-standard);
}
```

### Updating Tokens

To update the design system:

1. Edit `/app/lib/tokens.css`
2. Update color, spacing, typography, or motion tokens
3. Changes apply globally

Example - changing the accent color:

```css
:root {
  --color-text-accent: #c87d5c; /* Change this value */
  --color-accent-primary: #c87d5c;
  --color-accent-hover: #b36f4f;
}
```

### Typography Scale

Use predefined typography classes:

- `.display-xl` - Largest heading (hero)
- `.display-lg` - Section headings
- `.display-md` - Card headings
- `.body-lg` - Large body text
- `.body-md` - Standard body text

### Spacing Scale

Spacing tokens follow a 4px base scale:

- `--space-1` to `--space-6` for small spacing
- `--space-8` to `--space-16` for medium spacing
- `--space-20` to `--space-48` for large spacing

### Motion System

All animations use tokens from `motion.css`:

- **Durations**: `--motion-duration-short` (180ms) to `--motion-duration-xlong` (600ms)
- **Easings**: `--motion-ease-standard`, `--motion-ease-emphasized`, etc.
- **Respects** `prefers-reduced-motion` automatically

## Extending the Career Timeline

### Adding a New Role

Edit `/app/components/CareerTimeline.tsx` and add to the `careerRoles` array:

```typescript
{
  id: 'company-name',           // Must match WorkAndImpact card ID
  company: 'Company Name',
  title: 'Job Title',
  startDate: '2020',
  endDate: '2024',
  metrics: [
    'Key metric 1',
    'Key metric 2',
    'Key metric 3',
  ],
  description: 'Brief description...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  order: 5,                     // Display order
}
```

### Adding a Corresponding Project Card

Edit `/app/components/WorkAndImpact.tsx` and add to the `projects` array:

```typescript
{
  id: 'company-name',           // Must match timeline role ID
  company: 'Company Name',
  title: 'Job Title',
  description: 'Detailed description with metrics...',
  tags: ['Tag1', 'Tag2'],
  order: 5,
}
```

**Important**: The `id` field must match between the timeline and project cards for smooth scrolling to work.

### Timeline Behavior

- **Horizontal** on desktop (above 768px)
- **Vertical** on mobile (below 768px)
- **Click/tap** on a node to scroll to the project card
- **Hover** to see tooltip with company and title
- **Keyboard navigation**:
  - `Tab` to focus nodes
  - `Arrow keys` to navigate between nodes
  - `Enter` or `Space` to activate

## Container Queries

The site uses container queries for responsive layouts:

```css
.capabilitiesContainer {
  container-type: inline-size;
  container-name: capabilities;
}

@container capabilities (min-width: 600px) {
  .capabilitiesGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

This allows components to respond to their container size, not just viewport size.

## Accessibility Features

### Focus Management

All interactive elements have visible focus states:

```css
*:focus-visible {
  outline: 2px solid var(--color-text-accent);
  outline-offset: 2px;
}
```

### ARIA Labels

All timeline nodes have descriptive `aria-label` attributes:

```typescript
aria-label={`${role.company}, ${role.title}, ${role.startDate} to ${role.endDate}`}
```

### Skip Links

A skip link is available for keyboard users:

```html
<a href="#main" className="skip-to-main">
  Skip to main content
</a>
```

### Reduced Motion

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## SEO and Metadata

### Updating Metadata

Edit `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description...',
  // ... more fields
}
```

### JSON-LD Structured Data

Two JSON-LD schemas are included:
- **Person** - Professional information
- **Organization** - Business information

Update in `/app/layout.tsx`:

```typescript
const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Your Name',
  // ... more fields
}
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
```

## Performance Optimization

### Fonts

Fonts are loaded from Google Fonts with:
- `preconnect` for DNS prefetching
- `display=swap` for faster rendering

### Server Components

Most components are Server Components for:
- Zero JavaScript on client
- Faster initial load
- Better SEO

### Client Components

Only used where needed:
- `CareerTimeline.tsx` - Interactive SVG
- `RevealOnScroll.tsx` - Intersection Observer

## Deployment to Vercel

### First Deployment

1. Push code to GitHub
2. Import repository in Vercel
3. Framework: Next.js
4. Deploy

### Configuration

No environment variables needed. The site uses:
- Static site generation (SSG)
- Edge runtime for optimal performance

### Custom Domain

Update in two places:

1. **Vercel dashboard**: Add domain
2. **Site code** (`/app/layout.tsx`):

```typescript
metadataBase: new URL('https://yourdomain.com')
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

Container queries require modern browsers. Fallback grid layouts are provided.

## Troubleshooting

### Build Errors

If you see font loading errors during build:
- This is expected in restricted network environments
- Fonts will load correctly at runtime
- The warning can be safely ignored

### TypeScript Errors

Run type check:

```bash
npx tsc --noEmit
```

### Linting Issues

Run linter:

```bash
npm run lint
```

Auto-fix issues:

```bash
npm run lint -- --fix
```

## Future Enhancements

Potential additions:

1. **Dark mode** - Tokens already include dark mode variables
2. **Blog section** - Use Next.js dynamic routes
3. **Case studies** - Detailed project pages
4. **Image optimization** - Use Next.js Image component
5. **Analytics** - Add Vercel Analytics or Google Analytics

## Questions?

For support with Next.js: https://nextjs.org/docs
For TypeScript help: https://www.typescriptlang.org/docs
