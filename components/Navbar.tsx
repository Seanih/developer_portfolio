import { TiThMenuOutline, TiTimesOutline } from 'react-icons/ti';
import Link from 'next/link';

interface NavbarProps {
	showMobileNav: boolean;
	setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ showMobileNav, setShowMobileNav }: NavbarProps) {
	return (
		<>
			<nav className='fixed z-[100] w-full bg-black flex justify-between items-center py-6 px-8 max-w-[1500px]'>
				<Link
					className='text-2xl sm:text-3xl white-glow hover:cursor-pointer'
					href='#hero'
					onClick={() => setShowMobileNav(false)}
				>
					Sean Anih
				</Link>

				{/* nav links */}
				<div className='hidden sm:flex text-slate-200 text-xl bg-black'>
					<div className='hover-link hover:text-sky-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 pr-4 border-r'>
						<Link href='/#about'>About</Link>
					</div>
					<div className='hover-link hover:text-cyan-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 px-4 border-x'>
						<Link href={'/#skills'}>Skills</Link>
					</div>
					<div className='hover-link hover:text-blue-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 px-4 border-x'>
						<Link href={'/#projects'}>Projects</Link>
					</div>
					<div className='hover-link hover:text-indigo-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 pl-4 border-l'>
						<Link href={'/#contact'}>Contact</Link>
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
				<ul className='flex gap-8 justify-around text-slate-200'>
					<li className='hover-link hover:cursor-pointer hover:text-sky-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link
							href='/#about'
							scroll={false}
							onClick={() => setShowMobileNav(false)}
						>
							About
						</Link>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-cyan-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link href='/#skills' onClick={() => setShowMobileNav(false)}>
							Skills
						</Link>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-blue-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link href='/#projects' onClick={() => setShowMobileNav(false)}>
							Projects
						</Link>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-indigo-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<Link href='/#contact' onClick={() => setShowMobileNav(false)}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
export default Navbar;
