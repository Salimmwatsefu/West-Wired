import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import Drawer from "./Drawer"; // Import the Drawer component
import ShoppingCart from "./ShoppingCart";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent px-10">
      <div className="md:py-3 py-2 flex">
        <div className="md:ml-10 font-bold uppercase  ml-24  ">
          <Link href={"/"}>
          <p className="text-center  w-28">West Wired</p>
          </Link>
        </div>

        <div className="w-4/5 pl-80 flex items-center justify-center ">
          <ul className="hidden md:flex gap-10 font-semibold">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/headphones"}>
              <li>Headphones</li>
            </Link>
            <Link href={"/laptops"}>
              <li>Laptops</li>
            </Link>
          </ul>

          <div className="md:hidden absolute -ml-[1100px]">
            {isMenuOpen ? (
              <HiX onClick={toggleMenu} className="text-2xl" />
            ) : (
              <HiMenu onClick={toggleMenu} className="text-2xl" />
            )}
          </div>
        </div>

        <div className="md:ml-80 ml-[300px]  absolute md:relative">
          <ShoppingCart />
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-11 right-0 w-full bg-white p-4 z-[900px] ">
            <ul className="flex flex-col gap-1">
              <Link href={"/"}>
                <li className="hover:bg-gray-500 py-1">Home</li>
              </Link>
              <Link href={"/headphones"}>
                <li className="hover:bg-gray-500 py-1">Headphones</li>
              </Link>
              <Link href={"/laptops"}>
                <li className="hover:bg-gray-500 py-1">Laptops</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

