import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">YT</h3>
            <p className="footer-subtitle">Creative Developer & Digital Designer</p>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Portfolio</h4>
              <ul>
                <li><a href="#port1">Professional</a></li>
                <li><a href="#port2">Dark Theme</a></li>
                <li><a href="#port3">SkyLine</a></li>
                <li><a href="#port4">MacOS</a></li>
                <li><a href="#port5">Portfolio V1</a></li>
                <li><a href="#port6">My 1st Portfolio</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Links</h4>
              <ul>
                <li><a href="https://github.com/Yashhh710" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Yash Tambade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
