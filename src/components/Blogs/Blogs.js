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
        <div style={{minHeight:'40vh',background:'black',padding:20}}>


<h1 style={{color:'white',textAlign:'center'}} >
   
<WiDayCloudy color={"white"} size={100} style={{display:'bold',textAlign:'center'}} />
<br/> 
    our blog
</h1>


<div className="row" style={{width:'100%',marginTop:'10vh'}}>

{
    data.map((data,i)=>(


<div className="col-md-4" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}> >

<a href="https://google.com/" target="_blank" rel="noopener referrer" style={{textDecoration:'none'}} >


<img src={C2} style={{ position: 'relative',zIndex:'0',width:'90%', textAlign:'center',margin:'auto',cursor:'pointer'}} />


<p style={{ minWidth:'100px',marginRight:10,  position:'relative', left:'8%',textAlign:'center',  bottom:'160px',width:'5vw',zIndex:1, background: 'black',color:'white',borderRadius:10}} >
    Fitness
</p>

<p style={{minWidth:'120px', position:'relative', left:150,textAlign:'center',  bottom:'200px',width:'7vw',zIndex:1, background: 'black',color:'white',borderRadius:10}} >
Yoga Practice
</p>

<h3 style={{color:'white',width:200,textAlign:'start',position:'relative',left:40,bottom:210}}>
{data.desc}
</h3>


<p style={{color:'white',position:'relative',left:'-4%',bottom:220}} >
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
