'use client';
import React from 'react';
import { useScrollReveal } from '../lib/useScrollReveal';

const About = () => {
  // Panggil hook untuk menjalankan animasi
  useScrollReveal(); 

  return (
    <>
      <section id="about" className="container reveal" style={{ padding: '6rem 0 3rem' }}>
        <div className="section-header">
          <span className="section-tag">01 / Story</span>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-layout">
          <div className="about-bio">
            <h3>Passionate about creating fluid, scalable, and jaw-dropping modern web experiences.</h3>
            <p>
              Saya adalah seorang developer yang mendedikasikan waktu untuk memadukan estetika desain modern dengan fungsionalitas kode yang efisien.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-section">
          <h4>Core Tech Stack & Ecosystem</h4>
          <div className="skills-wrapper">
            <div className="skill-card"><i className="fa-brands fa-html5" style={{ color:'#e34f26' }}></i>HTML5 / CSS3</div>
            <div className="skill-card"><i className="fa-brands fa-js" style={{ color:'#f7df1e' }}></i>JavaScript ES6+</div>
            <div className="skill-card"><i className="fa-brands fa-react" style={{ color:'#61dafb' }}></i>React & Next.js</div>
            <div className="skill-card"><i className="fa-brands fa-css3-alt" style={{ color:'#38b2ac' }}></i>Tailwind CSS</div>
            <div className="skill-card"><i className="fa-solid fa-compass" style={{ color:'#ff7262' }}></i>Figma UI Design</div>
            <div className="skill-card"><i className="fa-brands fa-git-alt" style={{ color:'#f1502f' }}></i>Version Control</div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="container reveal" style={{ padding: '6rem 0' }}>
        <div className="section-header">
          <span className="section-tag">02 / Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="project-bento">
          <div className="project-card bento-large">
            <div className="project-img-holder">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="E-Commerce" />
            </div>
            <div className="project-info">
              <h3>Aura Market — Premium E-Commerce</h3>
              <p>Aplikasi belanja online berbasis web premium.</p>
              <a href="#" className="project-link">View Live Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;