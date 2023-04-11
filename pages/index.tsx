import About from '@/components/About';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
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
				className='relative top-[84px] w-full pb-8'
				onClick={() => setShowMobileNav(false)}
			>
				<Hero />
				<About />
				<Skills />
			</main>
		</div>
	);
}
