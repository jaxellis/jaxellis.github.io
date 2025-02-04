import { FiSun, FiMoon, FiCircle } from 'react-icons/fi';

export const themes = [
	{
		id: 'light',
		name: 'Light',
		icon: <FiSun />,
	},
	{
		id: 'dark',
		name: 'Dark',
		icon: <FiMoon />,
	},
	{
		id: 'amoled',
		name: 'Amoled',
		icon: <FiCircle style={{ fill: 'black' }} />,
	},
];
