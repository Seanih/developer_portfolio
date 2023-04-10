/* eslint-disable react/no-unescaped-entities */
function About() {
	return (
		<section
			id='about'
			className='w-[90%] md:w-3/4 mx-auto max-w-[900px] mt-12'
		>
			<h2 className='mb-8 text-center'>About Me</h2>
			<p className='bg-black/70 text-lg'>
				Hey! My name is Sean Anih (pronounced Ah-nee), and I'm a web developer
				who focuses on building cloud-based and blockchain applications. I enjoy
				learning and experimenting to help improve my skills. Currently, I'm
				diving deeper into data structures & algorithms and exploring ways to
				integrate AI into applications to{' '}
				<span className='text-sky-400 font-bold'>help you build products</span>{' '}
				that are scalable with a competitive edge. Prior to learning web
				development, I spent 11 years freelancing as an audio engineer in
				addition to working in the mortgage industry for 5 of those years. These
				experiences have given me a unique perspective on problem-solving and
				project management that I bring to my work as a developer. I'm excited
				to continue growing as a developer and helping you meet your business
				needs!
			</p>
		</section>
	);
}
export default About;
