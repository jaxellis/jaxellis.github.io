import { FiSun, FiMoon, FiCircle } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface Theme {
  id: string;
  name: string;
  icon: IconType;
}

export const themes: Theme[] = [
  {
    id: 'light',
    name: 'Light',
    icon: FiSun,
  },
  {
    id: 'dark',
    name: 'Dark',
    icon: FiMoon,
  },
  {
    id: 'amoled',
    name: 'Amoled',
    icon: FiCircle,
  },
];
