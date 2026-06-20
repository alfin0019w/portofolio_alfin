'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="section-tag" style={{ color: 'var(--highlight-color)' }}>
              03 / Contact Me
            </span>
            <h2>
              Need to send a message?
              <br />
              I'm ready to listen.
            </h2>
          </div>
          <div>
            <button
              className="btn-footer"
              onClick={() => (window.location.href = 'mailto:samlufias@gmail.com')}
            >
              Contact Me{' '}
              <i className="fa-solid fa-paper-plane" style={{ marginLeft: 8 }}></i>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Alfin Porto. All rights reserved.</p>
          <p>Designed with passion & precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;