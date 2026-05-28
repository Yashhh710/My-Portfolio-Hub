# Quick Setup Guide

## Installation & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Opens automatically at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```
Creates optimized build in `dist/` folder

## Project Architecture

### Component Hierarchy
```
App
├── Loader (Cinematic loading screen)
├── Header (Navigation & Mobile Menu)
├── AmbientEffects (Glow, Spotlight, Particles)
├── PortfolioGrid (Portfolio Section)
│   ├── PortfolioCard (6 Portfolio Items)
│   ├── PortfolioCard
│   ├── PortfolioCard
│   └── ...
└── Footer
```

### Key Features Implemented

✅ **Loader Component**
- Auto-dismisses after 1.8s
- Smooth fade-out animation
- Cinematic styling

✅ **Header Component**
- Fixed floating navbar
- Active link tracking on scroll
- Mobile hamburger menu
- Smooth transitions

✅ **AmbientEffects Component**
- Background glow effect
- Mouse spotlight that follows cursor
- Particle animation system
- All non-intrusive (pointer-events: none)

✅ **PortfolioGrid Component**
- Data-driven portfolio cards
- 2-column responsive grid
- Scroll reveal animations
- Dynamic card highlighting

✅ **PortfolioCard Component**
- Reusable card template
- Image with gradient overlay
- Tags and metadata
- External links

✅ **Footer Component**
- Clean footer design
- Portfolio section links
- Social media links
- Copyright info

## File Structure Overview

```
.
├── src/
│   ├── components/           # All React components
│   ├── assets/              # Portfolio images
│   ├── App.jsx              # Main app (imports only)
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index-vite.html          # Vite template
├── vite.config.js           # Vite config
├── package.json             # Dependencies & scripts
├── .gitignore
└── README.md
```

## React Hooks Used

### useState
- Mobile menu toggle state in Header

### useEffect
- Scroll event listeners
- Window resize handlers
- Animation frames
- Active link tracking

### useRef
- Canvas reference for particles
- DOM element references

## Styling Architecture

- **Global Styles** (`index.css`)
  - Typography, colors, spacing
  - Utilities and common patterns

- **Component Styles** (individual `.css` files)
  - Scoped to each component
  - Media queries included
  - Animations and keyframes

## Customization

### Change Portfolio Data
Edit `src/components/PortfolioGrid/PortfolioGrid.jsx`
```javascript
const portfolioData = [
  {
    id: 'port1',
    codeLabel: '01 // Title',
    image: img1,
    title: 'Project Title',
    description: 'Description',
    tags: ['Tag1', 'Tag2'],
    liveLink: 'https://...',
    githubLink: 'https://...'
  },
  // ... more projects
];
```

### Modify Colors
Edit individual component `.css` files:
- Background: `#050508`
- Text: `#e2e8f0`
- Accent: `#818cf8`

### Add New Components
1. Create folder in `src/components/`
2. Add `ComponentName.jsx` and `ComponentName.css`
3. Import and use in `App.jsx`

## Performance Considerations

- Canvas animations use `requestAnimationFrame`
- Particles count adapts to viewport size
- Smooth scroll behavior enabled
- No unnecessary re-renders (proper hook usage)
- Debounced scroll listeners

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Images not loading:**
- Ensure images are in `src/assets/`
- Check import statements in PortfolioGrid.jsx

**Animations not smooth:**
- Check browser DevTools for performance issues
- Reduce particle count if needed
- Enable GPU acceleration in browser

**Mobile menu not working:**
- Clear browser cache
- Check window resize events
- Verify state updates in Header component

## Next Steps

1. Customize portfolio data with your projects
2. Replace images with your own
3. Update footer links
4. Modify colors and styling
5. Deploy to Vercel/Netlify

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

Built with React ⚛️ + Vite ⚡
