import React from 'react';

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text reveal active">
            <h1>Alfin Porto</h1>
            <p className="hero-desc">
              — <span className="highlight">Full Stack Developer</span> based in Indonesia, specializing in building high-performance interfaces with raw, solid design logic.
            </p>
            <div className="scroll-down">
              <div className="scroll-box"><i className="fa-solid fa-chevron-down"></i></div>
              <span>Scroll Down Exploration</span>
            </div>
          </div>

          <div className="hero-visual reveal active">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1527010154944-f2241763d806?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zZSUyMHByaWElMjBrZXJlbnxlbnwwfHwwfHx8MA%3D%3D" alt="Alfin Portrait" />
              
              <div className="social-links">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
   
    </>
  );
};

export default Hero;