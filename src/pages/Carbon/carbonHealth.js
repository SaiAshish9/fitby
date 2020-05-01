import React from 'react'

import {Link} from 'react-router-dom'

import {Container,Row,Col} from 'react-bootstrap'

import {BsCircleFill} from 'react-icons/bs'

import {TiThMenuOutline} from 'react-icons/ti'

import {IoIosArrowDown,IoIosArrowDropdownCircle} from 'react-icons/io'


import './carbon.css'

const links=[
    'Coronavirus',
    'Primary Care',
    'Urgent Care',
    'Virtual Care',
    <span> More <IoIosArrowDown style={{fontSize:15}}/> </span>,
    'Locations',
    'Pricing'
]

const carbonHealth = () => (

        <div style={{  backgroundSize:'cover', backgroundPosition: 'center', background:`url(${'https://carbonhealth.com/static/img/v5/hero-pc.webp?ImJr1wHV9mXtrr4m_oqtO'})`,borderRadius:20, width:'98vw',height:'96vh',margin:'auto',marginTop:'2vh',overflow:'hidden',border:'1px solid #999'}}>

            <div id='nav1'
            style={{cursor:'pointer',width:'100%',height:'10vh',display:'flex',alignItems:'center',justifyContent:'space-around'}}>

<img
src='https://carbonhealth.com/static/img/v5/logo.svg'
/>

<div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>

{
    links.map((i,k)=>(
        <Link
         key={k}
         style={{color:'#333',fontWeight:'bold',fontSize:14,textDecoration:'none',margin:15}}
         >
        {i}
        </Link>
    ))
}

</div>


<div >

<button
style={{
    color:'white',
    background:'#24a06d',
    fontWeight:'bold',
    borderRadius:20,
    padding:10,
    border:'none',
    outline:'none',
    boxShadow:'none',
    fontSize:14
}}
>
Book Appointment
</button>

<button
style={{
    background:'#cbc8c9',
    borderRadius:20,
    padding:'10px 20px',
    border:'none',
    outline:'none',
    boxShadow:'none',
    marginLeft:10
}}
>

<TiThMenuOutline
style={{margin:3,color:'#999',marginTop:-2}}
/>

Menu

</button>

</div>

            </div>

<Container style={{width: '100%',height:'100vh',position:'relative',bottom:'25vh'}}>

<Row style={{width: '100%',height:'100vh'}}>

<Col style={{display: 'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>

<h1 style={{textAlign: 'start',fontWeight: 'bold'}}>
    Modern clinics.
</h1>

<h1 style={{textAlign: 'start',fontWeight:'bold'}}>
    Smart,hassle-free care.
</h1>

<h4 style={{textAlign: 'start',color:'#333',marginTop:30}}>
    Book same day
</h4>

<h4 style={{textAlign: 'start',color:'#333',marginTop:1}}>
    appointments instantly.
</h4>

<h6 style={{marginTop:30,textAlign:'start',color:'#999'}}>
Learn more
<IoIosArrowDropdownCircle style={{color:'black',fontSize:20,margin:5}}/>

</h6>


</Col>

<Col style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

<div style={{  marginLeft:'30%',textAlign:'end',height:'65vh',background:'white',borderRadius:20,width:'65%'}}>

<h5 style={{margin:30,textAlign: 'center'}}>
    Book an appointment
</h5>

<Link
style={{
    margin:10,
    width:'80%',
    height:'10vh',
    textDecoration:'none'
}}
>
<div style={{marginTop:10,width:'100%',display:'flex',justifyContent:'space-around'}}>

<h6 style={{color:'#333',marginLeft:10}}> 
<span style={{marginRight:5,color:'gold'}}>
    O
</span>
Urgent Care
</h6>

<p style={{color:'#24a06d',fontWeight:'bold',fontSize:12,marginTop:4}}>
    Next Today 11:30pm
</p>


</div>


<div style={{ height:'12vh',width:'90%',marginTop:20,background:'#f4f4f4',marginLeft:'5%',marginRight:'5%',padding:20,borderRadius:20}}>



<h6 style={{ color:'#333',textAlign: 'start'}}> 



<BsCircleFill style={{marginRight:5,color:'#00a5e3',marginTop:-3}} />

Primary Care
</h6>

<p style={{color:'#333',fontSize:12,marginTop:4,textAlign: 'start'}}>
Ideal for preventive care
</p>


</div>

<div style={{width:'100%',display:'flex',marginTop:40,justifyContent:'space-around'}}>

<h6 style={{color:'#333',marginLeft:10}}> 
<span style={{marginRight:5,color:'#24a06d'}}>
    O
</span>
Virtual Care
</h6>

<p style={{color:'#24a06d',fontWeight:'bold',fontSize:12,marginTop:4}}>
    Next Today 11:30pm
</p>


</div>




</Link>


<Link 
style={{
    background:'black',color:'white',
    fontWeight:'bold',
    padding:10,
    borderRadius:20,
    textAlign:'center',
    position:'relative',
    right:'4rem',
    top:'2rem', 
    textDecoration:'none'
}}
>

Find an appointment

</Link>


</div>












</Col>

</Row>

</Container>

        </div>
    )


export default carbonHealth
