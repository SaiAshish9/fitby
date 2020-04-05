import React from 'react'


import {Carousel} from 'react-bootstrap'

import C1 from '../../assets/C1.jpg'

import C2 from '../../assets/C2.jpg'

import C3 from '../../assets/C3.jpg'

const Slider = () => {
    return (
        <div>
     
     <Carousel style={{marginTop:0,height:'30vh'}}>
  <Carousel.Item style={{height:'30vh'}}>
    <img
      className=" w-100"
      src={C1}
      style={{height:'30vh'}}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'30vh'}}>
    <img
      className="d-block w-100"
      src={C1}
      style={{height:'30vh'}}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'30vh'}}>
    <img
      className="d-block w-100"
      src={C1}
      style={{height:'30vh'}}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       
        </div>
    )
}

export default Slider
