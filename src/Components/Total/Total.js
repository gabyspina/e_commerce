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
      <Typography variant="h6" sx={{ fontWeight: 'bold',
        textAlign: 'left',
        mb: 2,
        mt: 2,
        width: '20%',
        color: 'success.plainColor' ,
        backgroundColor: '#D6DBDF',
        borderRadius: '5px',
        border: '1px solid',
    }}>
          Total de Compra: {accounting.formatMoney(total, '$', 2, '.', ',')}
      </Typography>
    </>

  )
}



export default Total
