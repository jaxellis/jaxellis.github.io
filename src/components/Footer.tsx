import React from 'react';
import SocialLinks from './SocialLinks';
import { FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<button
					onClick={scrollToTop}
					className='scroll-top'
					aria-label='Scroll to top'
				>
					<FiArrowUp />
				</button>
				<SocialLinks />
				<p className='copyright'>
					&copy; {new Date().getFullYear()} John Ellis. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
