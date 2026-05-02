import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from 'next/font/google'
import "./globals.css";


const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Moyomade Adegbite — Developer, Speaker & Youth Ambassador",
  description:
    "Moyomade Adegbite is a software developer, public speaker, and Lagos State Youth Ambassador building software and fighting for quality education across Africa.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={barlowSemiCondensed.className}
      >
        {children}
      </body>
    </html>
  );
}
