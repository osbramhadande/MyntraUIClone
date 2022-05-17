import React from 'react'
import Gender from "./Gender"
import Brands from "./Brands"
import Color  from "./Color"
import Price from "./Price"
import DiscountRange from "./Discountrange"

const Filters = () => {
  return (
    <div className='filters-container'>
        <h4>FILTER</h4>
        <Gender />
        <Brands />
        <Color />
        <Price />
        <DiscountRange />
    </div>
  )
}

export default Filters