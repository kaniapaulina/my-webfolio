import React from "react";
import { Link } from 'react-scroll';

const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// PascalCasing - writing component names with uppercase letters at the start of each word:
function Header() {
  // JSX: JavaScript XML - syntax extension for JavaScript that looks similar to HTML or XML and is used in React to describe the UI structure:
  return (
    <header>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}> 
        ~/portfolio
      </span>
      {/* <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8srem',
        color: 'var(--accent)',
        textTransform: 'uppercase',
      }}>
      <h2>welcome~</h2>
      </span> */}
      <div className="LinkSection">
            <Link to="myjourney" smooth={true} duration={500} className="link">Timeline</Link>
            <Link to="projects" smooth={true} duration={500} className="link">Projects</Link>
            <Link to="skills" smooth={true} duration={500} className="link"s>Skills</Link>
        </div>
    </header>

  );
}

export default Header;