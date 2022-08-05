import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import './CardProducts.css';
import { ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {

    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardProducts({prod} ) {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
  }
  return (

    <div className= "card" >
    <Card sx={{ maxWidth: 400 }} onSubmit={onSubmit} >


      <div className='card-media'>
    

      <ImageListItem key={prod.id} className='img-card'
        
      >
          <img 
            src={`${prod.img}?w=161&fit=crop&auto=format`}
            srcSet={`${prod.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={prod.title}
            loading="lazy"
          />
        </ImageListItem>
      </div>

      <div className='card-content'>
      <CardContent className='card-content'>
        <Typography variant="h5" color="text.primary">
          <p>{prod.name}</p> 
        </Typography>
        <Typography variant="body3" color="text.secondary" fontSize={30}>
          {accounting.formatMoney (prod.price, "$")}
        </Typography>
      </CardContent>
      </div>

      <CardActions disableSpacing>
        
      <IconButton aria-label="add to favorites" color='primary' >
          <AddShoppingCartIcon size='large' />
      </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripción</Typography>
          <Typography paragraph>
            {prod.detail}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
    
  );
}
