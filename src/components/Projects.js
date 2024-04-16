import '../css/Projects.css';
import ProjectsSlider from './ProjectsSlider';
import Project from './Project';
import { useState } from 'react';

function Projects() {
  const [project,setProject] = useState(null);
  return (
    <div className="projects-container">
      <div className='projects'>
        <ProjectsSlider setProject={setProject} />
        <Project project={project} />
      </div>
    </div>
  );
}

export default Projects;