import React from 'react'

import {WiDayCloudy} from 'react-icons/wi'

import C2 from '../../assets/C2.jpg'

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
        <div style={{ overflowY: 'hidden',minHeight:'40vh',background:'black',padding:20}}>


<h1 style={{color:'white',textAlign:'center'}} >
   
<WiDayCloudy color={"white"} size={100} style={{display:'bold',textAlign:'center'}} />
<br/> 
    our blog
</h1>


<div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center',marginTop:'10vh',padding:20}}>

{
    data.map((data,i)=>(


<div style={{minWidth:'45vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',height:'45vh',backgroundImage:`url(${C2})`,backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat',cursor:'pointer'}}> 

<a href="https://google.com/" target="_blank" rel="noopener referrer" style={{textDecoration:'none'}} >




<p style={{ padding:3,display:'inline', marginLeft:'-40%',background: 'black',color:'white',borderRadius:10,marginRight:10}} >
    Fitness
</p>

<p style={{ padding:3, display:'inline',textAlign:'center', background: 'black',color:'white',borderRadius:10}} >
Yoga Practice
</p>

<h5 style={{color:'white',width:200,textAlign:'start',marginLeft:-10,marginTop:10}}>
{data.desc}
</h5>


<p style={{color:'white',marginLeft:-20}} >
TRX_admin   __ <span style={{marginLeft:20}}>
{data.date}
    </span>
</p>
</a>


</div>

    ))
}


</div>


        </div>
    )
}

export default Blogs
