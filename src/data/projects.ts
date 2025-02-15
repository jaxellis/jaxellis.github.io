export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  code: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Steam Link App Opener',
    description:
      'Instantly open Steam Store/Community links in your Steam desktop app — with a customizable hotkey to bypass!',
    tech: ['Userscript', 'JavaScript', 'Tampermonkey', 'Greasemonkey'],
    code: 'https://github.com/jaxellis/Steam-Link-App-Opener',
  },
  {
    id: 2,
    title: 'Steamy Cyanide',
    description:
      'Cyberpunk-inspired Steam theme featuring vibrant cyan accents on AMOLED black, with CSS customization and Steam Friends Patcher integration.',
    tech: ['CSS', 'Steam UI', 'SFP', 'Theme Customization'],
    code: 'https://github.com/jaxellis/Steamy-Cyanide',
  },
  {
    id: 3,
    title: 'Replugged NSFW Badge',
    description:
      "Brings mwittrien's beloved BetterNSFWTag to Replugged, slapping bold red warnings on NSFW channels so you never click into spicy zones by accident.",
    tech: ['CommonJS', 'React', 'Powercord API'],
    code: 'https://github.com/jaxellis/replugged-nsfw-badge',
  },
  {
    id: 4,
    title: 'IMDB Template Generator',
    description:
      'Generates customizable BBCode templates using IMDB data via OMDB API, available as a Python GUI app or JavaScript userscript. ',
    tech: [
      'Python',
      'Tkinter',
      'JavaScript',
      'Userscript',
      'OMDB API',
      'IMDB',
      'BBCode',
      'Tampermonkey',
      'Greasemonkey',
    ],
    code: 'https://github.com/jaxellis/Imdb_Template_Generator',
  },
];
