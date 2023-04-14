import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function devBlog() {
	return (
		<div className='flex flex-col items-center justify-center w-[90%] sm:w-3/4  max-w-[900px] mx-auto text-white'>
			<Link href={'/'} className='mt-24'>
				<button
					type='button'
					className='h-16 w-36 bg-cyan-700 rounded-xl text-white hover:bg-cyan-600 hover:cursor-pointer hover:underline underline-offset-4 hover:text-lg ease-in duration-100'
				>
					back to main
				</button>
			</Link>
			<h1 className='my-8'>Developer Blog</h1>

			{/* <div className='h-[200px] w-[75%] sm:w-[50%] border'>Video Demo</div> */}
			<Container>
				<div className='ratio ratio-16x9 max-w-[600px] mx-auto'>
					<iframe
						title='Project Demonstration'
						src='https://www.youtube.com/embed/r-9QVXaboIQ'
						allowFullScreen
					></iframe>
				</div>
			</Container>

			<p className='mt-8 max-w-lg text-lg sm:text-xl'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, a cum!
				Soluta consequuntur officia autem libero sapiente nisi, natus ipsa
				perferendis accusamus vero non, quibusdam quod, consequatur rem ullam
				corporis!
			</p>
		</div>
	);
}
export default devBlog;
