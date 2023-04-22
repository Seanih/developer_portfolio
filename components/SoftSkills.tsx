import { softSkillsLeft, softSkillsRight } from '../constants/AllMySkills';
import { motion } from 'framer-motion';

function SoftSkills() {
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
		<div
			className={`border bg-gradient-to-bl from-cyan-800 to-black py-8 sm:px-8 text-xl`}
		>
			<div className='flex justify-around'>
				<div className='text-base justify-self-center sm:text-xl'>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='pl-4 list-disc'
					>
						{softSkillsLeft.map((skill, index) => (
							<motion.li key={index} variants={item}>
								{skill}
							</motion.li>
						))}
					</motion.ul>
				</div>
				<div className='text-base justify-self-center sm:text-xl'>
					<motion.ul
						variants={container}
						initial='hidden'
						whileInView='visible'
						className='pl-4 list-disc'
					>
						{softSkillsRight.map((skill, index) => (
							<motion.li key={index} variants={item}>
								{skill}
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</div>
	);
}
export default SoftSkills;
