import React from 'react';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className='container'>
				<h1>John Ellis</h1>
				<p>Frontend Developer</p>
				<SocialLinks />
				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
