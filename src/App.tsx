import { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero/Hero';
import About from './components/Sections/About/About';
import Experience from './components/Sections/Experience/Experience';
import Skills from './components/Sections/Skills/Skills';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import ChatBot from './components/Common/ChatBot/ChatBot';

import SEO from './components/Common/SEO/SEO';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO />
      <a href='#about' className='skip-link'>
        Skip to content
      </a>
      <Layout>
        <ChatBot />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label='Back to top'
      >
        ↑
      </button>
    </>
  );
}

export default App;
