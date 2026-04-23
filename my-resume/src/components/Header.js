import React from "react";

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
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8srem',
        color: 'var(--accent)',
        textTransform: 'uppercase',
      }}>
      <h2>welcome~</h2>
      </span>
    </header>

  );
}

export default Header;