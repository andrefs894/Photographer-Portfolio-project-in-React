import Home from './Home';
import Projects from './Projects';
import Services from './Services';
import About from './About';
import Contact from './Contact';

function Main({image,images}) {

  return (
    <div className="main">
      <Home image={image} images={images} />
      <Projects />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default Main;
