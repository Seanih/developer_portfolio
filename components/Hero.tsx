import Image from 'next/image';
import demoPic from '../public/demo-pic.png';

function Hero() {
	return (
		<section className='w-[90%] md:w-4/5 mx-auto mt-16 max-w-[1100px]'>
			<div className='border p-4 rounded-2xl bg-gradient-radial sm:bg-gradient-conic from-sky-800 via-black to-cyan-700'>
				<Image
					className='border border-white w-4/5 sm:w-3/5 mx-auto rounded-t-xl'
					src={demoPic}
					alt='my picture'
				/>
				<div className='border grid sm:grid-cols-2 py-4'>
					<div className='flex items-end mx-4 mb-4 sm:mb-0'>
						<span className='md:text-xl'>Name: </span>
						<div className='px-4 text-center ml-4 border-b text-xl md:text-2xl'>
							Sean Anih
						</div>
					</div>
					<div className='flex items-end mx-4'>
						<span className='md:text-xl'>Occupation: </span>
						<div className='px-4 text-center ml-4 border-b text-xl md:text-2xl'>
							Full-Stack Developer
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Hero;
