import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container section-container">
        <div className="hero-content animate-slide-up">
          <h2 className="hero-subtitle">Hello, I'm</h2>
          <h1 className="hero-title">Meet Makwana</h1>
          <p className="hero-description">
            An enthusiastic <strong>AI & Cloud Engineer</strong>, <strong>Front-End Developer</strong>, 
            and <strong>Python Developer</strong>. I build intelligent applications and create modern, minimal web experiences.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src="/meet.jpeg" alt="Meet Makwana" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
