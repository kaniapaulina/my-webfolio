import React from 'react';

const TimelineItem = ({ title, organization, date, descriptions, type }) => (
  <div className="timeline-view">
    <div className="timeline-line"></div>
    <div className="timeline-dot"></div>
    <span className="timeline-date">{date}</span>
    <div className="timeline-card">
      <h3 className="item-title">{title}</h3>
      <h4 className="timeline-organization">{organization}</h4>
      <p className="timeline-description">
        {descriptions.map((tag, i) => (
          <span key={i} className='description-item'>{tag}</span>
        ))}
      </p>
    </div>
  </div>
);


const Timeline = ({ title, experiences }) => {
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
            descriptions={experiences.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;