import React from 'react'
import { fetchSearchedProducts } from '../../redux/actions/product';
import Product from './Product';

const SearchedProductList = () => {
    const data = fetchSearchedProducts;
  return (
    <div className='productlist-wrapper'>
      {data.map((item) => <Product key={item.id} item ={item}/>)}
    </div>  )
}

export default SearchedProductList;