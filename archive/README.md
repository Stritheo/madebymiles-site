# Archive

This directory contains the original single-page HTML site for reference and comparison.

## Original Site

- **File**: `original-site/index.html`
- **Type**: Single-page static HTML
- **Features**:
  - Simple, clean layout
  - Inline CSS
  - No JavaScript
  - Mobile responsive
  - Fast loading

## Comparison

To compare the original to the new Next.js version:

### Visual Comparison
1. Serve the original: Open `original-site/index.html` in a browser
2. Run the new version: `npm run dev` (http://localhost:3000)
3. Compare side-by-side

### View Original via Static Server
```bash
# From the archive/original-site directory
python3 -m http.server 8000
# Then open http://localhost:8000
```

### Git History
You can also view the original via git:
```bash
# View the last commit before the Next.js upgrade
git show f77dc64:index.html

# Or checkout the original version to a separate branch
git checkout f77dc64 -b original-site-backup
```

## Key Differences

### Original (index.html)
- Single HTML file
- ~15KB total
- No build process
- Direct deployment

### New (Next.js)
- Component-based architecture
- TypeScript
- Interactive timeline
- SEO optimized with JSON-LD
- Build process required
- More maintainable and extensible
