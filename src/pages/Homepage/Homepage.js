import React from 'react'

import Navbar from '../../components/Navbar/Navbar2'

import Carousal from '../../components/Carousel/Carousel'

import {WiDayCloudy} from 'react-icons/wi'

import First from '../../components/First/First'

import Gallery from '../../components/Gallery/Gallery'

import Blogs from '../../components/Blogs/Blogs'

import Blogs1 from '../../components/Blogs/Blog1'

import Effects from '../../components/Effects/Effects'

import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';

import {FaRegArrowAltCircleRight,FaRegArrowAltCircleLeft} from 'react-icons/fa'

import C1 from '../../assets/C1.jpg'
import C2 from '../../assets/C2.jpg'
import C3 from '../../assets/C3.jpg'

const Homepage = () => {
    return (
        <div style={{width:'100%',overflowX:'hidden',marginBottom:'10vh'}}>
            <Navbar/>
            <Carousal/>
            <First/>

<div className='container'  style={{width:'100%',minHeight:'40vh',marginTop:'10vh'}}>


<h1 style={{textAlign:'center'}} >
   
<WiDayCloudy  size={100} style={{display:'bold',textAlign:'center'}} />
{/* <br/> 
    Clubs */}
</h1>

<div style={{marginTop:'10vh'}}>

<Carousel
      arrowLeft={<FaRegArrowAltCircleLeft size={40} />}
      arrowLeftDisabled={'.'}
      arrowRight={ <FaRegArrowAltCircleRight size={40} />}
      arrowRightDisabled={'.'}
      addArrowClickHandler
      breakpoints={{
        640: {
          slidesPerPage: 1
                },
        1200: {
          slidesPerPage: 2
                },
        1800:{
            slidesPerPage: 3
        }
                
      }}

>
  <img src={C1} style={{width:'80%',height:'30vh',borderRadius:20}} />
  <img src={C2} style={{width:'80%',height:'30vh',borderRadius:20}} />
  <img src={C3} style={{width:'80%',height:'30vh',borderRadius:20}} />
</Carousel>
</div>


</div>


{/* <Gallery/> */}

<Blogs/>

<Blogs1/>

<Effects/>


        </div>
    )
}

export default Homepage
