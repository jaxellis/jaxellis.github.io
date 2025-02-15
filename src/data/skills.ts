export interface Skill {
  id: number;
  title: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Frontend Development',
    items: [
      'CSS3',
      'HTML5',
      'JavaScript',
      'Typescript',
      'React',
      'Next.js',
      'Responsive Design',
      'SASS',
      'Stylus',
    ],
  },
  {
    id: 2,
    title: 'Backend & Databases',
    items: ['Golang', 'GraphQL', 'MySQL', 'Python', 'SQL'],
  },
  {
    id: 3,
    title: 'Development Tools',
    items: [
      'Android Studio',
      'Git',
      'HeidiSQL',
      'IntelliJ IDEA',
      'npm',
      'npx',
      'pnpm',
      'VS Code',
      'Visual Studio',
    ],
  },
  {
    id: 4,
    title: 'APIs & Services',
    items: ['GraphQL', 'REST APIs', 'Web Requests'],
  },
  {
    id: 5,
    title: 'DevOps & Workflow',
    items: ['CI/CD'],
  },
];
