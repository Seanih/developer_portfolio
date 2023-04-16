import baffle from 'baffle';
import { useEffect, useRef } from 'react';

function Contact() {
	const ref = useRef(null);

	useEffect(() => {
		// checks if selected element is viewable in the browser
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				const target = baffle('.contact-me');
				target.set({
					characters: '░P░h░a░n░t░o░m░',
					speed: 50,
				});
				setTimeout(function () {
					target.start();
					target.reveal(750, 750);
				}, 1000);
			}
		});

		if (ref.current) {
			observer.observe(ref.current);
		}
	}, []);

	return (
		<section id='contact'>
			<div className='w-[90%] md:w-3/4 max-w-[900px] mx-auto'>
				<h2 ref={ref} className='contact-me mt-12 mb-8 text-center'>
					Contact Me
				</h2>
			</div>
		</section>
	);
}
export default Contact;
