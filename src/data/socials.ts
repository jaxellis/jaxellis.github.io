import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
export interface SocialLink {
	name: string;
	url: string;
	icon: IconType;
}

export const socialLinks: SocialLink[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/jaxellis',
		icon: FaGithub,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/jax-dev/',
		icon: FaLinkedinIn,
	},
	{
		name: 'X',
		url: 'https://x.com/jaxellisdev',
		icon: FaXTwitter,
	},
];
