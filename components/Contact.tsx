import baffle from 'baffle';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userMessage, setUserMessage] = useState('');

	const contactMeRef = useRef(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	const clearForm = () => {
		setUserName('');
		setUserEmail('');
		setUserMessage('');
	};

	const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (
				formRef.current &&
				process.env.NEXT_PUBLIC_SERVICE_ID &&
				process.env.NEXT_PUBLIC_TEMPLATE_ID &&
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			) {
				await emailjs.sendForm(
					process.env.NEXT_PUBLIC_SERVICE_ID,
					process.env.NEXT_PUBLIC_TEMPLATE_ID,
					formRef.current,
					process.env.NEXT_PUBLIC_PUBLIC_KEY
				);
			}

			clearForm();
			alert('Message sent successfully');
		} catch (error) {
			alert('There was an error; please check your inputs and try again');
		}
	};

	useEffect(() => {
		// checks if selected element is viewable in the browser before triggering the effect
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
				}, 500);
			}
		});

		if (contactMeRef.current) {
			observer.observe(contactMeRef.current);
		}
	}, []);

	return (
		<section id='contact'>
			<div className='w-[90%] md:w-3/4 max-w-[900px] mx-auto'>
				<h2 ref={contactMeRef} className='mt-12 mb-4 text-center contact-me'>
					Contact Me
				</h2>

				{/* Socials */}
				<div className='flex flex-col items-center w-full mb-8'>
					<div className='flex justify-between w-3/5 max-w-lg p-4 duration-200 ease-in rounded-lg shadow-lg item-center sm:w-1/2 hover:scale-110'>
						<a
							className='bg-black rounded-full hover:bg-slate-600'
							href='https://www.linkedin.com/in/sean-anih-86a425268/'
							target='_blank'
						>
							<div className='p-3 duration-100 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
								<FaLinkedinIn />
							</div>
						</a>
						<a
							className='bg-black rounded-full hover:bg-slate-600'
							href='https://twitter.com/fullstack_sean'
							target='_blank'
						>
							<div className='p-3 duration-100 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
								<FaTwitter />
							</div>
						</a>
						<a
							className='bg-black rounded-full hover:bg-slate-600'
							href='https://github.com/Seanih'
							target='_blank'
						>
							<div className='p-3 duration-100 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
								<FaGithub />
							</div>
						</a>
					</div>
				</div>

				<form
					ref={formRef}
					className='flex flex-col max-w-[700px] mx-auto p-8 bg-slate-800 rounded-xl text-lg'
					onSubmit={sendEmail}
				>
					<label>Name:</label>
					<input
						type='text'
						name='user_name'
						value={userName}
						className='px-4 py-2 mb-6 text-black rounded-lg'
						onChange={e => setUserName(e.target.value)}
						required
					/>
					<label>Email:</label>
					<input
						type='email'
						name='user_email'
						value={userEmail}
						className='px-4 py-2 mb-6 text-black rounded-lg'
						onChange={e => setUserEmail(e.target.value)}
						required
					/>
					<label>Message:</label>
					<textarea
						name='user_message'
						value={userMessage}
						className='px-4 py-2 mb-6 text-black rounded-lg'
						onChange={e => setUserMessage(e.target.value)}
					/>
					<div className='grid grid-cols-2 gap-6'>
						<button
							type='submit'
							className='py-4 my-4 duration-100 ease-in border rounded-lg bg-slate-700 hover:bg-green-700 hover:text-xl hover:font-bold'
						>
							Send Message
						</button>
						<button
							type='button'
							className='py-4 my-4 duration-100 ease-in border rounded-lg bg-slate-900 hover:bg-red-700 hover:text-xl hover:font-bold'
							onClick={clearForm}
						>
							Clear Form
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
export default Contact;
