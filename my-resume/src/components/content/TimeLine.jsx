const TimelineItem = ({ title, organization, date, description, type }) => (
  <div className="timeline-view">
    <div className="timeline-line"></div>
    <div className="timeline-dot"></div>

    <div className="timeline-card">
      <span className="timeline-date">{date}</span>
      <h3 className="item-title">{title}</h3>
      <h4 className="timeline-organization">{organization}</h4>
      <p className="timeline-description">
        {description}
      </p>
    </div>
  </div>
  );


const Timeline = ({title, experiences}) => {
    return (
    <section className="timeline-mainview">
        <h2 className="timeline-title">{title}</h2>
        <div className="timeline-content">
            {experiences?.map((experiences, index) => (
                <TimelineItem 
                key={index} 
                date={experiences.date}
                title={experiences.title}
                organization={experiences.organization}
                description={experiences.description}
                />
            ))}
        </div>
    </section>
    );
};

export default Timeline;