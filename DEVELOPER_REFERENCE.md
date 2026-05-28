# React Portfolio - Developer Reference

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Start development (auto-opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 File Structure Quick Reference

```
project-root/
│
├── src/
│   ├── App.jsx                     # Main app (no logic, just imports)
│   ├── main.jsx                    # React entry point
│   ├── index.css                   # Global styles
│   │
│   ├── components/
│   │   ├── Loader/
│   │   │   ├── Loader.jsx          # Cinematic loading screen
│   │   │   └── Loader.css
│   │   ├── Header/
│   │   │   ├── Header.jsx          # Navigation with active tracking
│   │   │   └── Header.css
│   │   ├── AmbientEffects/
│   │   │   ├── AmbientEffects.jsx  # Glow, spotlight, particles
│   │   │   └── AmbientEffects.css
│   │   ├── PortfolioGrid/
│   │   │   ├── PortfolioGrid.jsx   # Grid + section + data
│   │   │   └── PortfolioGrid.css
│   │   ├── PortfolioCard/
│   │   │   ├── PortfolioCard.jsx   # Reusable card component
│   │   │   └── PortfolioCard.css
│   │   └── Footer/
│   │       ├── Footer.jsx          # Footer section
│   │       └── Footer.css
│   │
│   └── assets/
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       ├── 4.png
│       ├── 5.png
│       └── 6.png
│
├── index-vite.html                 # Vite HTML template
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies & scripts
├── .gitignore                      # Git ignore rules
├── README.md                       # Full documentation
├── SETUP_GUIDE.md                  # Setup instructions
└── CONVERSION_SUMMARY.md           # Conversion details
```

## 🎯 Component Responsibilities

### Loader
- **Purpose**: Cinematic loading screen
- **State**: `isVisible` (boolean)
- **Hooks**: `useEffect` (window load)
- **Output**: Auto-dismisses after 1.8s

### Header
- **Purpose**: Navigation and mobile menu
- **State**: `isMenuOpen`, `activeLink`, `navbarStyle`
- **Hooks**: `useEffect` (scroll tracking)
- **Features**: 
  - Active link tracking
  - Mobile menu animation
  - Navbar style changes on scroll

### AmbientEffects
- **Purpose**: Visual effects (glow, spotlight, particles)
- **State**: None
- **Hooks**: `useEffect` (setup), `useRef` (canvas)
- **Features**:
  - Particle animation system
  - Mouse spotlight tracking
  - Background glow

### PortfolioGrid
- **Purpose**: Portfolio section and data management
- **State**: None (data is local const)
- **Hooks**: `useEffect` (scroll reveal)
- **Data**: `portfolioData` array with 6 items

### PortfolioCard
- **Purpose**: Reusable card component
- **Props**: `id`, `codeLabel`, `image`, `title`, `description`, `tags`, `liveLink`, `githubLink`
- **State**: None
- **Hooks**: None

### Footer
- **Purpose**: Footer section
- **State**: `currentYear` (calculated)
- **Hooks**: None

## 💡 Customization Patterns

### Add a New Portfolio Item
```javascript
// In src/components/PortfolioGrid/PortfolioGrid.jsx
const portfolioData = [
  // ... existing items ...
  {
    id: 'port7',
    codeLabel: '07 // Your Project',
    image: img7,  // Import img7 at top
    title: 'Project Title',
    description: 'Your project description',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    liveLink: 'https://...',
    githubLink: 'https://...'
  }
];
```

### Change Color Scheme
```css
/* In any .css file, update these values: */
--bg-dark: #050508;        /* Main background */
--text-light: #e2e8f0;     /* Main text */
--accent: #818cf8;         /* Accent color */
--text-muted: #94a3b8;     /* Secondary text */
```

### Modify Animation Speed
```css
/* In component .css files, adjust timing: */
transition: all 0.3s ease;        /* Reduce 0.3s for faster */
animation: slidein 1s forwards;   /* Adjust 1s duration */
```

### Add a New Component
1. Create folder: `src/components/MyComponent/`
2. Create files: `MyComponent.jsx` and `MyComponent.css`
3. Import in `App.jsx`:
   ```javascript
   import MyComponent from './components/MyComponent/MyComponent';
   ```
4. Add to App:
   ```javascript
   export default function App() {
     return (
       <>
         {/* ... existing components ... */}
         <MyComponent />
       </>
     );
   }
   ```

## 🐛 Common Issues & Solutions

| Issue | Solution |
|---|---|
| Images not loading | Check imports in PortfolioGrid.jsx |
| Animations stuttering | Reduce particle count, check performance |
| Mobile menu stuck open | Clear browser cache and restart |
| Styles not applying | Check CSS class names match |
| Effects not showing | Verify pointer-events and z-index |

## 📊 Performance Tips

- Particle count auto-adjusts to viewport
- Canvas uses `requestAnimationFrame`
- Event listeners properly cleaned up
- No re-renders without state changes
- CSS animations use GPU acceleration

## 🎨 Color Reference

```javascript
// Color variables used throughout
#050508  - Dark background
#e2e8f0  - Light text
#ffffff  - Pure white
#94a3b8  - Muted text
#818cf8  - Accent (indigo)
#64748b  - Gray
```

## 🔗 Key React Concepts Used

- **Functional Components**: All components are functions
- **Hooks**: useState, useEffect, useRef
- **Props**: Passed to PortfolioCard for reusability
- **Event Handling**: Click, scroll, mouse move
- **Conditional Rendering**: Menu state, class toggling
- **Array Mapping**: Portfolio items

## 📝 Code Style Guide

- Use camelCase for variables/functions
- Use PascalCase for components
- Semantic HTML elements
- BEM naming in CSS
- Comments for complex logic
- Props at top of functions

## 🚀 Deployment Checklist

- [ ] Run `npm run build`
- [ ] Test production build locally: `npm run preview`
- [ ] Verify all images load
- [ ] Check responsive design
- [ ] Test animations smoothness
- [ ] Verify all links work
- [ ] Update metadata in HTML
- [ ] Deploy `dist/` folder

## 📱 Responsive Breakpoints

```css
Mobile: < 480px
Tablet: 480px - 768px
Desktop: > 768px
```

## 🎯 Git Workflow

```bash
git init
git add .
git commit -m "Initial React portfolio conversion"
git remote add origin <your-repo>
git push -u origin main
```

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript.info](https://javascript.info)

## ⚡ Vite Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production
```

## 🔐 Security Notes

- No sensitive data in code
- Always use `target="_blank" rel="noopener noreferrer"` for external links
- Keep dependencies updated: `npm update`
- Review dependencies: `npm audit`

## 📞 File Locations Quick Search

| Need to... | Edit this file |
|---|---|
| Change portfolio items | `src/components/PortfolioGrid/PortfolioGrid.jsx` |
| Change colors | Component `.css` files |
| Add/remove sections | `src/App.jsx` |
| Modify animations | Component `.css` files |
| Update typography | `src/index.css` |
| Change layout | `src/components/*/Component.css` |
| Add new pages | Create new component |

---

**Last Updated**: May 28, 2026  
**React Version**: 18.2.0  
**Status**: ✅ Production Ready
