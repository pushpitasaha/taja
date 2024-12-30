import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    
    const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <Link to='/' ><img src={assets.logo} alt="logo of Taja" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick = {()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href="#browse" onClick = {()=>setMenu("browse")} className={menu==="browse"?"active":""}>browse</a>
        <a href="#stories" onClick = {()=>setMenu("stories")} className={menu==="stories"?"active":""}>stories</a>
        <a href="#footer" onClick = {()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
        </div>
        <button onClick = {()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
