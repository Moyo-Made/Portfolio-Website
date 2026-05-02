import { Github, Linkedin } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";

export interface Links {
	name: string;
	id: string;
	isExternal: boolean;
}

export const links: Links[] = [
	{ name: "About", id: "about", isExternal: false },
	{ name: "Projects", id: "portfolio", isExternal: false },
	{ name: "Impact", id: "impact", isExternal: false },
	{ name: "Blog", id: "blogs", isExternal: false },
	{ name: "Contact", id: "contact", isExternal: false },
	{ name: "Skills", id: "skills", isExternal: false },
];

interface Socials {
	icon: React.ElementType;
	href: string;
	label: string;
}

export const socials: Socials[] = [
	{
		icon: Github,
		href: "https://github.com/Moyo-Made",
		label: "GitHub",
	},
	{
		icon: RiTwitterXFill,
		href: "https://x.com/moyomadee7",
		label: "Twitter",
	},
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/in/moyomade-adegbite/",
		label: "LinkedIn",
	},
];
