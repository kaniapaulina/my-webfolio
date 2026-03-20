import React from "react";

// PascalCasing - writing component names with uppercase letters at the start of each word:
function Header() {
  // JSX: JavaScript XML - syntax extension for JavaScript that looks similar to HTML or XML and is used in React to describe the UI structure:
  const name = "Paulinas";
  return (
    <header>
      {/* <h1>{name}'s Resume</h1> */}
      {/* <p><i>my-personal-webfolio</i></p> */}
      <h2>about-me</h2>
    </header>
  );
}

export default Header;