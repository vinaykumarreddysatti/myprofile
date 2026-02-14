import React from 'react';
import { Typography } from 'foundation-components';
import './Projects.css';

const projects = [
  {
    title: 'Mobile Banking Application',
    description:
      'Developed high-performance mobile banking apps serving over 1M+ users in Southeast Asia. Focused on security, performance, and seamless user experience.',
    icon: '📱',
    tags: ['Flutter', 'Dart', 'Bloc Pattern', 'Security'],
    gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
  },
  {
    title: 'Banking Customer Support System',
    description:
      'Migrated a massive monolithic banking support platform to a modern micro-frontend architecture using React and Next JS, improving team velocity and scalability.',
    icon: '🎧',
    tags: ['React JS', 'Next.js', 'Micro-frontends', 'Node.js'],
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
  },
  {
    title: 'Trade Banking Web Application',
    description:
      'Engineered complex financial workflows for international trade finance. Designed highly interactive grid components and optimized GraphQL query performance.',
    icon: '⚖️',
    tags: ['Java', 'GraphQL', 'Spring Boot', 'SQL'],
    gradient: 'linear-gradient(135deg, #0284c7, #06b6d4)',
  },
];

const Projects: React.FC = () => {
  return (
    <section id='projects' className='section projects-section'>
      <div className='projects-list-wrapper'>
        <div data-reveal className='reveal-stagger-1'>
          <h2 className='section-title projects-title'>Featured Projects</h2>
          <p className='section-subtitle'>Enterprise banking solutions at scale</p>
        </div>

        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='glass-card project-card'
              data-reveal
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Visual Header */}
              <div className='project-visual-header'>
                <div className='project-overlay' style={{ background: project.gradient }} />
                <span className='project-icon'>{project.icon}</span>
              </div>

              <div className='project-content'>
                <Typography variant='h3' className='project-name'>
                  {project.title}
                </Typography>

                <Typography variant='body' className='project-description'>
                  {project.description}
                </Typography>

                <div className='project-tags-container'>
                  {project.tags.map((tag, i) => (
                    <span key={i} className='glass-tag project-tag'>
                      {tag}
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

export default Projects;
