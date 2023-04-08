function Navbar() {
	return (
		<nav className='fixed z-[100] w-full flex justify-between items-center py-6 bg-gradient-to-t from-black px-8 max-w-[1500px]'>
			<p className='text-3xl white-glow'>Sean Anih</p>

			{/* nav links */}
			<div className='flex text-white/90 text-xl bg-black'>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 px-4 border-r'>
					Skills
				</div>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 px-4 border-x'>
					Projects
				</div>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 px-4 border-x'>
					Contact
				</div>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8 px-4 border-l'>
					About
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
