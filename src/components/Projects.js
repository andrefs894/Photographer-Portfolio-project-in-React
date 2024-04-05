import '../css/Projects.css';
import ProjectsSlider from './ProjectsSlider';
import Photo1 from '../assets/home1.jpg';
import Photo2 from '../assets/home2.jpg';
import Photo3 from '../assets/home3.jpg';
import Photo4 from '../assets/home4.jpg';
import Photo5 from '../assets/home5.jpg';

function Projects() {
  const slides = [
    Photo1, Photo2, Photo3, Photo4, Photo5
  ]

  return (
    <div className="projects-container" id='projects'>
      <div>
        <h1>Projects</h1>
        <hr />
      </div>
      <ProjectsSlider />
    </div>
  );
  }

  export default Projects;