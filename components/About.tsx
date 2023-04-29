/* eslint-disable react/no-unescaped-entities */
function About() {
	return (
		<section
			id='about'
			className='w-[90%] md:w-3/4 mx-auto max-w-[900px] mt-12 text-slate-200'
		>
			<h2 className='mb-8 text-center'>About Me</h2>
			<p className='text-lg bg-black/70'>
				Hey! My name is Sean Anih (pronounced Ah-nee), and I'm a full-stack web
				developer who builds cloud-based and blockchain applications. Currently,
				I'm diving deeper into data structures & algorithms and exploring ways
				to integrate AI into applications so I can{' '}
				<span className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-950 via-green-300 to-cyan-600'>
					help you build products
				</span>{' '}
				that are efficient and competitive. Prior to learning web development, I
				spent 12 years freelancing as an audio engineer while working in the
				mortgage industry for 5 years. My experiences have given me a creative
				perspective on problem-solving and project management that I bring to my
				work as a developer. I'm excited to continue growing as a developer and
				helping you meet your business needs!
			</p>
		</section>
	);
}
export default About;
