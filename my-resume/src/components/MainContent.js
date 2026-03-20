import React from "react";
import "../styles/MainContent.css";

import MyProjects from "./content/MyProjects";
import MySkills from "./content/MySkills";

function MainContent() {
  return (
    <main>
      <MyProjects />
      <MySkills />
    </main>
  );
}

export default MainContent;