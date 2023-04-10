import { TiThMenuOutline, TiTimesOutline } from 'react-icons/ti';
import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
	showMobileNav: boolean;
	setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ showMobileNav, setShowMobileNav }: NavbarProps) {
	return (
		<>
			<nav className='fixed z-[100] w-full bg-black/90 flex justify-between items-center py-6 px-8 max-w-[1500px]'>
				<ScrollLink
					className='text-3xl white-glow hover:cursor-pointer'
					to='hero'
					smooth={true}
					duration={500}
					offset={-200}
				>
					Sean Anih
				</ScrollLink>

				{/* nav links */}
				<div className='hidden sm:flex text-white/80 text-xl bg-black'>
					<div className='hover-link hover:text-sky-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 pr-4 border-r'>
						<ScrollLink to='about' smooth={true}>
							About
						</ScrollLink>
					</div>
					<div className='hover-link hover:text-cyan-500 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 px-4 border-x'>
						<Link href={'#'}>Skills</Link>
					</div>
					<div className='hover-link hover:text-blue-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 px-4 border-x'>
						<Link href={'#'}>Projects</Link>
					</div>
					<div className='hover-link hover:text-indigo-400 hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-8 pl-4 border-l'>
						<Link href={'#'}>Contact</Link>
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
						? 'sm:hidden z-[50] fixed border-x border-b border-white w-full bg-black py-8 top-[84px] ease-in-out duration-300'
						: 'sm:hidden z-[50] fixed border-x border-b border-white w-full bg-black py-8 top-[-100%] ease-in-out duration-300'
				}
			>
				<ul className='flex gap-10 px-12 text-2xl text-white/80'>
					<li className='hover-link hover:cursor-pointer hover:text-sky-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<ScrollLink
							to='about'
							smooth={true}
							onClick={() => setShowMobileNav(false)}
						>
							About
						</ScrollLink>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-cyan-500 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<ScrollLink
							to='skills'
							smooth={true}
							onClick={() => setShowMobileNav(false)}
						>
							Skills
						</ScrollLink>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-blue-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<ScrollLink
							to='projects'
							smooth={true}
							onClick={() => setShowMobileNav(false)}
						>
							Projects
						</ScrollLink>
					</li>
					<li className='hover-link hover:cursor-pointer hover:text-indigo-400 hover:underline hover:underline-offset-8 hover:scale-105 decoration-2'>
						<ScrollLink
							to='contact'
							smooth={true}
							onClick={() => setShowMobileNav(false)}
						>
							Contact
						</ScrollLink>
					</li>
				</ul>
			</div>
		</>
	);
}
export default Navbar;
