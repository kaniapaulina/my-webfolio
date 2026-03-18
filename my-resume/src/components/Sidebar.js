import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <nav>
        
        <p>About Me</p>

        <div className="flex-sidebar">
            <ul>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            </ul>
        </div>
    </nav>
  );
}

export default Sidebar;