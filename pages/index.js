import Product from "@/components/Product";
import { products } from "@/data/products";
import { About, Categories, Hero } from "@/components/HomePage";

export default function Home() {
  return (
    <div className=" ">

      <Hero/>
      <About/>
      <Categories/>
    
    </div>
  );
}
