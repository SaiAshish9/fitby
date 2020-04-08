import React from 'react'


import C2 from '../../assets/C2.jpg'

import C1 from '../../assets/C1.jpg'



import Blog from '../../assets/blog.png'

import './Blog.css'

import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';

import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'


const Blogs = () => {


const data=[

{
    desc:'You can always control what goes on inside',
    date:'April 5, 2017',
    image:C2
},
{
    desc:'Better sleep with daily yoga and meditation',
    date:'March 30, 2017',
    image:C1
},
{
    desc:'How to do a side crow pose in yoga',
    date:'March 18, 2017',
    image:C2
}

]



    return (
        <div style={{ overflowY: 'hidden',minHeight:'40vh',padding:20,marginTop:'10vh'}}>


{/* <h1 style={{textAlign:'center',fontFamily:"'Poppins',sans-serif"}} >
   
<br/> 
    our blog
</h1> */}


{/* <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'1vh',padding:20}}> */}


<div className='row' style={{width:'100%', minHeight:'40vh'}}>





<div className='col-md-9'>




<Carousel
    //   autoPlay={2000}
    infinite
      animationSpeed={1000}
      arrowLeft={ <IoIosArrowBack size={20} style={{color:'#00a5e3',height:'7vh',width:'3rem',boxShadow:'3px 3px   #00a5e3'}} />}
      arrowLeftDisabled={'.'}
      arrowRight={'.' }
      arrowRightDisabled={'.'}
      addArrowClickHandler
      breakpoints={{
        640: {
          slidesPerPage: 0.8
                },
        1200: {
          slidesPerPage: 1
                },
        1800:{
            slidesPerPage: 3
        }
                
      }}

>

{
    data.map((data,i)=>(




<div  style={{minWidth:'45vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',height:'45vh',backgroundImage:`url(${data.image})`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat',cursor:'pointer'}}> 

<a href="https://google.com/" target="_blank" rel="noopener referrer" style={{textDecoration:'none'}} >


<div className='content'  >

<p style={{ padding:3,display:'inline', marginLeft:'-40%',background: 'black',color:'white',borderRadius:10,marginRight:10,fontFamily:"'Poppins',sans-serif"}} >
    Fitness
</p>

<p style={{ padding:3, display:'inline',textAlign:'center', background: 'black',color:'white',borderRadius:10,fontFamily:"'Poppins',sans-serif"}} >
Yoga Practice
</p>

<h5 style={{color:'white',width:200,textAlign:'start',marginLeft:-30,marginTop:30,fontFamily:"'Poppins',sans-serif"}}>
{data.desc}
</h5>


{/* <p style={{marginTop:10,color:'white',marginLeft:-30,fontFamily:"'Poppins',sans-serif"}} >
TRX_admin  __ <span style={{marginLeft:20,fontFamily:"'Poppins',sans-serif"}}>
{data.date}
    </span>
</p> */}
</div>






</a>

</div>


    ))
}

</Carousel>



</div>


<div className='col-md-3' style={{textAlign:'center'}}  >

<img

src={Blog}

style={{textAlign: 'center',width:'20rem', height:'30vh',marginTop:40}}
/>

</div>


</div>


{/* </div> */}


        </div>
    )
}

export default Blogs
