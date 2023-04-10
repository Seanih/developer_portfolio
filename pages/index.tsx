import About from '@/components/About';
import Hero from '@/components/Hero';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className='flex flex-col items-center'>
			<Head>
				<title>Sean Anih || Developer Portfolio</title>
				<meta name='description' content='My portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main className='relative top-[84px] w-full'>
				<Hero />
				<About />
			</main>
		</div>
	);
}
