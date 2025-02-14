import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';
import { themes } from '../data/themes';

interface Theme {
	id: string;
	name: string;
}

interface ThemeContextProps {
	currentTheme: string;
	setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
	themes: Theme[];
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState<string>('dark'); // Default theme

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setCurrentTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
		document.documentElement.setAttribute('data-theme', currentTheme);
	}, [currentTheme]);

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
