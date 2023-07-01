'use client';
import Link from "next/link";

export default function Categories() {

  const cards = [
    {
      title: "Headphones and Earbuds",
      description: "High class, high quality phones at affordable prices",
      image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhbXN1bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100",
      link: "/headphones",

    },
    {
      title: "Laptops & Computers",
      description: "Powerful machines for all your computing needs",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=100",
      link: "/laptops",
    },
    {
      title: "Bluetooth Speakers",
      description: "Immersive audiovisual experiences for your home",
      image: "https://images.unsplash.com/photo-1597435877852-97c68cc4d8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2glMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=100",
      link: "/phones",
    }
  ]
  return (
    
    <section className="bg-gray-200">
      <div>
        <h1 className="text-center md:pt-10 md:pb-5 pt-5 text-3xl">Shop by category</h1>

        <div className="mt-8 md:flex gap-16 items-center justify-center ">
  
           {cards.map((card, index) => (  
            <Link key={index} href={card.link}>
          <div key={index} className=" md:w-[250px] mx-7 md:mx-0 bg-white md:ml-14 mb-5    md:rounded-tr-[80px] md:rounded-bl-[80px]">
            <div className="pt-5 px-5">
            <img
            src={card.image}
            alt=""
            className="object-cover w-[500px] h-[200px] rounded-tr-[80px]"
            />

            <h2 className="text-center uppercase font-extrabold text-lg mx-7 mt-3">{card.title}</h2>
            <p className="text-center text-sm pt-3 pb-5">{card.description}</p>
            </div>
          </div>
          </Link>
          
          ))};
      </div>

      <div className="flex items-center justify-center md:mt-12 pb-8">

      <button className=" text-lg font-bold bg-gray-400 text-black rounded-full ml-7 hover:scale-125 duration-500">
              <p className="mx-10 my-3">Shop All</p>
              </button>
              </div>
      </div>
    </section>
  )
}
