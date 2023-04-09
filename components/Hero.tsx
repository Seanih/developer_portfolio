import Image from 'next/image';
import demoPic from '../public/demo-pic.png';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
	return (
		<section className='w-[90%] md:w-4/5 mx-auto mt-16'>
			<Tilt
				className='parallax-effect mx-auto max-w-[1000px] border p-4 rounded-2xl bg-gradient-radial sm:bg-gradient-conic from-sky-800 via-black to-cyan-700 pb-8'
				perspective={1000}
			>
				<div className='inner-element'>
					<Image
						className='border-x border-t border-white w-4/5 sm:w-3/5 mx-auto rounded-t-xl'
						src={demoPic}
						alt='my picture'
					/>
					{/* Name and Occupation */}
					<div className='border-t rounded-xl grid sm:grid-cols-2 py-4 px-8'>
						<div className='flex items-end md:justify-center mx-4 mb-4 sm:mb-0'>
							<span className='text-xl font-bold'>Name: </span>
							<div className='px-4 ml-4 border-b text-xl md:text-2xl'>
								Sean Anih
							</div>
						</div>
						<div className='flex items-end md:justify-center mx-4'>
							<span className='text-xl font-bold'>Occupation: </span>
							<div className='px-4 ml-4 border-b text-xl md:text-2xl text-center'>
								Full-Stack Developer
							</div>
						</div>
					</div>
					{/* Areas of focus */}
					<div className='flex items-end md:mt-4 sm:justify-center rounded-xl px-12'>
						<span className='text-xl font-bold'>Area(s) of focus: </span>
						<div className='px-4 text-center ml-4 border-b text-xl md:text-2xl'>
							<TypeAnimation
								sequence={[
									'Web Development',
									2000,
									'Cloud Based Apps',
									2000,
									'Blockchain Apps',
									2000,
								]}
								repeat={Infinity}
							/>
						</div>
					</div>
				</div>
			</Tilt>
		</section>
	);
}
export default Hero;
