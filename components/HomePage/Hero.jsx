'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { heroSectionVariants } from "@/utils/motion";
import Link from "next/link";

const Hero = () => (
  <section >
    <div>

      <div>
        <Image
        src={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100"}
        alt="background"
        width={1900}
        height={1900}
        quality={100}
        priority={true}
        className=" md:object-cover w-[200vh] md:h-[92vh] h-[50vh] object-center object-cover "

        />
<div className="relative ">
        <motion.div
         className="absolute -mt-[250px] md:-mt-[450px] md:ml-32 mx-5 md:text-7xl text-3xl "
         variants={heroSectionVariants}
         initial="hidden"
         animate="visible"
         >
          <p className=" font-light">The Westwired</p>
          <p className=" font-extrabold">The Best Products</p>

          <div className="md:mt-3 mt-5">
            <Link href={'/headphones'}>
            <button
             className=" md:text-lg text-base font-bold bg-black text-white rounded-full md:hover:scale-125 hover:scale-105 duration-500"
             
             >
              <p className="mx-10 my-3 ">Headphones</p>
              </button>
              </Link>

              <button className=" md:text-lg text-base font-bold bg-gray-500 text-black rounded-full md:ml-7 ml-4 md:hover:scale-125 hover:scale-105 duration-500">
              <p className="mx-10 my-3">Laptops</p>
              </button>
          </div>
        </motion.div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
