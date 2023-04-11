import Image from 'next/image';
import demoPic from '../public/demo-pic.png';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

function Hero() {
	const [animationCompleted, setAnimationCompleted] = useState(false);

	return (
		<section id='hero' className='mt-16'>
			<Tilt
				className='parallax-effect w-[90%] md:w-3/4 mx-auto max-w-[900px] border p-4 rounded-2xl bg-gradient-radial sm:bg-gradient-conic from-sky-800 via-black to-cyan-700 pb-8'
				perspective={1000}
			>
				<div className='inner-element sm:text-xl lg:text-2xl'>
					<Image
						className='border-x border-t border-white w-4/5 sm:w-3/5 mx-auto rounded-t-xl'
						src={demoPic}
						alt='my picture'
					/>
					{/* Name and Occupation */}
					<div className='border-t rounded-xl grid sm:grid-cols-2 py-4 sm:px-8 xs:text-xl'>
						<div className='flex items-end md:justify-center mx-4 mb-4 sm:mb-0'>
							<span className='font-bold'>Name: </span>
							<TypeAnimation
								sequence={['Sean Anih']}
								speed={10}
								cursor={false}
								className='px-2 ml-4 border-b'
							/>
						</div>
						<div className='flex items-end md:justify-center mx-4'>
							<span className='font-bold'>Occupation: </span>
							<TypeAnimation
								sequence={['', 1000, 'Software Engineer']}
								speed={11}
								cursor={false}
								className='px-2 ml-4 border-b text-center'
							/>
						</div>
					</div>
					{/* Areas of focus */}
					<div className='flex items-end md:mt-4 ml-4 sm:justify-center rounded-xl sm:px-12 xs:text-xl lg:text-2xl'>
						<span className='font-bold'>Area(s) of focus: </span>
						<div className='px-2 text-center ml-4 border-b'>
							<TypeAnimation
								sequence={[
									'',
									3000,
									'Web Development',
									1750,
									'Cloud Based Apps',
									1750,
									'Blockchain Apps',
									1750,
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
