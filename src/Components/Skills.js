import React from "react";
import {
  FaCode,
  FaBootstrap,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
} from "react-icons/fa";
import { FiCloud } from "react-icons/fi";

import {
  FaJavaScript,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiBootstrap,
  DiVisualstudio,
  DiIntellij,
  DiGithub,
  DiJsBadge,
} from "react-icons/di";

import "../Styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1 className="section-title">Skills</h1>
      <div className="skills-grid">
        {/* Languages */}
        <div className="skills-category">
          <h2 className="category-title">Languages</h2>
          <div className="icon-container rows2">
            <span className="rows2">
              <FaCode style={{ color: "dodgerblue" }} />
              <FaJs style={{ color: "yellow" }} />
            </span>
          </div>
        </div>

        {/* Front-End */}
        <div className="skills-category">
          <h2 className="category-title">Front-End</h2>
          <div className="icon-container">
            <FaReact style={{ color: "skyblue" }} />
            <DiBootstrap style={{ color: "blue" }} className="blue-icon" />
            <FaHtml5 style={{ color: "orange" }} />
            <FaCss3 style={{ color: "skyblue" }} />
            {/* <FaJs /> */}
          </div>
        </div>

        {/* Back-End */}
        <div className="skills-category">
          <h2 className="category-title">Back-End</h2>
          <div className="icon-container">
            <DiNodejs style={{ color: "green" }} />
            <DiJsBadge style={{ color: "yellow" }} />
            <DiMysql color="skyblue" />
            <DiMongodb color="green" />
          </div>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h2 className="category-title">Tools</h2>
          <div className="icon-container">
            <DiGit color="white" />
            <DiVisualstudio color="dodgerblue" />
            <DiGithub color="white" />
            <FiCloud color="whitesmoke" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
