import { motion } from 'framer-motion';
import { languages, devTools } from '../constants/AllMySkills';

function TechnicalSkills() {
	// Framer Motion attributes
	const container = {
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: 'afterChildren',
			},
		},
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<div className='border bg-gradient-to-br from-sky-900 to-black py-8 sm:px-8 text-xl'>
			<div className='flex justify-around'>
				<div className='justify-self-center text-base sm:text-xl'>
					<span className='underline underline-offset-8'>
						Languages/Frameworks
					</span>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='mt-4 pl-4 list-disc'
					>
						{languages.map((language, index) => (
							<motion.li key={index} variants={item}>
								{language}
							</motion.li>
						))}
					</motion.ul>
				</div>
				<div className='justify-self-center text-base sm:text-xl'>
					<span className='underline underline-offset-8'>Dev Tools</span>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='mt-4 pl-4 list-disc'
					>
						{devTools.map((tool, index) => (
							<motion.li key={index} variants={item}>
								{tool}
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</div>
	);
}
export default TechnicalSkills;
