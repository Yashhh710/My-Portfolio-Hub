import './PortfolioCard.css';

export default function PortfolioCard({ 
  id, 
  codeLabel, 
  image, 
  title, 
  description, 
  tags, 
  liveLink, 
  githubLink 
}) {
  return (
    <div id={id} className="portfolio-card reveal-element">
      <div className="project-preview">
        <span className="project-preview-code">{codeLabel}</span>
        <img src={image} alt={title} />
        <div className="project-preview-overlay"></div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-link">
            Live View &rarr;
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-btn repo-link">
            GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
