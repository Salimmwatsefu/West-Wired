import React from 'react'
import Hero from '@/components/headphones/Hero'
import Product from '@/components/Product';
import { headphoneProducts } from '@/data/products';

export default function headphones() {
  return (
    <div>
        <Hero/>
        <div className="flex flex-wrap">
      
      {headphoneProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
        
    </div>
  )
}
