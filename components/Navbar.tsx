import { TiThMenuOutline, TiTimesOutline } from 'react-icons/ti';
import { useState } from 'react';

function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
			<nav className='fixed z-[100] w-full bg-black/80 flex justify-between items-center py-6 px-8 max-w-[1500px]'>
				<p className='text-3xl white-glow'>Sean Anih</p>

				{navOpen ? (
					<TiTimesOutline
						onClick={() => setNavOpen(!navOpen)}
						className='sm:hidden scale-[2.75] hover:cursor-pointer'
					/>
				) : (
					<TiThMenuOutline
						onClick={() => setNavOpen(!navOpen)}
						className='sm:hidden scale-[2] hover:cursor-pointer'
					/>
				)}
				{/* nav links */}
				<div className='hidden sm:flex text-white/80 text-xl bg-black'>
					<div className='hover-link hover:text-sky-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 pr-4 border-r'>
						About
					</div>
					<div className='hover-link hover:text-cyan-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 px-4 border-x'>
						Skills
					</div>
					<div className='hover-link hover:text-blue-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 px-4 border-x'>
						Projects
					</div>
					<div className='hover-link hover:text-indigo-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 pl-4 border-l'>
						Contact
					</div>
				</div>
			</nav>
			{/* mobile menu */}
			<div
				className={
					navOpen
						? 'sm:hidden z-[50] fixed border-x border-b border-white w-full bg-black py-8 top-[84px] ease-in-out duration-300'
						: 'sm:hidden z-[50] fixed border-x border-b border-white w-full bg-black py-8 top-[-100%] ease-in-out duration-300'
				}
			>
				<ul className='flex gap-10 px-12 text-2xl'>
					<li className='hover-link hover:cursor-pointer hover:text-sky-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						About
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-cyan-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						Skills
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-blue-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						Projects
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-indigo-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						Contact
					</li>
				</ul>
			</div>
		</>
	);
}
export default Navbar;
