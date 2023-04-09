import { TiThMenuOutline } from 'react-icons/ti';

function Navbar() {
	return (
		<nav className='fixed z-[100] w-full bg-black/80 flex justify-between items-center py-6 px-8 max-w-[1500px]'>
			<p className='text-3xl white-glow'>Sean Anih</p>

			<TiThMenuOutline className='sm:hidden scale-[2]' />
			{/* nav links */}
			<div className='hidden sm:flex text-white/80 text-xl bg-black'>
				<div className='hover-link hover:text-sky-500 hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 pr-4 border-r'>
					Skills
				</div>
				<div className='hover-link hover:text-cyan-500 hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 px-4 border-x'>
					Projects
				</div>
				<div className='hover-link hover:text-blue-400 hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 px-4 border-x'>
					Contact
				</div>
				<div className='hover-link hover:text-indigo-400 hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 pl-4 border-l'>
					About
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
