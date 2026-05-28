import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a base timeout to ensure loader disappears
    const baseTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Also try window load event as fallback
    const handleLoad = () => {
      setIsVisible(false);
    };

    // If page already loaded, hide immediately after animation
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsVisible(false);
      }, 1800);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(baseTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`loader ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-title">Yash Tambade</div>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
