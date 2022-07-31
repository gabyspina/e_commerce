import React from 'react'
import  {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../Components/Header/Header';
import NavBar from '../Components/NavBar/NavBar';

// views

import Home from '../views/Home/Home';
import Food from '../views/Food/Food';
import Accesorios from '../views/Accesorios/Accesorios';
import Galery from '../views/Galery/Galery';
import Cart from '../views/Cart/Cart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
// import Category from '../views/Category/Category';
import Error from '../views/Error/Error';
import Checkout from '../views/Checkout/Checkout';

const Router = () => {
  return (
    <BrowserRouter>
                  
          <Header/>
          <NavBar/>
          <Routes>  

              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/food' element={<Food/>} />
              <Route path='/accesorios' element={<Accesorios/>} />
              <Route path='/galery' element={<Galery/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/checkout' element={< Checkout/>} /> 
              <Route path='/detail/:id' element={< ItemDetailContainer/>} /> 
              {/* <Route path='/category/:category' element={<Category/>} /> */}
              <Route path='*' element={<Error />} />


          </Routes>
    </BrowserRouter>

  )
}

export default Router
