import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#port1');
  const [navbarStyle, setNavbarStyle] = useState({
    padding: '16px 32px',
    background: 'rgba(10, 10, 15, 0.7)'
  });

  const navLinks = [
    { id: 'port1', label: 'Port 1' },
    { id: 'port2', label: 'Port 2' },
    { id: 'port3', label: 'Port 3' },
    { id: 'port4', label: 'Port 4' },
    { id: 'port5', label: 'Port 5' },
    { id: 'port6', label: 'Port 6' }
  ];

  const handleLinkClick = (id) => {
    setActiveLink(`#${id}`);
    setIsMenuOpen(false);
    
    // Highlight animation
    const card = document.getElementById(id);
    if (card) {
      card.classList.remove('activated-highlight');
      setTimeout(() => {
        card.classList.add('activated-highlight');
      }, 50);
      
      card.addEventListener('animationend', () => {
        card.classList.remove('activated-highlight');
      }, { once: true });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 50) {
        setNavbarStyle({
          padding: '12px 24px',
          background: 'rgba(5, 5, 8, 0.85)'
        });
      } else {
        setNavbarStyle({
          padding: '16px 32px',
          background: 'rgba(10, 10, 15, 0.7)'
        });
      }

      // Update active link based on scroll position
      const cards = document.querySelectorAll('.portfolio-card');
      let currentActiveCardId = '';
      
      cards.forEach(card => {
        const cardTop = card.offsetTop;
        if (window.scrollY >= (cardTop - 180)) {
          currentActiveCardId = card.getAttribute('id');
        }
      });

      if (currentActiveCardId) {
        setActiveLink(`#${currentActiveCardId}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper" style={{ transform: isMenuOpen ? '' : '' }}>
      <div className="container">
        <nav className="navbar glass-panel" style={navbarStyle}>
          <a href="#port1" className="navbar-brand">YT</a>
          
          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            id="menu-toggle" 
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  className={`navbar-link ${activeLink === `#${link.id}` ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
