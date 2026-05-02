import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <nav>

        <div class="terminal-block" className="HeroSection">
            <div className="about-me">
                <div className="profile-pic">
                    <img src={require("../assets/jołchan.png")} alt="Profile" />
                </div>
                <h2 className="sidebar-name">Paulina Kania</h2>
                <p className="sidebar-role">IT and Econometrics</p>
                <br/>
                <p className="sidebar-bio">A fulltime student looking to make it in todays market, I pride myself with my creativity, perfectionism and enthusiasm to learn.</p>
            </div>
            <div className="contact-info">
                <span className="contact-label">Contact</span>
                <a href="mailto:kaniapaulina2308@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/paulina-kania" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/kaniapaulina" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    </nav>
  );
}

export default Sidebar;