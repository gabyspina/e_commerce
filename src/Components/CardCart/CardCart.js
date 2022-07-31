import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Total from '../../Components/Total/Total';
import Button from '@mui/joy/Button';
import { Stack } from '@mui/material';

import { Link } from 'react-router-dom';
import { useCartContext } from '../../Components/CartContext/CartContext';

    

const CardCart = () => {

    const { cart } = useCartContext();

    return (
    <>

    
  {cart.map((producto)=>(
    <Card key={producto.id}
      row
      variant="outlined"
      sx={{
        minWidth: '260px',
        maxWidth: '400px',
        gap: 2,
        bgcolor: 'background.body',
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
            src={producto.img}
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          {producto.name}
        </Typography>
        <Typography level="body2">{`$ ${producto.price} x ${producto.amount} = $${producto.price*producto.amount}` } </Typography >
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs2',
          fontWeight: 'xl2',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >

      </CardOverflow>
    </Card>
    ))}
            <Total  producto = {cart}/>

        <Stack direction= "row" >

          
        <Stack spacing={2} direction="column" size="large">
            <Link to='/food'> 
              <Button variant="contained" color="success" >Seguir Comprando</Button>
            </Link>
        </Stack>

        
        <Stack spacing={2} direction="column" size="large">
            <Link to='/checkout'> 
              <Button variant="contained" color="success" >Finalizar Compra</Button>
            </Link>
        </Stack>


        </Stack>

    </>
  )
}

export default CardCart
