import React from "react";

// PascalCasing - writing component names with uppercase letters at the start of each word:
function Header() {
  // JSX: JavaScript XML - syntax extension for JavaScript that looks similar to HTML or XML and is used in React to describe the UI structure:
  const name = "Paulinas";
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
      {/* <h1>{name}'s Resume</h1> */}
      {/* <p><i>my-personal-webfolio</i></p> */}
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        color: 'var(--accent)',
        letterSpacing: '0.05em',
      }}>
      <h2>paulina-kania.dev</h2>
      </span>
    </header>

  );
}

export default Header;