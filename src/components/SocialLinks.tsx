import React from 'react';
import { socialLinks } from '../data/socials';

const SocialLinks: React.FC = () => {
  return (
    <div className={`social-links`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
