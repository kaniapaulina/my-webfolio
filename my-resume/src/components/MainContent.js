import React from "react";
import { Element } from "react-scroll";

import "../styles/MainContent.css";

import Section from "./Section";
import "../styles/Section.css"

import {skillsData} from "../cv-data/skillsData.js";
import SkillCard from "./content/SkillCard.jsx";
import "../styles/SkillsSection.css";

import { projectsData } from "../cv-data/projectsData.js";
import ProjectCard from "./content/ProjectCard.jsx";
import "../styles/ProjectsSection.css";

import { workExp } from "../cv-data/workExp.js"
import Timeline from "./content/TimeLine.jsx";
import "../styles/TimelineSection.css"

import { eduExp } from "../cv-data/eduExp.js";

import Footer from './Footer';


function MainContent() {
  return (
    <main>
      <Element name="myjourney">
        <Section title="My Journey">
          <Timeline title="Work Experience" experiences={workExp}/>
          <Timeline title="Education" experiences={eduExp}/>
        </Section>
      </Element>

      <Element name="projects">
        <Section  title="Projects">
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              tags={project.tags}
              link={project.link}
              />
            ))}
          </div>
        </Section>
      </Element>
        
      <Element name="skills">
        <Section title="Skills">
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
                <SkillCard 
                key={index} 
                title={skill.title} 
                subtitle={skill.subtitle}
                tags={skill.tags}
                />
            ))}
          </div>
        </Section>
      </Element>
        
      <Footer/>
    </main>
  );
}

export default MainContent;