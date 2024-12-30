import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Picked with care, delivered to {' '}
            <i style={{ fontStyle: 'italic', textDecoration: 'wavy underline', textDecorationColor: 'white' }}>share</i></h2>
        <p>Here at Taja, you will find fresh homegrown produce, locally sourced with you in mind.</p>
        <button>Shop</button>
      </div>
    </div>
  )
}

export default Header
