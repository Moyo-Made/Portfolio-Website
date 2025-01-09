import {
	Github,
	Linkedin,
	Mail,
	ExternalLink,
	ArrowUpRight,
} from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";

export interface Links{
	name: string;
	id: string;
	isExternal: boolean;
}

export const links: Links[] = [
	{ name: "About", id: "about", isExternal: false },
	{ name: "Projects", id: "portfolio", isExternal: false },
	{ name: "Blog", id: "blogs", isExternal: false },
	{ name: "Contact", id: "contact", isExternal: false },
	{
		name: "Resume",
		id: "https://drive.google.com/file/d/1TiES4-Klm9nzXPImviYQbSZ2HdBOyJD-/view?usp=drive_link",
		isExternal: true,
	},
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