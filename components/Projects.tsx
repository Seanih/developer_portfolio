import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
	const [isFirstClickOnBlog, setIsFirstClickOnBlog] = useState(false);
	const [isFirstClickOnSmart, setIsFirstClickOnSmart] = useState(false);
	const [showBlogModal, setShowBlogModal] = useState(false);
	const [showSmartModal, setShowSmartModal] = useState(false);

	function handleClickBlog() {
		if (!isFirstClickOnBlog) {
			setIsFirstClickOnBlog(true);
		} else {
			setIsFirstClickOnBlog(false);
		}
	}

	function handleClickSmart() {
		if (!isFirstClickOnSmart) {
			setIsFirstClickOnSmart(true);
		} else {
			setIsFirstClickOnSmart(false);
		}
	}

	return (
		<section id='projects' className='w-[90%] md:w-3/4 mx-auto max-w-[900px]'>
			<h2 className={'mt-12 mb-8 text-center'}>FullStack Projects</h2>
			<div className='grid justify-center sm:grid-cols-2'>
				{/* Developr Blog */}
				<div
					className='relative mb-12 border sm:mr-4 sm:mb-0'
					onClick={handleClickBlog}
					onMouseEnter={() => setShowBlogModal(true)}
					onMouseLeave={() => setShowBlogModal(false)}
				>
					<Image
						src={'/dev-blog-pic.png'}
						alt='blog screenshot'
						width={600}
						height={400}
					/>

					{/* Learn More Modal */}
					{(isFirstClickOnBlog || showBlogModal) && (
						<div className='absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-slate-900/70'>
							<h3 className='mb-12 sm:mb-8'>Developer Blog</h3>
							<Link href={'dev-blog'}>
								<motion.button
									type='button'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className='p-4 text-xl font-semibold rounded-lg bg-gradient-to-br from-sky-600 via-green-700 to-cyan-600 hover:from-sky-700 hover:via-green-800 hover:to-cyan-700'
								>
									Learn More
								</motion.button>
							</Link>
						</div>
					)}
				</div>

				{/* Smart Bank */}
				<div
					className='relative border sm:ml-4'
					onClick={() => handleClickSmart()}
					onMouseEnter={() => setShowSmartModal(true)}
					onMouseLeave={() => setShowSmartModal(false)}
				>
					<Image
						src={'/smart-bank-pic.png'}
						alt='DApp screenshot'
						width={600}
						height={400}
					/>

					{/* Learn More Modal */}
					{(isFirstClickOnSmart || showSmartModal) && (
						<div className='absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-slate-900/70'>
							<h3 className='mb-12 sm:mb-8'>Smart Bank</h3>
							<Link href={'/smart-bank'}>
								<motion.button
									type='button'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className='p-4 text-xl font-semibold rounded-lg bg-gradient-to-br from-sky-600 via-green-700 to-cyan-600 hover:from-sky-700 hover:via-green-800 hover:to-cyan-700'
								>
									Learn More
								</motion.button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Projects;
