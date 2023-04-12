import { useState } from 'react';
import SoftSkills from './SoftSkills';
import TechStack from './TechStack';

function Skills() {
	const [activeTab, setActiveTab] = useState('tech_stack');

	return (
		<section id='skills'>
			<h2 className='text-center my-8'>Skills</h2>
			<div className='w-[90%] md:w-3/4 max-w-[900px] mx-auto'>
				{/* Headers */}
				<div className='grid grid-cols-2 border'>
					<div
						className={`group w-full text-center border-r hover:bg-sky-900 hover:cursor-pointer ${
							activeTab === 'tech_stack' ? 'bg-sky-900' : 'bg-sky-800'
						}`}
						onClick={() => setActiveTab('tech_stack')}
					>
						<p
							className={`py-4 text-2xl font-bold group-hover:scale-110 duration-100 ease-in ${
								activeTab == 'tech_stack' ? 'underline underline-offset-4' : ''
							}`}
						>
							Tech Stack
						</p>
					</div>
					<div
						className={`group w-full text-center border-l hover:bg-cyan-800 hover:cursor-pointer ${
							activeTab === 'soft_skills' ? 'bg-cyan-800' : 'bg-cyan-700'
						}`}
						onClick={() => setActiveTab('soft_skills')}
					>
						<p
							className={`py-4 text-2xl font-bold group-hover:scale-110 duration-100 ease-in ${
								activeTab == 'soft_skills' ? 'underline underline-offset-4' : ''
							}`}
						>
							Soft Skills
						</p>
					</div>
				</div>

				{/* Listed Skills */}
				{activeTab == 'tech_stack' ? <TechStack /> : <SoftSkills />}
			</div>
		</section>
	);
}
export default Skills;
