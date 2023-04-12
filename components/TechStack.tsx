function TechStack() {
	return (
		<div className='border bg-gradient-to-br from-sky-900 to-black py-8 sm:px-8 text-xl'>
			<div className='grid grid-cols-2'>
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
	);
}
export default TechStack;
