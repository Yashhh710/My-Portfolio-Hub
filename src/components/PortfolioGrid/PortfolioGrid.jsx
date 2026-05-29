import { useEffect } from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import './PortfolioGrid.css';

const portfolioData = [
  {
    id: 'port1',
    codeLabel: '01 // Professional',
    image: img1,
    title: 'Professional Portfolio',
    description: 'A modern and immersive portfolio experience showcasing creative frontend development, interactive UI design, and innovative digital projects built with React, JavaScript, HTML, and CSS.',
    tags: ['React.js', 'Responsive Design', 'Mobile Friendly'],
    liveLink: 'https://yash-portfolio-professional.vercel.app/',
    githubLink: 'https://github.com/Yashhh710/yash.portfolio.professional-'
  },
  {
    id: 'port2',
    codeLabel: '02 // Dark theme',
    image: img2,
    title: 'Dark Theme Portfolio',
    description: 'A modern and immersive portfolio showcasing innovative frontend development, interactive UI design, and visually engaging digital experiences built with modern web technologies.',
    tags: ['React.js', 'UI/UX Design', 'Modern UI'],
    liveLink: 'https://portfolio-v4-three-mauve.vercel.app',
    githubLink: 'https://github.com/Yashhh710/Portfolio-v4'
  },
  {
    id: 'port3',
    codeLabel: '03 // SkyLine',
    image: img3,
    title: 'SkyLine Protocol',
    description: 'Skyline Protocol is a futuristic digital portfolio experience blending immersive visuals, modern frontend development, and interactive storytelling into a unique web journey.',
    tags: ['React.js', 'Anime', 'UI/UX'],
    liveLink: 'https://map-port-v1.vercel.app',
    githubLink: 'https://github.com/Yashhh710/map-port-v1'
  },
  {
    id: 'port4',
    codeLabel: '04 // MacOS UI',
    image: img4,
    title: 'MacOS',
    description: 'An interactive Mac-inspired setup showcasing the creative environment behind modern web development, design, and digital experiences.',
    tags: ['Html 5', 'UI Inspiration', 'Mac UI'],
    liveLink: 'https://mac-lyart.vercel.app',
    githubLink: 'https://github.com/Yashhh710/Mac'
  },
  {
    id: 'port5',
    codeLabel: '05 // Portfolio V1',
    image: img5,
    title: 'Portfolio V1',
    description: 'An early-generation portfolio focused on modern design aesthetics, frontend creativity, immersive Three.js experiences, and building interactive digital environments for the web.',
    tags: ['Html 5', 'Three.js', 'Anime Style'],
    liveLink: 'https://yashhh710.github.io/Portfolio_v1/',
    githubLink: 'https://github.com/Yashhh710/Portfolio_v1'
  },
  {
    id: 'port6',
    codeLabel: '06 // first portfolio',
    image: img6,
    title: 'My 1st Portfolio',
    description: 'A simple, clean, and responsive portfolio website built with HTML5, CSS3, and JavaScript. Showcases my skills, projects, and experience to potential employers and clients.',
    tags: ['Html 5', 'css', 'javascript'],
    liveLink: 'https://yashhh710.github.io/My-Website/index.html',
    githubLink: 'https://github.com/Yashhh710/My-Website'
  }
];

export default function PortfolioGrid() {
  useEffect(() => {
    const handleScrollReveal = () => {
      const triggerBottom = window.innerHeight * 0.88;
      const revealElements = document.querySelectorAll('.reveal-element');

      revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
          el.classList.add('visible');
        }
      });
    };

    // Initial check
    handleScrollReveal();

    window.addEventListener('scroll', handleScrollReveal);
    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-tag">Yash Tambade</span>
          <h2 className="section-title">Selected Portfolios</h2>
        </div>
        
        <div className="portfolio-grid">
          {portfolioData.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
