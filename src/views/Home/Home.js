  import React from 'react'
  import './Home.css'
  import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-grid-system';

const Home = () => {
  return (
<Container fluid className='contenedor-imagenes'>
  <Row
   className='container' 
    style={{
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
    }}
   >  
    <Col xs={12} md={4}  className='img-food'
    
      >
      <Link  to= '/food' className='link'><p className='text' >Alimentos</p></Link>
    </Col>
    <Col xs={12} md={4} className='img-galery'>
       <Link  to= '/galery' className='link'><p className='text'>Galeria</p></Link>
    </Col>
  </Row>
</Container>
  )
}
export default Home;