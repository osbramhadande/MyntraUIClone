import React from 'react'

function Section({name}) {
  return (
    <div className='section-item' style={{borderColor: 'red'}}>{name}</div>
  )
}

export default Section;