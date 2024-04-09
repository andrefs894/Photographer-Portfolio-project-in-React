import '../css/Projects.css';
import ProjectsSlider from './ProjectsSlider';
import Project from './Project';
import {Routes,Route,Link} from 'react-router-dom'
import { useState } from 'react';

function Projects() {
  const [project,setProject] = useState(null);
  return (
    <div className="projects-container" id="projects">
      <div className='projects'>
        <ProjectsSlider setProject={setProject} />
        <Project project={project} />
      </div>
    </div>
  );
}

export default Projects;
/*
          <Routes>
            <Route path="/" element={<ProjectsSlider />} />
            <Route path="/:id" element={<Project title={title} setTitle={setTitle} />} />
          </Routes>
*/