const SkillCard = ({ title, subtitle, tags}) => (
  <div className="skill-card">
    <div className="skill-card-header">
      <h3 className="skill-title">{title}</h3>
      {subtitle && 
      <span className="skill-subtitle">{subtitle}</span>}
    </div>
    {tags && tags.length > 0 && (
      <div className="skill-tags">
        {tags.map((tag, i) => (
          <span key={i} className="skill-tag">{tag}</span>
        ))}
      </div>
    )}
  </div>
);

export default SkillCard;