import SoftSkills from './SoftSkills';
import HardSkills from './HardSkills';

function Skills() {
	return (
		<section id='skills'>
			<h2 className='text-center my-8'>My Skills</h2>
			<div className='w-[90%] md:w-3/4 max-w-[900px] mx-auto'>
				<div>
					<h3
						className={`w-full text-center border bg-sky-800 hover:bg-sky-900 py-4 font-bold`}
					>
						Hard
					</h3>

					<HardSkills />

					<h3
						className={`w-full text-center border bg-cyan-700 hover:bg-cyan-800 py-4 font-bold`}
					>
						Soft
					</h3>
					<SoftSkills />
				</div>
			</div>
		</section>
	);
}
export default Skills;
