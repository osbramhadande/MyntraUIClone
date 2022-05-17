import React, { useState } from 'react'
import "./NavBar.css"
import image from "../../images/searchIcon.png";
import {fetchSearchedProducts} from '../../redux/actions/product'
import {useDispatch} from "react-redux"

function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    dispatch(fetchSearchedProducts(input));
  }

  return (
    <div className='searchDiv'>
        <img src={image} className="search-icon" onClick={handleClick}/>  
        <input type={"text"} placeholder="Search for products, brands & more." className='search-box' value={input} onChange={handleChange}/>
    </div>
  )
}

export default Search;