export interface Project {
	id: number;
	title: string;
	description: string;
	tech: string[];
	demo: string;
	code: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Replugged NSFW Badge',
		description:
			"Brings mwittrien's beloved BetterNSFWTag to Replugged, slapping bold red warnings on NSFW channels so you never click into spicy zones by accident.",
		tech: ['CommonJS', 'React', 'Powercord API'],
		demo: '#',
		code: 'https://github.com/jaxellis/replugged-nsfw-badge',
	},
];
