import Link from 'next/link';

function smartBank() {
	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			<Link href={'/'}>
				<button type='button' className='p-4 bg-cyan-700 rounded-xl'>
					back to main
				</button>
			</Link>
			Smart Bank Page
		</div>
	);
}
export default smartBank;
