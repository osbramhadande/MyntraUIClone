import React from 'react'
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <div className='wrapper'>
      <div className='drop-down-div'>
        <span>Sort by:</span>
        <select defaultChecked={'Recommended'}>
          <option value={"Recommended"}>Recommended</option>
          <option value={'Popularity'}>Popularity</option>
          <option value={'etter Discount'}>Better Discount</option>
          <option value={'Price: From Low to High'}>Price: From Low to High</option>
        </select>
      </div>
    </div>
  )
}

export default Recommendations