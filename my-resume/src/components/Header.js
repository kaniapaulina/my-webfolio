import React from "react";
import "../styles/Header.css";

// PascalCasing - writing component names with uppercase letters at the start of each word:
function Header() {
  // JSX: JavaScript XML - syntax extension for JavaScript that looks similar to HTML or XML and is used in React to describe the UI structure:
  const name = "Plum";
  return (
    <header className="head">
      <img src="seal-icon.png" alt="Seal" />
      <h1>{name}'s Seal Island</h1>
    </header>
  );
}

export default Header;