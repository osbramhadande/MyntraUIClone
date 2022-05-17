import React from 'react';
import "./Product.css";
import star from '../../images/star.png'
import Details from '../details/Details';
import similar from '../../images/similar.png';

const Product = ({item}) => {

  const handleClick =() => {
    <Details key={item.id} item={item} />
  }

  return (
    <div className='card-container' >
        <div className='card-image' onClick={handleClick}><img src={item.imgscr} alt="" /></div>
        <div className='strip'>4.2 <img src={star} alt=''className='strip-star'/> | 4.7k</div>
        <div className='similar'>
          <img src={similar} />
        </div>
        <div className='card-info'>
          <h4 className='brand-name'>{item.pname}</h4>
          <p className='shirt-type'>{item.product}</p>
          <h4 className='range'>{item.price}</h4>
        </div>
    </div>
  )
}

export default Product;