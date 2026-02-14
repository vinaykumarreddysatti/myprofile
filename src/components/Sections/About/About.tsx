import React from 'react';
import { Typography } from 'foundation-components';
import './About.css';

const About: React.FC = () => {
  return (
    <section id='about' className='section about-section'>
      <div data-reveal className='reveal-stagger-1'>
        <h2 className='section-title about-title'>My Story</h2>
        <p className='section-subtitle'>A journey from enterprise banking to the frontier of AI</p>
      </div>
      <div className='glass-card reveal-stagger-2 about-card' data-reveal>
        {/* Decorative corner accent */}
        <div className='about-card-accent' />

        <div className='about-grid'>
          <div data-reveal className='reveal-stagger-3'>
            <Typography variant='h3' className='about-subtitle-text'>
              Building the Future
            </Typography>
            <Typography variant='body' className='about-body-text'>
              As a seasoned <strong className='text-highlight-primary'>Full-Stack Developer</strong>{' '}
              with <strong className='text-highlight-primary'>9.5 years of experience</strong>, I
              have built and optimized scalable applications using technologies such as React.js,
              Flutter, Spring Boot, Java, Node.js, and MongoDB.
              <br />
              <br />
              Over the years, I have developed a deep understanding of software engineering.
              Educated in Computer Science, with a focus on building efficient, scalable software
              systems that stand the test of time.
            </Typography>
          </div>
          <div data-reveal className='reveal-stagger-4'>
            <Typography variant='h3' className='about-subtitle-text'>
              The Next Frontier
            </Typography>
            <Typography variant='body' className='about-body-text'>
              With a strong foundation in problem-solving and algorithmic thinking, I am now eager
              to transition into the field of{' '}
              <strong className='text-highlight-secondary'>
                Artificial Intelligence and Machine Learning
              </strong>
              . My growing interest in data science and deep learning has driven me to pursue a
              Master's program, which I see as a transformative step in my career.
              <br />
              <br />I aim to bridge my expertise in software development with cutting-edge AI
              technologies, enabling me to build intelligent, data-driven solutions that solve
              real-world challenges.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
