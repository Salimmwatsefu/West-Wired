import React from "react";

const Drawer = ({ children, isOpen, onCartIconClick }) => {
	return (
		<div className='relative'>
			<div
				className={`fixed top-0 right-0 h-full w-80 md:w-[500px] bg-gray-900 text-white transition duration-700 ease-in-out transform z-50 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : ""}` }}
			>
				<aside className='h-full overflow-y-auto'>
					
					<main className='bg-white p-4 text-black'>{children}</main>
				</aside>
			</div>
		</div>
	);
};

export default Drawer;
