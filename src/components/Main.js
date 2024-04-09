import Home from './Home';
import Projects from './Projects';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import React, { useRef,useEffect } from 'react';

function Main() {

  const containerRef = useRef(null);

  const handleWheel = (event) => {
    const container = containerRef.current;
    if (!container) return;

    // Access event.deltaX to get the horizontal scrolling amount
    const deltaX = event.deltaX;

    // Use deltaX to determine the direction of scrolling and perform horizontal scrolling accordingly
    if (deltaX < 0) {
      // Scrolling left
      container.scrollLeft -= 100; // Adjust the scrolling amount as needed
    } else if (deltaX > 0) {
      // Scrolling right
      container.scrollLeft += 100; // Adjust the scrolling amount as needed
    }
  };
  return (
    <main className="main" ref={containerRef} onWheel={handleWheel}>
      <Home/>
      <Projects />
      <Services />
      <About />
      <Contact />
    </main>
  );
}

export default Main;
