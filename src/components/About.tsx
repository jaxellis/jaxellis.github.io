import React from 'react';
import { FaRegSmile } from 'react-icons/fa';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>
          <FaRegSmile className="icon" /> About Me
        </h2>
        <div className="about-content">
          <div className="bio">
            <p>
              I&apos;m a passionate frontend developer with 2 years of
              experience creating responsive and user-friendly web applications.
              Specializing in React and modern JavaScript ecosystems.
            </p>
            <p>
              When I&apos;m not coding, I enjoy contributing to open-source
              projects, learning new technologies, and creating technical
              content.
            </p>
          </div>
          <div className="profile-image">
            <picture>
              {/* WebP format for better compression */}
              <source
                srcSet="/images/web-app-manifest-192x192.webp 192w,
                /images/web-app-manifest-512x512.webp 512w"
                sizes="(max-width: 600px) 192px, 512px"
                type="image/webp"
              />
              {/* Fallback PNG images */}
              <source
                srcSet="/images/web-app-manifest-192x192.png 192w,
              /images/web-app-manifest-512x512.png 512w"
                sizes="(max-width: 600px) 192px, 512px"
                type="image/png"
              />
              <Image
                src="/images/web-app-manifest-512x512.png"
                alt="JaxEllis"
                loading="lazy"
                width={512}
                height={512}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
