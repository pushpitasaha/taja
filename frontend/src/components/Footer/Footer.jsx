import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Turn surplus into smiles with a platform that connects homegrown produce to people who truly value it. Fresh, local, and straight from the source.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>TAJA & CO.</h2>
            <ul>
                <li>Home</li>
                <li>Stories</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>REACH OUT</h2>
            <ul>
                <li>+1 (232) 009-0009</li>
                <li>contact@taja.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © Taja & Co. All Rights Reserved. </p>
    </div>
  )
}

export default Footer
