  import React from 'react'
  import './Home.css'
  import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-grid-system';

const Home = () => {
  return (
<Container fluid className='contenedor-imagenes'>
  <div    className='container'>  
    <Col xs={12} md={4}  className='img-food' >
      <Link  to= '/food' className='link'><p className='text' >Alimentos</p></Link>
    </Col>
    <Col xs={12} md={4} className='img-galery'>
       <Link  to= '/galery' className='link'><p className='text'>Galeria</p></Link>
    </Col>
  </div>
</Container>
  )
}
export default Home;