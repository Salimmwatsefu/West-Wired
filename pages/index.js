import Product from "@/components/Product";
import { products } from "@/data/products";
import { About, Categories, Hero } from "@/components/HomePage";

export default function Home() {
  return (
    <div className="!max-w-[410px] md:max-w-full ">

      <Hero/>
      <About/>
      <Categories/>
    
    </div>
  );
}
