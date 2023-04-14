import Link from 'next/link';
import { motion } from 'framer-motion';

const technologies = [
	'Next JS | React',
	'Tailwind CSS',
	'PostgreSQL',
	'AWS RDS',
	'Vercel',
];

function DevBlog() {
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
					className='h-16 w-36 bg-cyan-700 rounded-xl text-white hover:bg-cyan-600 hover:cursor-pointer hover:underline underline-offset-4 hover:text-lg ease-in duration-100'
				>
					back to main
				</button>
			</Link>
			<h1 className='my-8'>Developer Blog</h1>

			<div className='ratio ratio-16x9 max-w-[600px] mx-auto'>
				<iframe
					width='350'
					height='195'
					title='Project Demonstration'
					src='https://www.youtube.com/embed/r-9QVXaboIQ'
					allowFullScreen
				></iframe>
			</div>

			<p className='mt-8 max-w-lg text-lg bg-black'>
				This is a{' '}
				<span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-950 via-green-300 to-cyan-600'>
					fully functional blog application
				</span>{' '}
				I built in order to discuss and share programming related topics and
				ideas. The app features{' '}
				<span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-950 via-green-300 to-cyan-600'>
					authentication and authorization
				</span>
				; I can add, edit and delete blog posts while users can sign in,
				comment, and edit or delete their own comments.
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
						className='p-8 list-disc'
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

			<div className='mb-12'>
				<Link href={'/'} className='mt-16 mr-8'>
					<button
						type='button'
						className='h-16 w-36 bg-cyan-700 rounded-xl text-white hover:bg-cyan-600 hover:cursor-pointer hover:underline underline-offset-4 hover:text-lg ease-in duration-100'
					>
						back to main
					</button>
				</Link>
				<Link
					href={'https://github.com/Seanih/my-dev-blog'}
					target='_blank'
					className='mt-16'
				>
					<button
						type='button'
						className='h-16 w-36 bg-sky-800 rounded-xl text-white hover:bg-sky-600 hover:cursor-pointer hover:underline underline-offset-4 hover:text-lg ease-in duration-100'
					>
						Github repo
					</button>
				</Link>
			</div>
		</div>
	);
}
export default DevBlog;
