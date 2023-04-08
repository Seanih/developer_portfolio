function Navbar() {
	return (
		<nav className='fixed w-full flex justify-around items-center py-6 bg-gradient-to-t from-black'>
			<p className='text-3xl py-2 px-4 white-glow'>Sean Anih</p>

			{/* nav links */}
			<div className='flex gap-6 text-white/90 text-xl bg-black px-4'>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8'>
					Skills
				</div>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8'>
					Projects
				</div>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8'>
					Contact
				</div>
				<div className='hover-link hover:cursor-pointer hover:underline hover: decoration-2 hover:underline-offset-8'>
					About
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
