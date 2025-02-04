// src/components/SocialLinks.jsx
import React from 'react';
import { socialLinks } from '../data/socials';

const SocialLinks = ({ className }) => {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;