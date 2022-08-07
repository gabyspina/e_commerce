import React from 'react'
import './NavCategory.css'

import { Link } from 'react-router-dom'

const NavCategory = () => {
  return (
    <nav className='nav-category'>
      <ul>
        <Link className='li' to='/category/perro'>Perro</Link>
        <Link className='li' to='/category/gato'>Gatos</Link>
        <Link className='li' to='/category/accesorio'>Accesorios</Link>



      </ul>


    </nav>
  )
}

export default NavCategory
