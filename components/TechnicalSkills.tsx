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
		<div className='py-8 text-xl border bg-gradient-to-br from-sky-900 to-black sm:px-8'>
			<div className='flex justify-around'>
				<div className='text-base justify-self-center sm:text-xl'>
					<span className='underline underline-offset-8'>
						Languages/Frameworks
					</span>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='pl-4 mt-4 list-disc'
					>
						{languages.map((language, index) => (
							<motion.li key={index} variants={item}>
								{language}
							</motion.li>
						))}
					</motion.ul>
				</div>
				<div className='text-base justify-self-center sm:text-xl'>
					<span className='underline underline-offset-8'>Dev Tools</span>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='pl-4 mt-4 list-disc'
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
