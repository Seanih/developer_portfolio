import Link from 'next/link';

function devBlog() {
	return (
		<div className='h-screen flex flex-col items-center justify-center w-[90%] sm:w-3/4 mx-auto'>
			<Link href={'/'}>
				<button
					type='button'
					className='p-4 bg-cyan-700 rounded-xl hover:bg-cyan-800 hover:cursor-pointer'
				>
					back to main
				</button>
			</Link>
			<h1 className='my-12'>Developer Blog</h1>
			<div className='h-[200px] w-[75%] sm:w-[50%] border'>Video Demo</div>
			<p className='mt-8'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, a cum!
				Soluta consequuntur officia autem libero sapiente nisi, natus ipsa
				perferendis accusamus vero non, quibusdam quod, consequatur rem ullam
				corporis!
			</p>
		</div>
	);
}
export default devBlog;
