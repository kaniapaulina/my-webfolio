import React from "react";

function Footer() {
  return (
    <footer>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.06em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}><p>© 1998 Paulina Kania</p></span>
      
    </footer>
  );
}

export default Footer;