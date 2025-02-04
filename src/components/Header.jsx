// src/components/Header.jsx
import React from 'react';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>John Ellis</h1>
        <p>Frontend Developer</p>
        <SocialLinks className="header-socials" />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;