import React from 'react'
import Product from './Product'
//import data from '../../data/shirts.js'

const ProductList = ({products}) => {
  const data = products;
  return (
    <div className='productlist-wrapper'>
      {data.map((item) => <Product key={item.id} item ={item}/>)}
    </div>
  )
}

export default ProductList