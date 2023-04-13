import { useState } from 'react';

function Projects() {
	// set the initial state of the modal to be hidden
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	// function to toggle the state of the modal
	const handleToggleModal = (index: number | null) => {
		setHoveredIndex(index);
	};

	return (
		<section id='projects' className='w-[90%] md:w-3/4 mx-auto max-w-[900px]'>
			<h2 className='mt-12 mb-8 text-center'>FullStack Projects</h2>
			<div className='flex justify-center'>
				<div
					className='mr-12 border'
					onMouseEnter={() => handleToggleModal(0)}
					onMouseLeave={() => handleToggleModal(null)}
				>
					<div>Image</div>
					{hoveredIndex === 0 && <div className='modal'>Learn More modal</div>}
				</div>
				<div
					className='ml-12 border'
					onMouseEnter={() => handleToggleModal(1)}
					onMouseLeave={() => handleToggleModal(null)}
				>
					<div>Image</div>
					{hoveredIndex === 1 && <div className='modal'>Learn More modal</div>}
				</div>
			</div>
		</section>
	);
}

export default Projects;
