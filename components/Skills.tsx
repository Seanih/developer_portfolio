import { useState } from 'react';
import SoftSkills from './SoftSkills';
import HardSkills from './HardSkills';
import { motion, useScroll, useTransform } from 'framer-motion';

function Skills() {
	const [activeTab, setActiveTab] = useState('tech_stack');

	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

	return (
		<motion.section style={{ scale }} id='skills'>
			<h2 className='text-center my-8'>My Skills</h2>
			<motion.div
				style={{
					scaleY: scrollYProgress,
				}}
				className='w-[90%] md:w-3/4 max-w-[900px] mx-auto'
			>
				{/* Headers */}
				<div>
					<p
						className={`w-full text-center border bg-sky-800 hover:bg-sky-900 py-4 text-2xl font-bold`}
					>
						Hard
					</p>
					<HardSkills />
					<p
						className={`w-full text-center border bg-cyan-700 hover:bg-cyan-800 py-4 text-2xl font-bold`}
					>
						Soft
					</p>
					<SoftSkills />
				</div>
			</motion.div>
		</motion.section>
	);
}
export default Skills;
