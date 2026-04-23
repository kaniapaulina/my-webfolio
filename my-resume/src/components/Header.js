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
            <span id="timeline" class="section-link"><Link to="myjourney" smooth={true} duration={500}>My Journey</Link></span>
            <span id="projects" class="section-link"><Link to="projects" smooth={true} duration={500}>Projects</Link></span>
            <span id="skills" class="section-link"><Link to="skills" smooth={true} duration={500}>Skills</Link></span>
        </div>
    </header>

  );
}

export default Header;