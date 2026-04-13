import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline">
          {/* Experience Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">May 2025 - July 2025</span>
              <h3>TCS (Tata Consultancy Services)</h3>
              <h4>Ai and Cloud Engineering Intern</h4>
              <ul>
                <li>Collaborating with experienced industry professionals to gain hands-on experience in AI and cloud technologies.</li>
                <li>Involved in real-world projects focusing on cloud deployment, model training, and infrastructure integration.</li>
                <li>Enhancing skills in cloud platforms such as AWS and Azure while working in agile, team-oriented environments.</li>
              </ul>
            </div>
          </div>

          {/* Education Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Oct 2022 - Present</span>
              <h3>Pandit Deendayal Energy University (PDEU)</h3>
              <h4>B.Tech - ICT</h4>
              <p className="education-score">CGPA: 7.62/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
