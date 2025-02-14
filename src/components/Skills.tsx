import React from 'react';
import { skills } from '../data/skills';
import { FiCode } from 'react-icons/fi';

interface Skill {
  id: number;
  title: string;
  items: string[];
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>
          <FiCode className="icon" /> Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill: Skill) => (
            <div key={skill.id} className="skill-card">
              <h3>{skill.title}</h3>
              <div className="skill-items">
                {skill.items.map((item, index) => (
                  <span key={index} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;