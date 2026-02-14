import React from 'react';
import { Typography } from 'foundation-components';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Lead Developer',
      company: 'Tata Consultancy Services',
      location: 'Bangkok, Thailand',
      period: '2021 – Present',
      description:
        'Developed Banking Customer Support System and Mobile Banking Apps using Flutter, React JS, Next JS. Migrated monolithic app to micro-frontend architecture, improving scalability and maintainability.',
      highlights: ['Flutter', 'React JS', 'Next JS', 'Micro-frontend', 'Banking Systems'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Tata Consultancy Services',
      location: 'Chennai, India',
      period: '2016 – 2020',
      description:
        'Worked on Trade Banking Web Application. Designed editable grid components, developed GraphQL queries, and implemented Java-based enhancements for complex financial workflows.',
      highlights: ['Java', 'GraphQL', 'Spring Boot', 'Trade Finance', 'Web Applications'],
    },
  ];

  return (
    <section id='experience' className='section experience-section'>
      <div data-reveal className='reveal-stagger-1'>
        <h2 className='section-title experience-title'>Professional Journey</h2>
        <p className='section-subtitle'>Enterprise-scale banking solutions across Southeast Asia</p>
      </div>

      <div className='experience-list-wrapper'>
        {/* Timeline line */}
        <div className='timeline-line-vertical' />

        <div className='experience-list-container'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-reveal
              className='experience-item-wrapper'
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div
                className={`timeline-dot ${index === 0 ? 'timeline-dot-primary' : 'timeline-dot-secondary'}`}
              />

              <div className='glass-card experience-card'>
                {/* Left accent */}
                <div
                  className={`card-accent-strip ${index === 0 ? 'accent-primary' : 'accent-secondary'}`}
                />

                <div className='experience-header'>
                  <div>
                    <Typography variant='h3' className='experience-role-title'>
                      {exp.title}
                    </Typography>
                    <Typography variant='body' className='experience-company-info'>
                      {exp.company} &middot; {exp.location}
                    </Typography>
                  </div>
                  <span className='glass-tag period-tag'>{exp.period}</span>
                </div>

                <Typography variant='body' className='experience-description'>
                  {exp.description}
                </Typography>

                <div className='tech-tags-container'>
                  {exp.highlights.map((tech, i) => (
                    <span key={i} className='glass-tag tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
