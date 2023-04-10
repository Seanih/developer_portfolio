import Image from 'next/image';
import demoPic from '../public/demo-pic.png';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

function Hero() {
	const [animationCompleted, setAnimationCompleted] = useState(false);

	return (
		<section className='mt-16'>
			<Tilt
				className='parallax-effect w-[90%] md:w-3/4 mx-auto max-w-[900px] border p-4 rounded-2xl bg-gradient-radial sm:bg-gradient-conic from-sky-800 via-black to-cyan-700 pb-8'
				perspective={1000}
			>
				<div className='inner-element text-xl md:text-2xl'>
					<Image
						className='border-x border-t border-white w-4/5 sm:w-3/5 mx-auto rounded-t-xl'
						src={demoPic}
						alt='my picture'
					/>
					{/* Name and Occupation */}
					<div className='border-t rounded-xl grid sm:grid-cols-2 py-4 px-8'>
						<div className='flex items-end md:justify-center mx-4 mb-4 sm:mb-0'>
							<span className='font-bold text-xl'>Name: </span>
							<TypeAnimation
								sequence={['Sean Anih']}
								speed={8}
								cursor={false}
								className='px-4 ml-4 border-b'
							/>
						</div>
						<div className='flex items-end md:justify-center mx-4'>
							<span className='font-bold text-xl'>Occupation: </span>
							<TypeAnimation
								sequence={['', 1000, 'FullStack Developer', 9250]}
								speed={9}
								cursor={false}
								repeat={Infinity}
								className='px-4 ml-4 border-b text-center'
							/>
						</div>
					</div>
					{/* Areas of focus */}
					<div className='flex items-end md:mt-4 sm:justify-center rounded-xl px-12'>
						<span className='font-bold text-xl'>Area(s) of focus: </span>
						<div className='px-4 text-center ml-4 border-b'>
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
