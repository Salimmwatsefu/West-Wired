'use client'
import { useEffect, useState } from "react"

import Navbar from "./NavBar"
import Drawer from "./Drawer"
import ShoppingCart from "./ShoppingCart"



export default function NavCart() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const handleCartIconClick = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	return (
		<>
			<Navbar onCartIconClick={handleCartIconClick} />
			<Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
				<ShoppingCart/>
			</Drawer>
			
		</>
	)
}