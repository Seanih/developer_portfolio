import Link from 'next/link';
import { motion } from 'framer-motion';

const technologies = [
	'Next JS | React',
	'Solidity',
	'Hardhat',
	'Ethers JS',
	'Tailwind CSS',
	'NextAuth.js',
	'MongoDB',
	'Vercel',
];

function SmartBank() {
	// Framer Motion attributes
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<div className='flex flex-col items-center justify-center w-[90%] sm:w-3/4  max-w-[900px] mx-auto text-white'>
			<Link href={'/'} className='mt-16'>
				<button
					type='button'
					className='h-16 w-36 bg-cyan-700 rounded-xl text-white text-lg hover:bg-cyan-600 hover:cursor-pointer hover:underline underline-offset-4 hover:text-xl ease-in duration-100'
				>
					Back
				</button>
			</Link>
			<h1 className='my-8'>Smart Bank</h1>

			<div className='ratio ratio-16x9 max-w-[600px] mx-auto'>
				<iframe
					width='350'
					height='195'
					title='Project Demonstration'
					src='https://www.youtube.com/embed/r-9QVXaboIQ'
					allowFullScreen
				></iframe>
			</div>

			<p className='mt-8 max-w-lg text-lg text-center sm:text-left bg-black'>
				This is a fully functional{' '}
				<span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-950 via-green-300 to-cyan-600'>
					DApp (decentralized application)
				</span>{' '}
				showing how wallets and native tokens (in this case Ethereum) interact
				with smart contracts. The DApp features{' '}
				<span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-950 via-green-300 to-cyan-600'>
					authentication and authorization
				</span>
				; users can sign in and deposit, transfer or withdraw tokens from the
				smart contract. Users can also view the entire history of their
				transactions with the smart contract. Each unique wallet address that
				signs in to the DApp is saved to a MongoDB database.
			</p>

			{/* Tech Stack */}
			<div className='my-8 border'>
				<h3 className='border p-8 text-center bg-gradient-to-br from-sky-800 to-black'>
					Technologies Used
				</h3>
				<div className='bg-gradient-to-br from-cyan-700 to-black'>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='p-8 list-disc text-lg'
					>
						{technologies.map((tech, index) => (
							<motion.li
								key={index}
								variants={item}
								className='my-4 first:my-0 last:my-0'
							>
								{tech}
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>

			{/* Links */}
			<div className='grid grid-cols-3 gap-4 sm:gap-8 mb-12 text-center text-lg sm:text-xl'>
				<Link
					href={'/'}
					className='p-2 bg-cyan-700 rounded-xl text-white hover:bg-cyan-600 hover:cursor-pointer hover:underline underline-offset-4 flex justify-center'
				>
					<button type='button' className=''>
						Back
					</button>
				</Link>
				<Link
					href={'https://smartbankweb3.vercel.app/'}
					target='_blank'
					className='p-2 bg-green-800 rounded-xl text-white hover:bg-green-700 hover:cursor-pointer hover:underline underline-offset-4 flex justify-center'
				>
					<button type='button'>Visit Site</button>
				</Link>
				<Link
					href={'https://github.com/Seanih/smart_bank'}
					target='_blank'
					className='p-2 bg-sky-800 rounded-xl text-white hover:bg-sky-600 hover:cursor-pointer hover:underline underline-offset-4 flex justify-center'
				>
					<button type='button'>Github Repo</button>
				</Link>
			</div>
		</div>
	);
}
export default SmartBank;
