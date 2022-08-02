  import React from 'react'
  import './Home.css'
  import { Link } from 'react-router-dom'

//  const home = () => {
//    return (
//      <div>
//          <div className='contenedor-imagenes'>
   
//            <Link className='link' to= '/food'><p className='home-img' id='comida'>Alimentos</p></Link>
//            <Link  className='link' to='/accesorios'> <p className='home-img' id='accesorio'>Accesorios</p></Link>
//            <Link className='link' to='/galery'><p className='home-img' id='galeria'>Galería</p> </Link>
//          </div>
//      </div>
//    )
//  }

//  export default home
import { Container, Row, Col } from 'react-grid-system';

const Home = () => {
  return (
<Container fluid className='contenedor-imagenes'>
  <Row    className='container'>
    <Col xs={12} md={4}  className='img-food' >
      <Link  to= '/food' className='link'><p >Alimentos</p></Link>
    </Col>
    <Col xs={12} md={4} className='img-acc'>
       <Link  to= '/accesorios' className='link'><p >Accesorios</p></Link>
    </Col>
    <Col xs={12} md={4} className='img-galery'>
       <Link  to= '/galery' className='link'><p >Galeria</p></Link>
    </Col>
  </Row>
</Container>
  )
}
export default Home;