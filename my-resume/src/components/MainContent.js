import React from "react";
import "../styles/MainContent.css";
import "../styles/SkillsSection.css";

import {skillsData} from "../cv-data/skillsData.js";
import Section from "./Section";
import SkillCard from "./content/SkillCard.jsx";


function MainContent() {
  return (
    <main>
        <Section title="Skills">
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
                <SkillCard 
                key={index} 
                title={skill.title} 
                content={skill.content} 
                />
            ))}
          </div>
        </Section>
    </main>
  );
}

export default MainContent;