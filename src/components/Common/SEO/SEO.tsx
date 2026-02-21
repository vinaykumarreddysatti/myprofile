import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Vinay Kumar Reddy Satti | Full-Stack Developer & Tech Lead',
  description = 'Full-Stack Developer & Tech Lead with 9.5 years of experience in React, Flutter, Spring Boot, and Node.js. Specializing in enterprise banking transformations and micro-frontend architectures.',
  keywords = 'Vinay Kumar Reddy Satti, Full-Stack Developer, Tech Lead, React, Flutter, Spring Boot, Node.js, Micro-frontends, Banking Transformation',
  image = `${import.meta.env.BASE_URL}profile-photo.jpeg`, // Default to profile photo which we know exists
  url = 'https://myprofile.remeeinfotech.com', // Replace with actual URL if known, else usage default
}) => {
  const siteTitle = 'Vinay Kumar Reddy Satti';

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={siteTitle} />
      <link rel='canonical' href={url} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteTitle} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* Structured Data (JSON-LD) */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteTitle,
          url: url,
          image: image,
          sameAs: [
            'https://www.linkedin.com/in/vinay-kumar-reddy-satti-a3520188/',
            'https://github.com/vinaychaitu', // Assuming github handle from user context or just placeholder
          ],
          jobTitle: 'Full-Stack Developer & Tech Lead',
          worksFor: {
            '@type': 'Organization',
            name: 'TCS',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
