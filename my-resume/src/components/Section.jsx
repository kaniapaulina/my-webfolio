
const Section = ({ title, children }) => (
    <section className="main-section">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">
            {children}
        </div>
    </section>
);

export default Section;