import React from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import { Link } from 'react-router-dom';
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const {getQuantity} = useContext(CartContext)

  return (
    <div className='cart-icon'>

    {
      <Link to={"/cart"} className='link-icon'  >
      <ShoppingCartTwoToneIcon size={30} />
        {
        getQuantity()>0&&<button style={{ backgroundColor: '#2074d4', border: 'none', color:'black' , fontWeight: 'bold', textDecoration:'none'}}>{getQuantity()}</button>
        }
      </Link>
      }


    </div>
  )
}

export default CartWidget


