import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';



const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'  },
              }}
            >
              
                <Stack  direction="column" spacing= "2">
            
                      <Link className="li" to='/' style={{ textDecoration: 'none' , color: 'black', fontWeight: 'bold' , marginTop: 10}}>Inicio</Link>
                      <Link className="li" to='/food' style={{ textDecoration: 'none' , color: 'black', fontWeight: 'bold' , marginTop: 10}}>Productos</Link>
                      <Link className="li" to='/galery' style={{textDecoration: 'none', color: 'black', fontWeight: 'bold', marginTop: 10 }}>Galeria</Link>

                </Stack>
           
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
            
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'in', display: 'block' }}
                component="strong"
              
                spacing="10"
              >
                      <Link className="li" to='/' style={{ textDecoration: 'none' , color: 'white', fontWeight: 'bold' , marginLeft: 30}}>Inicio</Link>,
                      <Link className="li" to='/food' style={{ textDecoration: 'none' , color: 'white', fontWeight: 'bold',marginLeft: 30 }}>Productos</Link>,
                      <Link className="li" to='/galery' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: 30 }}>Galeria</Link>,

              </Button>
   
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
              <IconButton  sx={{ p: 0 }}>
                <Link to='/cart'>
                    <CartWidget alt="cart" />
                </Link>
              </IconButton>
            
             
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
