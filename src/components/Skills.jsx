import React from 'react';
import './Skills.css';

const skills = [
  "Python", "HTML, CSS & JS", "React.js", 
  "Prompt Engineering", "AWS", "Docker", "SQL",
  "OOPS", "DSA"
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <h2 className="section-title text-center">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
