import { TiThMenuOutline, TiTimesOutline } from 'react-icons/ti';
import { Link } from 'react-scroll';

interface NavbarProps {
	showMobileNav: boolean;
	setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ showMobileNav, setShowMobileNav }: NavbarProps) {
	return (
		<>
			<nav className='fixed z-[100] w-full bg-black/90 flex justify-between items-center py-6 px-12 max-w-[1500px]'>
				<Link
					className='text-2xl sm:text-3xl white-glow hover:cursor-pointer'
					to='hero'
					offset={-100}
					onClick={() => setShowMobileNav(false)}
				>
					Sean Anih
				</Link>

				{/* nav links */}
				<div className='hidden text-xl bg-black sm:flex text-slate-200'>
					<div className='pr-4 border-r hover-link hover:text-sky-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8'>
						<Link to='about' offset={-100}>
							About
						</Link>
					</div>
					<div className='px-4 hover-link hover:text-cyan-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 border-x'>
						<Link to='skills' offset={-100}>
							Skills
						</Link>
					</div>
					<div className='px-4 hover-link hover:text-blue-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 border-x'>
						<Link to='projects' offset={-100}>
							Projects
						</Link>
					</div>
					<div className='pl-4 border-l hover-link hover:text-indigo-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8'>
						<Link to='contact' offset={-100}>
							Contact
						</Link>
					</div>
				</div>

				{/* Mobile Nav Icons */}
				{showMobileNav ? (
					<TiTimesOutline
						onClick={() => setShowMobileNav(!showMobileNav)}
						className='sm:hidden scale-[2.75] hover:cursor-pointer'
					/>
				) : (
					<TiThMenuOutline
						onClick={() => setShowMobileNav(!showMobileNav)}
						className='sm:hidden scale-[2] hover:cursor-pointer'
					/>
				)}
			</nav>

			{/* mobile menu */}
			<div
				className={
					showMobileNav
						? 'sm:hidden z-[50] fixed border-x border-b border-white w-full bg-black py-8 top-[80px] ease-in-out duration-300'
						: 'sm:hidden z-[50] fixed border-x border-b border-white w-full bg-black py-8 top-[-100%] ease-in-out duration-300'
				}
			>
				<ul className='flex justify-around text-xl text-slate-200'>
					<li className='hover-link hover:cursor-pointer hover:text-sky-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link
							to='about'
							offset={-100}
							onClick={() => setShowMobileNav(false)}
						>
							About
						</Link>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-cyan-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link
							to='skills'
							offset={-100}
							onClick={() => setShowMobileNav(false)}
						>
							Skills
						</Link>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-blue-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link
							to='projects'
							offset={-100}
							onClick={() => setShowMobileNav(false)}
						>
							Projects
						</Link>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-indigo-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link
							to='contact'
							offset={-100}
							onClick={() => setShowMobileNav(false)}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
export default Navbar;
