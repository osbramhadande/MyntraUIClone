import React from 'react';
import "./NavBar.css"
import Search from './Search';
import Section from './Section';
import profile from "../../images/user.png"
import wishlist from "../../images/wishlist.png"
import bag from "../../images/bag.png"


function NavBar() {
  const sections = ["MEN","WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"]
  return (
    <div className='navbar'>
      <div style={{display: "block"}}>
      <img src={"https://images.indianexpress.com/2021/01/myntra.png"} alt='' className='logo'/>
      </div>
      <div className='sections'>
        {sections.map((section) => <Section name={section} />)}
        <div className='section-item'>STUDIO<div className='new'>NEW</div></div>
      </div>
      <div >
        <Search />
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginLeft: '2em'}}>
        <div className='icons'>
          <img src={profile}  alt=''/>
          <span>Profile</span>
        </div>
        <div className='icons'>
          <img src={wishlist}  alt=''/>
          <span>Wishlist</span>
        </div>
        <div className='icons'>
          <img src={bag}  alt=''/>
          <span>Bag</span>
        </div>
        
      </div>
      
    </div>
  )
}

export default NavBar