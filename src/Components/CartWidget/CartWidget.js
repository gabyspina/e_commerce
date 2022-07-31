import React from 'react'
import  {BsCart4} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const {getQuantity} = useContext(CartContext)

  return (
    <div className='cart-icon'>

    {
      <Link to={"/cart"} style={{  border: 'none', marginLeft: 16, marginRight: 24 }} className='link-icon'  >
      <BsCart4 size={30} />
        {
        getQuantity()>0&&<button style={{ backgroundColor: '#2074d4', border: 'none', color:'white' , fontWeight: 'bold', textDecoration: 'none'}}>{getQuantity()}</button>
        }
      </Link>
      }


    </div>
  )
}

export default CartWidget


