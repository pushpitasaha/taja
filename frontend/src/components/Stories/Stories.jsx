import React from 'react'
import './Stories.css'
import { assets } from '../../assets/assets'

const Stories = () => {
  return (
  <div className='container' id='stories'>
      <img src={assets.lau} alt="" className='hero-image'/>
      <div className='stories'>
        <h1>How Taja Began</h1>
        <p>
        This is the story of Lau—yes, the Bengali gourd. Not one or two, but dozens of them.
        <br/>
        <br/>
        It all started last summer when my aunt in Brooklyn began her own garden, not knowing they'd take over her backyard. By winter, as I helped sweep those dead leaves out, four Laus still clung to the top corner of her garden.
        <br/>
        <br/>
        She shared how her harvest turned into daily recipes, deliveries to neighbors, a new freezer stocked for months—and still, there was more!
        <br/>
        <br/>
        Her story inspired Taja: a simple way to ensure no lovingly grown produce goes to waste.
        <br/>
        <br/>
        Growers list surplus produce. Consumers find what they need. That’s it.
        Taja bridges the gap between abundance and need 💚
        </p>
      </div>
    </div>
  )
}

export default Stories
