import React from 'react';
import './Projects.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsList = [
  {
    title: "Gujarat Safar",
    description: "AI-powered travel planning web app generating personalized itineraries based on user preferences. Features Google's Gemini 2.0 integration, secure authentication, and trip saving.",
    tags: ["React", "Firebase", "Vite", "TailwindCSS", "Gemini 2.0"],
    githubUrl: "https://github.com/DevanshKyada27/GujaratSafar"
  },
  {
    title: "Talk to Data Bot",
    description: "Intelligent chatbot utilizing FAISS and LangChain to answer natural language queries from uploaded PDFs and DOCX files. Integrates Streamlit and AWS S3.",
    tags: ["Python", "LangChain", "AWS S3", "Streamlit", "FAISS"]
  },
  {
    title: "Ai Pioneer",
    description: "A one-stop website to browse the latest Ai Tools, Ai News, and Ai Prompts. Keeping enthusiasts updated with the rapidly evolving AI landscape.",
    tags: ["HTML/CSS", "JavaScript", "React"]
  },
  {
    title: "Secure File Uploader to AWS S3",
    description: "Provides a standard web interface for users to upload files with pre-signed URLs, allowing direct secure browser-to-S3 uploads without exposing credentials.",
    tags: ["AWS S3", "JavaScript", "Security"]
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Source Code">
                      <FiGithub title="Source Code" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink title="Live Demo" />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
