'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = mounted && currentTheme === 'dark';
  return (
    <header>
      <div className="container nav-container">
        <div className="logo">
          <div className="logo-circle">A</div>
          <span className="logo-text">Alfin.</span>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="btn-primary" onClick={() => window.location.href = '#contact'}>Contact Me</button>
          <button
            id="theme-toggle"
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <i className={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;