import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn">
                Demo
              </a>
              <a href={project.code} target="_blank" rel="noreferrer" className="btn">
                Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;