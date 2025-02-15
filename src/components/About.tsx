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
              I am a versatile developer passionate about crafting tools that
              streamline workflows and empower digital communities. Specializing
              in JavaScript, CSS, and API integration, I build user-centric
              solutions for platforms like Discord, IMDb, and anime/manga hubs,
              including my IMDb Template Generator (automating BBCode via OMDB
              API) and customizable CSS themes for MyAnimeList and Holodex.
            </p>
            <br />
            <p>
              I am a committed advocate for collaborative development,
              contributing to open-source ecosystems like BetterDiscordPlugins
              and crafting innovative tools such as the Replugged NSFW Badge to
              enhance user convenience. My work seamlessly blends technical
              precision with community-driven creativity, emphasizing
              customization and scalability to overcome niche challenges.
              Connect with me on LinkedIn, or check out my projects on GitHub!
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
                width={512}
                height={512}
                priority
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
