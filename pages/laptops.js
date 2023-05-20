import React from 'react'
import { laptopProducts } from '@/data/products'
import Product from '@/components/Product'
import Hero from '@/components/laptops/Hero'

export default function laptops() {
  return (
    <div>
      <Hero/>
        <div className="flex flex-wrap">
      
      {laptopProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
    </div>
  )
}
