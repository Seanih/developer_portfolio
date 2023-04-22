import Link from 'next/link';
import { motion } from 'framer-motion';

const technologies = [
	'Next JS | React',
	'NextAuth.js',
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
					className='h-16 text-lg text-white duration-100 ease-in w-36 bg-cyan-700 rounded-xl hover:bg-cyan-600 hover:cursor-pointer hover:underline underline-offset-4 hover:text-xl'
				>
					Back
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

			<p className='max-w-lg mt-8 text-lg text-center bg-black sm:text-left'>
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
				<h3 className='p-8 text-center border bg-gradient-to-br from-sky-800 to-black'>
					Technologies Used
				</h3>
				<div className='bg-gradient-to-br from-cyan-700 to-black'>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='p-8 text-lg list-disc'
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
			<div className='grid grid-cols-3 gap-4 mb-12 text-lg text-center sm:gap-8 sm:text-xl'>
				<Link
					href={'/'}
					className='flex justify-center p-2 text-white bg-cyan-700 rounded-xl hover:bg-cyan-600 hover:cursor-pointer hover:underline underline-offset-4'
				>
					<button type='button'>Back</button>
				</Link>
				<Link
					href={'https://codechronicles.vercel.app/'}
					target='_blank'
					className='flex justify-center p-2 text-white bg-green-800 rounded-xl hover:bg-green-700 hover:cursor-pointer hover:underline underline-offset-4'
				>
					<button type='button'>Visit Site</button>
				</Link>
				<Link
					href={'https://github.com/Seanih/my-dev-blog'}
					target='_blank'
					className='flex justify-center p-2 px-4 text-white bg-sky-800 rounded-xl hover:bg-sky-600 hover:cursor-pointer hover:underline underline-offset-4'
				>
					<button type='button'>Github Repo</button>
				</Link>
			</div>
		</div>
	);
}
export default DevBlog;
