import { Badge } from '@mui/material';
import React from 'react'
import  {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {



  return (
    <div className='cart-icon'>
{    
    <Badge badgeContent={2} color="error">

        <Link to='/cart' className='link-icon'>
            <BsCart4 size={30} />
        </Link>

    </Badge>
}
    </div>
  )
}

export default CartWidget


