import '../css/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

function Project({project}) {
  return (
    <div className="project" id="project">
      {
        project !== null && (
          <>
            <div className='title'>
              <div>
                <a href="/#projects">
                  <FontAwesomeIcon icon={faArrowTurnUp} />
                </a>
                <h1>Projects / {project[0].title}</h1>
              </div>
              <hr />
            </div>
              <div className='photos'>
              {
                project[0].photos.map((photo,index) => {
                  const random = Math.floor(Math.random() * 9) + 1;
                  let theme = '';
                  switch(random) {
                    case 1: theme = 'wide';
                    break;
                    case 2: theme = 'tall';
                    break;
                    case 3: theme = 'big';
                    break;
                    default: break;
                  }
                  return (
                    <div className={`${theme}`}>
                      <img src={photo} />
                    </div>
                  )
                })
              }
            </div>
          </>

        )
      }
    </div>
  );
}

export default Project;
