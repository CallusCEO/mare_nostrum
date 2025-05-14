import type { Metadata } from 'next';
import { Faculty_Glyphic, Radley } from 'next/font/google';
import '@/styles/globals.css';

const facultyGlyphic = Faculty_Glyphic({
	variable: '--font-faculty-glyphic',
	subsets: ['latin'],
	weight: '400',
});

const radley = Radley({
	variable: '--font-radley',
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Mare Nostrum Project - Sirius S.',
	description:
		'Une exploration comparative des pratiques commerciales grecques et arabes à travers les siècles, mettant en lumière les influences, innovations, navires, routes et échanges qui ont façonné le commerce méditerranéen et oriental.',
	keywords:
		'commerce grec, commerce arabe, Antiquité, routes commerciales, navires antiques, influence grecque, colonisation, dhows, Bagdad, monnaie, innovation commerciale, transmission des savoirs, Méditerranée, mer Noire, expansion islamique',
	authors: [{ name: 'Sirius S.' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr'>
			<body className={` ${facultyGlyphic.variable} ${radley.variable} `}>
				{children}
			</body>
		</html>
	);
}
