import React from 'react'
import accounting from 'accounting'
import { useCartContext } from '../../Components/CartContext/CartContext';
import Typography from '@mui/joy/Typography';

const Total = () => {

  const { cart} = useCartContext();

  const total = cart.reduce((acc, producto) => {
    return acc + (producto.price * producto.amount)
  }
  , 0)


  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Total de Compra: {accounting.formatMoney(total, '$', 2, '.', ',')}
      </Typography>
    </>

  )
}



export default Total
