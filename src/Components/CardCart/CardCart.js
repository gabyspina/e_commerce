import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Total from '../../Components/Total/Total';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

import { Link } from 'react-router-dom';
import { useCartContext } from '../../Components/CartContext/CartContext';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
    

const CardCart = () => {

    const { cart, removeItem } = useCartContext();

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

        <DeleteForeverTwoToneIcon onClick={()=> removeItem(producto.id)}/>
         

    </Card>
    ))}
            <Total  producto = {cart}/>

        <Stack direction= "row" spacing={5} >

          
        <Stack spacing={2} direction="column" size="large"  > 
            
        <Button variant="contained" color="success" ><Link to='/food'
            style={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold'
            }}
            > 
              Seguir Comprando
            </Link>
        </Button>
        </Stack>

        <Stack spacing={2} direction="column" size="large">
            
              <Button variant="contained" color="success"  ><Link style={{

                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold'
              }} to='/checkout' > Finalizar Compra </Link></Button>
            
        </Stack>


        </Stack>

    </>
  )
}

export default CardCart
