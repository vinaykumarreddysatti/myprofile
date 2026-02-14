import { Button, Typography } from 'foundation-components';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id='hero' className='section hero-section'>
      <div className='hero-container'>
        <div className='glass-card hero-card' data-reveal>
          {/* Profile Photo */}
          <div className='hero-photo-col'>
            <div className='float photo-wrapper'>
              <div className='photo-overlay' />
              <img
                src={`${import.meta.env.BASE_URL}profile-photo.jpeg`}
                alt='Vinay Kumar Reddy Satti'
                loading='eager'
                className='profile-image'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    const fallback = document.createElement('div');
                    fallback.className = 'image-fallback';
                    fallback.textContent = 'V';
                    target.parentElement.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>

          {/* Profile Details */}
          <div className='hero-details-col'>
            <div data-reveal className='reveal-stagger-1'>
              <Typography variant='h1' className='hero-name'>
                Vinay Kumar Reddy Satti
              </Typography>
            </div>

            <div data-reveal className='reveal-stagger-2'>
              <Typography variant='h2' className='hero-title'>
                Full-Stack Developer & Tech Lead
              </Typography>
            </div>

            {/* Info Chips */}
            <div data-reveal className='reveal-stagger-3 info-chips-container'>
              {[
                { label: '9.5 Years', icon: '💼' },
                { label: 'Bangkok, TH', icon: '📍' },
                { label: 'Full-Stack', icon: '🎯' },
              ].map((item) => (
                <span key={item.label} className='glass-tag info-chip'>
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>

            <div data-reveal className='reveal-stagger-4'>
              <Typography variant='body' className='hero-description'>
                Building scalable, high-performance applications with a passion for innovation.
                Experienced in microservices architecture, cloud computing, and leading development
                teams across enterprise banking ecosystems.
              </Typography>

              <div className='hero-actions'>
                <Button
                  variant='primary'
                  className='button-primary hero-btn-primary'
                  size='lg'
                  aria-label='Scroll to Contact section'
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get In Touch
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='hero-btn-outline'
                  aria-label='Scroll to Experience section'
                  onClick={() =>
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Experience
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
