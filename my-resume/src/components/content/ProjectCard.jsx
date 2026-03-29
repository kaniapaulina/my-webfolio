const ProjectCard = ({ title, subtitle, tags, link}) => (
  <div className="project-card">
    <div className="project-card-header">
      <h3 className="title">{title}</h3>
      <div className="link-button">
        { link &&
        <a href={link} target="_blank" className="project-link">repo</a>
      }
      </div>
      
    </div>
    <div className="project-card-body">
        {subtitle && 
      <span className="project-subtitle">{subtitle}</span>}
      {tags && tags.length > 0 && (
      <div className="tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
    )}
    </div>
  </div>
);

export default ProjectCard;