import React from 'react';
import { Typography } from 'foundation-components';
import './Skills.css';

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'JavaScript', 'Dart', 'TypeScript', 'SQL', 'PL/SQL', 'Shell Script'],
    gradient: 'linear-gradient(135deg, #4f46e5, #6366f1)',
  },
  {
    category: 'Frontend Development',
    icon: '🎨',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Redux'],
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
  },
  {
    category: 'Mobile Development',
    icon: '📱',
    skills: ['Flutter', 'Bloc Pattern', 'Responsive Design'],
    gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
  },
  {
    category: 'Backend & Databases',
    icon: '⚙️',
    skills: ['Spring Boot', 'Node.js', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'Bitbucket', 'Jenkins', 'Docker', 'Kubernetes', 'JIRA'],
    gradient: 'linear-gradient(135deg, #db2777, #f472b6)',
  },
];

const Skills: React.FC = () => {
  return (
    <section id='skills' className='section skills-section'>
      <div className='skills-list-wrapper'>
        <div data-reveal className='reveal-stagger-1'>
          <h2 className='section-title skills-title'>Skills & Expertise</h2>
          <p className='section-subtitle'>Technologies I work with to bring ideas to life</p>
        </div>

        <div className='skills-grid'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className='glass-card skill-card'
              data-reveal
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className='skill-card-content'>
                <div className='skill-icon-wrapper' style={{ background: category.gradient }}>
                  {category.icon}
                </div>

                <Typography variant='h3' className='skill-category-title'>
                  {category.category}
                </Typography>

                <div className='skill-tags-container'>
                  {category.skills.map((skill, i) => (
                    <span key={i} className='glass-tag skill-tag'>
                      {skill}
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

export default Skills;
