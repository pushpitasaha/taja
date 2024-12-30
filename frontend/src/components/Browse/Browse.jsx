import React from 'react'
import './Browse.css'
import { menu_list } from '../../assets/assets'

const Browse = ({category, setCategory}) => {
  return (
    <div className='browse' id='browse'>
      <h1>Find Your Favorites</h1>
      <p className='browse-text'>Get fresh fruits, vegetables, herbs, and rare cultural staples grown in local backyards and shared to sustain traditions and our community.</p>
      <div className='browse-list'>
        {menu_list.map((item, index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='browse-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Browse
