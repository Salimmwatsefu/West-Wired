'use client';
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { imageVariants, heroSectionVariants } from "@/utils/motion";



const About = () =>{ 
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  
  return(
  
  <section className=" bg-gray-100">
    <div className="md:pt-14 pt-10  md:flex pb-9 ">
      <div
       className=" md:mt-32 w-[400px] md:ml-28 text-center"
       
       >
        <h1 className="font-bold md:text-4xl text-3xl w-96">All-new Technology</h1>
        <p className="md:mt-9 mt-5 md:text-lg font-medium text-gray-600">News write-ups offer a great way to let clients know about new products and services, events, awards, and more. News write-ups offer a great way to let clients know about new products and services, events, awards, and more.</p>
      </div>

      
      <motion.div 
      className="md:w-[700px] md:h-[600px] md:pl-[200px] w-52 h-52 mx-auto md:mt-0 mt-7"
      initial={false}
        animate={isLoaded && isInView ? "visible" : "hidden"}
        variants={imageVariants}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <Image
        
        src={"https://images.unsplash.com/photo-1600374808258-9b6612195d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNhbXN1bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100"}
      //src = {"https://images.unsplash.com/photo-1632312527375-bd5d5a0d3484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHhib3h8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100"}
        alt="background"
        width={1900}
        height={1900}
        quality={100}
        priority={true}
        className=" object-cover w-[450px] md:h-[500px] h-52  object-center md:rounded-tr-[150px] md:rounded-xl rounded-full"
        onLoad={() => setIsLoaded(true)}

        />
      </motion.div>
    
    </div>
  </section>
);

}

export default About;
