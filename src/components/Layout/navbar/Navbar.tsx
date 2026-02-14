import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        aria-label='Primary Navigation'
        className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}
      >
        <div className='navbar-container'>
          <a href='#' onClick={scrollToTop} className='nav-logo'>
            VS
          </a>

          <div className='desktop-nav'>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            className='mobile-menu-btn'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className='hamburger-line'
              style={{
                top: mobileOpen ? '17px' : '10px',
                transform: mobileOpen ? 'rotate(45deg)' : 'none',
              }}
            />
            <span
              className='hamburger-line'
              style={{
                top: '17px',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className='hamburger-line'
              style={{
                top: mobileOpen ? '17px' : '24px',
                transform: mobileOpen ? 'rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && <div className='mobile-overlay' onClick={() => setMobileOpen(false)} />}

      <div className={`mobile-sidebar ${mobileOpen ? 'open' : 'closed'}`}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '');
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
