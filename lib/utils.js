'use client';
import { useEffect } from 'react';

export default function ThemeWrapper({ children }) {
  useEffect(() => {
    // 1. Logic Dark Mode
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn?.querySelector('i');
    
    const handleToggle = () => {
      document.documentElement.classList.toggle('dark'); // Pakai 'dark' standar Tailwind
      const isDark = document.documentElement.classList.contains('dark');
      if (themeIcon) {
        themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    };

    themeToggleBtn?.addEventListener('click', handleToggle);

    // 2. Logic Scroll Reveal (Intersection Observer)
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(element => {
      revealObserver.observe(element);
    });

    return () => {
      themeToggleBtn?.removeEventListener('click', handleToggle);
    };
  }, []);

  return <>{children}</>;
}