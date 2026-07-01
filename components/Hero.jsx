import React from 'react';
import AlfinPhoto from '../app/Alfin.jpeg';

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
              <img
                src={AlfinPhoto.src ?? AlfinPhoto}
                alt="Alfin Portrait"
                width={600}
                height={800}
              />

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
