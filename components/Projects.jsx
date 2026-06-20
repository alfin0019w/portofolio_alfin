import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container reveal" style={{ padding: '6rem 0' }}>
      <div className="section-header">
        <span className="section-tag">02 / Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="project-bento">
        {/* Project 1: Large Bento */}
        <div className="project-card bento-large">
          <div className="project-img-holder">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="E-Commerce Showcase" 
            />
          </div>
          <div className="project-info">
            <div>
              <h3>Aura Market — Premium E-Commerce Platform</h3>
              <p>Aplikasi belanja online berbasis web premium dengan sistem manajemen state yang kompleks, checkout instan, serta animasi mikro-interaksi yang dinamis.</p>
              <div className="project-tags">
                <span className="proj-tag">Next.js</span>
                <span className="proj-tag">TailwindCSS</span>
                <span className="proj-tag">Stripe API</span>
              </div>
            </div>
            <a href="#" className="project-link">View Live Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>

        {/* Project 2: Small Bento */}
        <div className="project-card bento-small">
          <div className="project-img-holder">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Dashboard Showcase" 
            />
          </div>
          <div className="project-info">
            <div>
              <h3>Apex Analytics Hub</h3>
              <p>Visualisasi data finansial real-time dengan chart interaktif enkripsi tinggi.</p>
              <div className="project-tags">
                <span className="proj-tag">React.js</span>
                <span className="proj-tag">Chart.js</span>
              </div>
            </div>
            <a href="#" className="project-link">View Case <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>

        {/* Project 3: Medium Bento */}
        <div className="project-card bento-medium">
          <div className="project-img-holder">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Agency Landing Page" 
            />
          </div>
          <div className="project-info">
            <div>
              <h3>Vortex Creative Site</h3>
              <p>Website portofolio interaktif agensi dengan manipulasi DOM tingkat lanjut dan optimasi transisi halaman mulus tanpa jeda memuat.</p>
              <div className="project-tags">
                <span className="proj-tag">HTML5</span>
                <span className="proj-tag">GSAP Animation</span>
              </div>
            </div>
            <a href="#" className="project-link">Explore Site <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>

        {/* Project 4: Medium Bento */}
        <div className="project-card bento-medium">
          <div className="project-img-holder">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Web 3 UI Application" 
            />
          </div>
          <div className="project-info">
            <div>
              <h3>Neural Art NFT Space</h3>
              <p>Desain platform pencetakan karya seni digital imersif yang mengadopsi skema UI kaca (glassmorphism) futuristik.</p>
              <div className="project-tags">
                <span className="proj-tag">UI/UX Design</span>
                <span className="proj-tag">Web3 CSS</span>
              </div>
            </div>
            <a href="#" className="project-link">Launch App <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;