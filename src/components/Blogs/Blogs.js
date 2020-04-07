import React from 'react'

import {WiDayCloudy} from 'react-icons/wi'

import C2 from '../../assets/C2.jpg'

import './Blog.css'

const Blogs = () => {


const data=[

{
    desc:'You can always control what goes on inside',
    date:'April 5, 2017'
},
{
    desc:'Better sleep with daily yoga and meditation',
    date:'March 30, 2017'
},
{
    desc:'How to do a side crow pose in yoga',
    date:'March 18, 2017'
}

]



    return (
        <div style={{ overflowY: 'hidden',minHeight:'40vh',padding:20,marginTop:'10vh'}}>


<h1 style={{textAlign:'center',fontFamily:"'Poppins',sans-serif"}} >
   
<br/> 
    our blog
</h1>


<div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'1vh',padding:20}}>

{
    data.map((data,i)=>(


<div  style={{minWidth:'45vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',height:'45vh',backgroundImage:`url(${C2})`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat',cursor:'pointer'}}> 

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


<p style={{marginTop:10,color:'white',marginLeft:-30,fontFamily:"'Poppins',sans-serif"}} >
TRX_admin   __ <span style={{marginLeft:20,fontFamily:"'Poppins',sans-serif"}}>
{data.date}
    </span>
</p>
</div>




</a>

</div>

    ))
}


</div>


        </div>
    )
}

export default Blogs
