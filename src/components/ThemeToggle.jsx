import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../data/themes';

const ThemeToggle = () => {
  const { currentTheme, setCurrentTheme } = useTheme();
  return (
    <div className="theme-switcher">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => setCurrentTheme(theme.id)}
          className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
          aria-label={`Switch to ${theme.name} theme`}
        >
          {theme.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;