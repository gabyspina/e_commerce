import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
export default function CardDetail({item}) {

  const { cart, setCart, addItem} = useCartContext();

  const addToCart = (amount) => {
    setCart([...cart, item]);
    console.log('agregados al carro',cart);
    addItem(item, amount);

  }


  return (
    
    <Card
      variant="outlined"
      row
      sx={{
        minWidth: '320px',
        maxWidth: '100%',
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: '100%' }}>
        <img
          src={item.img}
          alt=""
        />
      </AspectRatio>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            {item.name} 
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Typography
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: 'text.tertiary' }}
            >
              {item.detail}
            </Typography>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: 'none' }}
          >
            $ {item.price}


          </Chip>
           
        <div style={
          {
          width: '40%',
          }
        } >
            <ItemCount stock={5} initial={1} onAdd = {addToCart} />
        </div>

        </Box  >
        
          <div className='botones'  >
              <Link to='/cart' className='link-btn' >
                  <Button variant="contained" color="success" size="lg"  >
                    Finalizar Compra
                  </Button>
              </Link>
              
              <Link to='/food' className='link-btn'>
                  <Button variant="contained" color="success" size="lg"  >
                    Continuar Comprando
                  </Button>
              </Link>
          </div>
      </Box>
    </Card>
  );
}

