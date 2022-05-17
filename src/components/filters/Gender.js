import React from 'react'
import "./filters.css"

const Gender = () => {
  return (
    <div className='division'>
      <input type={'radio'} className="large-check"/><label className='gender-label'>Men</label><br/>
      <input type={'radio'} className="large-check"/><label className='gender-label'>Women</label><br/>
      <input type={'radio'} className="large-check"/><label className='gender-label'>Boys</label><br/>
      <input type={'radio'} className="large-check"/><label className='gender-label'>Girls</label><br/>
    </div>
  )
}

export default Gender;