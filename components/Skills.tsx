import { useState } from 'react';

function Skills() {
	const [activeTab, setActiveTab] = useState('tech_stack');

	return (
		<section id='skills'>
			<h2 className='text-center my-8'>Skills</h2>
			<div className='w-[90%] md:w-3/4 max-w-[900px] mx-auto'>
				{/* Headers */}
				<div className='grid grid-cols-2 border'>
					<div
						className='w-full text-center border-r bg-sky-800 hover:bg-sky-900 hover:cursor-pointer'
						onClick={() => setActiveTab('tech_stack')}
					>
						<h3 className='py-4'>Tech Stack</h3>
					</div>
					<div
						className='w-full text-center border-l bg-cyan-700 hover:bg-cyan-800 hover:cursor-pointer'
						onClick={() => setActiveTab('soft_skills')}
					>
						<h3 className='py-4'>Soft Skills</h3>
					</div>
				</div>

				{/* Listed Skills */}
				{activeTab == 'tech_stack' ? (
					<div className='border bg-gradient-to-br from-sky-900 to-black py-8 px-4 sm:px-8 text-xl'>
						<div className='flex justify-around'>
							<div className='justify-self-center text-base sm:text-xl'>
								<span className='underline underline-offset-8'>
									Languages/Frameworks
								</span>
								<ul className='mt-4 pl-4 list-disc'>
									<li>Javascript | Typescript</li>
									<li>React | Next JS</li>
									<li>Solidity</li>
									<li>SQL (Postgres & MySQL)</li>
									<li>NoSQL (MongoDB)</li>
								</ul>
							</div>
							<div className='justify-self-center text-base sm:text-xl'>
								<span className='underline underline-offset-8'>Dev Tools</span>
								<ul className='mt-4 pl-4 list-disc'>
									<li>VS Code</li>
									<li>Git | Github</li>
									<li>AWS RDS</li>
									<li>Hardhat</li>
									<li>Vercel</li>
								</ul>
							</div>
						</div>
					</div>
				) : (
					<div className='border bg-gradient-to-bl from-cyan-800 to-black p-8 text-xl'>
						Soft Skills
					</div>
				)}
			</div>
		</section>
	);
}
export default Skills;
