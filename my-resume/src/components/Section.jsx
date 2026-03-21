
const Section = ({ title, children }) => (
    <section className="main-section">
        <div className="section-header">
            <h2 className="section-title">{title}</h2>
        </div>
        <div className="section-content">
            {children}
        </div>
    </section>
);

export default Section;