import Image from 'next/image';
import MySelfie from '../public/AI-selfie-compressed.png';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
	return (
		<section id='hero' className='mt-16'>
			<Tilt
				className='parallax-effect w-[80%] md:w-2/3 mx-auto max-w-[800px] border p-4 rounded-2xl bg-gradient-radial sm:bg-gradient-conic from-sky-800 via-black to-cyan-700 pb-8'
				perspective={1000}
			>
				<div className='inner-element sm:text-xl lg:text-2xl'>
					<Image
						className='w-4/5 mx-auto border-t border-white border-x sm:w-3/5 rounded-t-xl'
						src={MySelfie}
						alt='my picture'
					/>
					{/* Name and Occupation */}
					<div className='grid py-4 border-t rounded-xl sm:grid-cols-2 sm:px-8 xs:text-xl'>
						<div className='flex items-end mx-4 mb-4 md:justify-center sm:mb-0'>
							<span className='font-bold'>Name: </span>
							<TypeAnimation
								sequence={['Sean Anih']}
								speed={10}
								cursor={false}
								className='px-2 ml-4 border-b'
							/>
						</div>
						<div className='flex items-end mx-4 md:justify-center'>
							<span className='font-bold'>Occupation: </span>
							<TypeAnimation
								sequence={['', 1000, 'FullStack Developer']}
								speed={11}
								cursor={false}
								className='px-2 ml-4 text-center border-b'
							/>
						</div>
					</div>
					{/* Areas of focus */}
					<div className='flex items-end ml-4 md:mt-4 sm:justify-center rounded-xl sm:px-12 xs:text-xl lg:text-2xl'>
						<span className='font-bold'>
							Area(s) of <span className='block xs:inline'>focus:</span>{' '}
						</span>
						<div className='px-2 ml-4 text-center border-b'>
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
