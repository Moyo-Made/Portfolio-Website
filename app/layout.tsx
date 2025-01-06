import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from 'next/font/google'
import "./globals.css";


const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Moyomade | Frontend Developer",
  description: 
"Welcome to Moyomade's portfolio. Explore projects and skills of a passionate frontend developer."
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
