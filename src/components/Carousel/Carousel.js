import React from 'react'

import './Carousel.css'

import {Carousel} from 'react-bootstrap'

import Mob1 from '../../assets/mob1.png'

import Mob2 from '../../assets/mob2.png'

import Mob3 from '../../assets/mob3.png'

import Web1 from '../../assets/web1.png'

import Web2 from '../../assets/web2.png'

import Web3 from '../../assets/web3.png'



const Slider = () => {
    return (
        <div>
     
     <Carousel interval={3000} style={{marginTop:0,minHeight:'30vh'}}>
  
  <Carousel.Item style={{minHeight:'30vh'}}>
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none',height:'50vh'}}> 
 
    <img
      className="mob w-100"
      src={Mob1}
      style={{height:'60vh'}}
      alt="First slide"
    />


<img
      className="web w-100"
      src={Web1}
      style={{height:'30vh',marginTop:10}}
      alt="First slide"
    />

      </a>

  </Carousel.Item>

  <Carousel.Item style={{minHeight:'30vh'}}>
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none',height:'50vh'}}> 
 
    <img
      className="mob w-100"
      src={Mob2}
      style={{height:'60vh'}}
      alt="First slide"
    />


<img
      className="web  w-100"
      src={Web2}
      style={{height:'30vh',marginTop:10}}
      alt="First slide"
    />

      </a>

  </Carousel.Item>


  <Carousel.Item style={{minHeight:'30vh'}}>
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none',height:'50vh'}}> 
 
    <img
      className="mob w-100"
      src={Mob3}
      style={{height:'60vh'}}
      alt="First slide"
    />


<img
      className="web w-100"
      src={Web3}
      style={{height:'30vh',marginTop:10}}
      alt="First slide"
    />

      </a>

  </Carousel.Item>

</Carousel>
       
        </div>
    )
}

export default Slider
