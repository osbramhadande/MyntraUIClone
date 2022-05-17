import React from 'react'
import data from "../../data/brands.js"
import './filters.css'

const Brands = () => {
  return (
    <div className='division'>
      <h4>BRANDS</h4>
      {
        data.map((item) => <div>
          <input type={'checkbox'} className='large-check'/>
          <span>{item.brand}</span>
        </div>)
      }
    </div>
  )
}

export default Brands