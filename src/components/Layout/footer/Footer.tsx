import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          {/* Brand */}
          <div className='footer-brand'>
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className='footer-logo'
            >
              Vinay Satti
            </a>
            <p className='footer-tagline'>
              Full-Stack Developer building high-performance software for enterprise banking.
            </p>
          </div>

          {/* Navigation */}
          <div className='footer-links-wrapper'>
            <div className='footer-links-col'>
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className='footer-link'>
                  {item}
                </a>
              ))}
            </div>
            <div className='footer-links-col'>
              <a
                href='https://www.linkedin.com/in/vinaykumarreddy-satti-4883a91ab'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-link'
              >
                LinkedIn
              </a>
              <a href='mailto:vinaykumarreddy.chaitu@outlook.com' className='footer-link'>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='footer-bottom'>
          <p className='footer-copyright'>&copy; {currentYear} Vinay Kumar Reddy Satti</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
