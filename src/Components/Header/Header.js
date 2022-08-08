import React from 'react'
import logo  from '../assets/logo-pet-modificado.ico'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

return (

    <header className='App-section'>
    <div>
        <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
        </Link>
    </div>

    <Link to="/" style={{
            textDecoration: 'none',
        }}>
        <div className='App-titulos'>
        
        
                <h1>Pet Shop</h1>
        
        </div>
    </Link>    
    </header>
    )
}

export default Header
