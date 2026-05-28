# iPortfolio - React Version

A professional, modern portfolio website converted from HTML to a clean, component-based React + JavaScript architecture.

## 🚀 Features

- **React 18** with JavaScript (no TypeScript)
- **Component-Based Architecture** - Reusable, maintainable components
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Scroll reveals, hover effects, and ambient effects
- **Ambient Visual Effects**:
  - Ambient glow background
  - Interactive mouse spotlight
  - Floating particle canvas
- **Interactive Navigation** - Active link tracking, mobile menu
- **Portfolio Grid** - 2x3 responsive grid layout
- **Custom CSS** - No frameworks, pure CSS styling
- **Vite** - Fast development server and build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx         # Navigation and mobile menu
│   │   └── Header.css         # Navigation styling
│   ├── Loader/
│   │   ├── Loader.jsx         # Cinematic loading screen
│   │   └── Loader.css         # Loader styling
│   ├── AmbientEffects/
│   │   ├── AmbientEffects.jsx # Glow, spotlight, particles
│   │   └── AmbientEffects.css # Visual effects styling
│   ├── PortfolioGrid/
│   │   ├── PortfolioGrid.jsx  # Grid container and section
│   │   └── PortfolioGrid.css  # Grid layout styling
│   ├── PortfolioCard/
│   │   ├── PortfolioCard.jsx  # Reusable card component
│   │   └── PortfolioCard.css  # Card styling
│   └── Footer/
│       ├── Footer.jsx         # Footer section
│       └── Footer.css         # Footer styling
├── assets/                     # Portfolio images
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── 5.png
│   └── 6.png
├── App.jsx                    # Main app component (no logic)
├── main.jsx                   # React entry point
└── index.css                  # Global styles
```

## 🎯 Key Components

### Header Component
- Fixed navigation bar with glassmorphism effect
- Active link tracking based on scroll position
- Mobile-responsive hamburger menu with animations
- Smooth transitions and hover effects

### Loader Component
- Cinematic loading screen
- Animated title and progress bar
- Auto-dismisses after page load

### AmbientEffects Component
- Ambient glow background
- Mouse-tracking spotlight effect
- Particle animation system
- All effects work without disrupting interactions

### PortfolioGrid Component
- Section header with tag and title
- Responsive grid layout (2 columns on desktop, 1 on mobile)
- Scroll reveal animations for cards
- Maps portfolio data to PortfolioCard components

### PortfolioCard Component
- Reusable card component for each portfolio item
- Image with overlay gradient
- Title, description, and tags
- Live view and GitHub links
- Hover animations and active highlight effect

### Footer Component
- Clean footer matching the theme
- Links to portfolio sections
- Social media links
- Copyright information

## 🔧 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Design Features

- **Dark Theme** - Modern dark mode with light text
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Responsive Grid** - 2x3 on desktop, 1 column on mobile
- **Smooth Scrolling** - CSS smooth scroll behavior
- **Custom Scrollbar** - Styled scrollbar matching theme
- **Animations** - Keyframe animations for loader, particles, and cards
- **Hover Effects** - Image scale, border color, and box shadow transitions
- **Active States** - Visual feedback for active navigation links

## 🎬 Animations & Interactions

- **Loader Animation** - Smooth fade-in and progress bar
- **Scroll Reveal** - Elements animate in on scroll
- **Navbar Active Tracking** - Links highlight based on scroll position
- **Card Highlight** - Pulse effect when card is navigated to
- **Particle System** - Floating particles with parallax effect
- **Mouse Spotlight** - Follows cursor with radial gradient
- **Hover Transforms** - Cards lift on hover with shadow

## 💻 React Hooks Used

- **useState** - Menu toggle state
- **useEffect** - Event listeners, scroll tracking, animations
- **useRef** - Canvas reference for particle animation

## 📱 Responsive Breakpoints

- **Desktop** - Full 2-column grid
- **Tablet (768px)** - Mobile menu toggle, adaptive spacing
- **Mobile** - Single column, optimized touch targets

## 🔄 Recent Conversion from HTML

This project was converted from a static HTML portfolio to a professional React application while maintaining:
- ✅ Exact same visual design and layout
- ✅ All animations and interactions
- ✅ Responsive behavior
- ✅ Performance characteristics
- ✅ All styling and effects

## 📝 Code Style

- Clean, readable JavaScript
- Semantic HTML structure
- Component-focused architecture
- Proper prop passing and composition
- CSS BEM naming conventions

## 🚀 Deployment

The project can be deployed to:
- Vercel (recommended for Vite)
- Netlify
- GitHub Pages
- Any static hosting

Build the project and deploy the `dist` folder.

## 📄 License

All rights reserved - Yash Tambade

## 👤 Author

**Yash Tambade**  
Creative Developer & Digital Designer

- GitHub: [@Yashhh710](https://github.com/Yashhh710)
- Portfolio: [yash-portfolio-v5.vercel.app](https://yash-portfolio-v5.vercel.app)

---

Built with ❤️ using React + JavaScript
