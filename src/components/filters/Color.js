import React from 'react';
import data from "../../data/colors"

const Color = () => {
  return (
    <div className='division'> 
      <h4>COLOR</h4>
      {
        data.map((item) => <div className='color-div'>
          <input type={'checkbox'} className="large-check"/>
          <div className='circle' style={{backgroundColor: item.color}}></div>
          <span style={{textTransform: 'capitalize', marginLeft:'10px'}} >
            {item.color}
          </span>
        </div>)
      }
    </div>
  )
}

export default Color