
import React from 'react'
import { motion } from 'framer-motion'
import { heroSectionVariants } from '@/utils/motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className=' '>
        <div>

<div className=''>
  <Image
  //src={"https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1900&q=100"}
  //src={"https://images.unsplash.com/photo-1584582835835-c483999a7ae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=100"}
  src={"https://images.unsplash.com/photo-1607445996476-0480fc8744ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100"}
  alt="background"
  width={1900}
  height={1900}
  quality={100}
  priority={true}
  className=" md:h-[70vh] h-[40vh] object-cover inset-0 bg-white/75"

  />

<div className="hidden sm:block absolute md:h-[70vh] h-[40vh] mt-12 inset-0 bg-black opacity-30"></div>
  
<div className="relative bg-black md:bg-transparent">
  <motion.div
   className="  md:-mt-[300px] md:ml-14 mx-5 md:text-3xl text-2xl text-white"
   variants={heroSectionVariants}
   initial="hidden"
   animate="visible"
   >
    <p style={{ fontWeight: '1000'}} className='tracking-wide md:tracking-wider pt-5 md:pt-0'>BLUETOOTH® HEADPHONES &</p>
    
    <p className=" font-extrabold tracking-wider">EARBUDS</p>

    <div className="md:mt-3 mt-5 text-lg tracking-wider pb-5">
        <p>Go handsfree on your busiest days</p>
      
    </div>
  </motion.div>
  </div>
</div>
<div>
    <h1 className='text-center md:mt-52 mt-24 font-black text-3xl tracking-[0.3em]'>PRODUCTS</h1>
    <p className='text-center mt-5 text-lg'>Free 2-day shipping for orders of $50 or more | Free return shipping | 90-day risk-free trial* | Free support</p>
</div>

</div>
    </div>
  )
}
