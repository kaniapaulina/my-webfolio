import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <nav>

        <div className="HeroSection">
            <div className="about-me">
                <h2>Paulina Kania</h2>
                <h4>computer person</h4>
                <br/>
                <p>A fulltime student looking to make it in todays market, I pride myself with my creativity, perfectionism and enthusiasm to learn.</p>
            </div>
            <div className="contact-info">
                <a href="mailto:kaniapaulina2308@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/paulina-kania" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/kaniapaulina" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            
        </div>
    </nav>
  );
}

export default Sidebar;