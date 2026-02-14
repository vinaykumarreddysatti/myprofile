import React from 'react';
import { Typography, Button } from 'foundation-components';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id='contact' className='section contact-section'>
      <div data-reveal className='reveal-stagger-1'>
        <h2 className='section-title contact-title'>Get In Touch</h2>
        <p className='section-subtitle'>Open to new opportunities and exciting projects</p>
      </div>

      <div className='contact-card-wrapper'>
        <div className='glass-card reveal-stagger-2 contact-card' data-reveal>
          <Typography variant='h3' className='contact-heading'>
            Let's Build Something Great
          </Typography>
          <Typography variant='body' className='contact-body'>
            I'm currently exploring new opportunities and would love to hear about your project or
            team.
          </Typography>

          {/* Contact Info */}
          <div className='contact-info-container'>
            <div className='contact-info-item'>
              <span className='contact-icon'>📧</span>
              <div className='contact-details'>
                <Typography variant='caption' className='contact-label'>
                  Email
                </Typography>
                <Typography variant='body' className='contact-value-primary'>
                  vinaykumarreddy.chaitu@outlook.com
                </Typography>
              </div>
            </div>
            <div className='contact-info-item'>
              <span className='contact-icon'>📞</span>
              <div className='contact-details'>
                <Typography variant='caption' className='contact-label'>
                  Phone
                </Typography>
                <Typography variant='body' className='contact-value-secondary'>
                  0889340027
                </Typography>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='contact-actions'>
            <a href='mailto:vinaykumarreddy.chaitu@outlook.com' className='contact-link'>
              <Button
                variant='primary'
                className='button-primary contact-btn-primary'
                aria-label='Send an email to Vinay'
              >
                Send Email
              </Button>
            </a>
            <a
              href='https://www.linkedin.com/in/vinaykumarreddy-satti-4883a91ab'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
            >
              <Button variant='outline' className='contact-btn-outline'>
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
