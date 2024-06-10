import React from 'react';
import { useHistory } from 'react-router-dom';
import './Projects.css';

const Projects = ({ projects }) => {
  const history = useHistory();

  const handleProjectClick = (projectName) => {
    history.push(`/upload/${projectName}`);
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => handleProjectClick(project.name)}>
            <div className="project-card-header">
              <span className="project-initials">{project.name[0].toUpperCase()}</span>
              <span className="project-name">{project.name}</span>
            </div>
            <div className="project-card-body">
              <p>{project.episodes} Episodes</p>
              <p>Last edited {project.lastEdited}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
