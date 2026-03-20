const SkillCard = ({ title, content }) => (
    <div className="skill-card">
        <h3 className="skill-title">{title}</h3>
        <p className="skill-content">{content}</p>
    </div>
);

export default SkillCard;