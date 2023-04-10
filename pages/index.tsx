import About from '@/components/About';
import Hero from '@/components/Hero';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return (
		<div className='flex flex-col items-center'>
			<Head>
				<title>Sean Anih || Developer Portfolio</title>
				<meta name='description' content='My portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='w-full'>
				<Navbar
					showMobileNav={showMobileNav}
					setShowMobileNav={setShowMobileNav}
				/>
			</header>

			<main
				className='relative top-[84px] w-full'
				onClick={() => setShowMobileNav(false)}
			>
				<Hero />
				<About />
			</main>
		</div>
	);
}
