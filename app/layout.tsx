import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
});
export const metadata: Metadata = {
	title: "Moyomade Adegbite — Developer, Speaker & Youth Ambassador",
	description:
		"Nigerian software developer, public speaker, and Lagos State Youth Ambassador building software and fighting for quality education across Africa. From Ajegunle to every stage.",
	keywords: [
		"Moyomade Adegbite",
		"Nigerian developer",
		"Lagos frontend developer",
		"youth ambassador Lagos",
		"SDG4 Nigeria",
		"public speaker Nigeria",
		"frontend developer Nigeria",
	],
	icons: {
		icon: "/favicon.png",
	},
	openGraph: {
		title: "Moyomade Adegbite — Developer, Speaker & Youth Ambassador",
		description:
			"Nigerian software developer, public speaker, and Lagos State Youth Ambassador building software and fighting for quality education across Africa.",
		url: "https://moyomade.com",
		siteName: "Moyomade Adegbite",
		locale: "en_NG",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Moyomade Adegbite — Developer, Speaker & Youth Ambassador",
		description:
			"Nigerian software developer, public speaker, and Lagos State Youth Ambassador.",
		creator: "@moyomadee7",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={barlowSemiCondensed.className}>{children}</body>
		</html>
	);
}
