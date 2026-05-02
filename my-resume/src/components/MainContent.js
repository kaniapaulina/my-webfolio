import React, {useState} from "react";
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
  const [filter, setFilter] = useState("all");

  const matchesFilter = (project) => {
    if (filter === "all") return true;
    if (!project.tags) return false;

    const lowerTags = project.tags.map(tag => tag.toLowerCase());
    if (filter === "frontend") {
      return lowerTags.includes("python");
    }
    if (filter === "javascript") {
      return lowerTags.includes("c#");
    }
    return true;
  };

  const filteredProjects = projectsData.filter(matchesFilter);

  return (
    <main>
      <Element name="myjourney">
        <Section title="My Journey">
          <Timeline title="Work Experience" experiences={workExp}/>
          <Timeline title="Education" experiences={eduExp}/>
        </Section>
      </Element>

      <Element name="projects">
        <Section title="Projects">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              Wszystkie
            </button>
            <button
              className={`filter-btn ${filter === "python" ? "active" : ""}`}
              onClick={() => setFilter("frontend")}
            >
              Python
            </button>
            <button
              className={`filter-btn ${filter === "c#" ? "active" : ""}`}
              onClick={() => setFilter("javascript")}
            >
              C#
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
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