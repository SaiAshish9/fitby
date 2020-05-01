import React,{useState,} from 'react'

import {Row,Col,Container} from 'react-bootstrap'

import {Link} from 'react-router-dom'

import {AiOutlineBell,AiOutlineSearch} from 'react-icons/ai'

import {MdFlight} from 'react-icons/md'

import {GiUbisoftSun} from 'react-icons/gi'


const MyFit = () => {


const urls=[
    'https://cdn.pixabay.com/photo/2016/01/19/17/45/hiker-1149877_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/06/29/01/02/business-man-2452808_960_720.jpg'
]    


const url="https://image.freepik.com/free-vector/winding-road-white_153132-121.jpg"


    return (
        <div style={{background:'white',borderRadius:20, width:'98vw',height:'96vh',margin:'auto',marginTop:'2vh',overflow:'hidden',
        border:'1px solid #999',
        }}>
            
<Row>

    <Col
    lg={5}
    >

<div
style={{
    display:'flex',
    width:'100%',
    height:'96vh',
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:'15%'
    }}
>

<hr

style={{
    borderBottom:'3px solid #342ead',
    width:'3rem',
    textAlign:'start',
    position:'relative',
    right:'45%'
}}
>

</hr>


<p
style={{
textAlign: 'start',
fontWeight: 'bold',
letterSpacing:1,
fontFamily:" 'Poppins', sans-serif",
fontSize:40
}}>

Discover and unlock new revenue potential today

</p>


<p
style={{
    color:'#999',
    textAlign:'start',
    fontFamily:" 'Poppins', sans-serif"
}}
>
Partner with us and get more clients for your club. Increase your revenue and create brand awareness
</p>

<div
style={{ 
    display:'flex',alignItems:'center'
}}
>

<div style={{marginLeft:5, paddingTop:5,textAlign:'center',height:40,width:40, borderRadius:'50%'
,background:`#c8e6f5`
}}>

<AiOutlineBell
style={{
    color:'#0779e4',
    fontWeight:'bolder',fontSize:20

}}
/>

</div>

<p
style={{
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    marginLeft:15,
    fontSize:12,
    marginTop:15
}}
>
    BOOKING RATES BOOSTER
</p>

</div>

<Link
style={{
    background:'#0779e4',
    textAlign:'center',
    letterSpacing:1,
    color:'#fff',
    fontSize:10,
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    padding:'10px 10px',
    borderRadius:20,
    textDecoration:'none',
    marginTop:20,
    width:'7rem'
    }}
>
Try it free
</Link>


</div>

    </Col>

<Col
lg={7}
>

<div
style={{
    width:'100%',
    height:'96vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    background:`url(${url})`,
    // backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    marginLeft:'10%'
}}
>

{/* <img
src={url}
style={{
    height:'70vh',
    width:'100%'
}}
/> */}


<img
src={urls[0]}
style={{
    height:'30vh',
    width:'18%',
    position:'relative',
    right:'39%',
    top:'60vh',
    borderRadius:20

}}

/>

<div
style={{
    background:'#00bcd4',
    borderRadius:'50%', 
    height:15,
    width:15,
    border:'3px solid #fff',
    position:'absolute',
    left:'21%',
    top:'54vh',
}}
>




</div>



<div

style={{
background:'white',
width:'18%',
height:38,
borderRadius:20,
boxShadow:'0 0 5px #999',
position:'relative',
right:'23%',
top:'43vh',
display:'flex',
flexDirection:'row'
}}
>

<div style={{
 marginLeft:5,
 paddingTop:1,textAlign:'center',
 height:34,
 width:30,
  borderRadius:'50%'
,background:`#c8e6f5`,
marginTop:2,
marginBottom:2
}}>

<MdFlight
style={{
    color:'#0779e4',
    fontWeight:'bolder',fontSize:15

}}
/>


<p
style={{
    fontSize:9,
    marginLeft:5,
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold',
    width:'5rem',

position:'relative',
left:27,
bottom:16
}}
>
    Client travelling
</p>

</div>



</div>




<img
src={urls[1]}
style={{
    height:'30vh',
    width:'18%',
    position:'relative',
    right:'4%',
    bottom:'16vh',
    borderRadius:20

}}

/>

<div
style={{
    background:'#32ff6a',
    borderRadius:'50%', 
    height:15,
    width:15,
    border:'3px solid #fff',
    position:'absolute',
    right:'43%',
    bottom:'50vh',
}}
>




</div>



<div

style={{
background:'white',
width:'18%',
height:38,
borderRadius:20,
boxShadow:'0 0 5px #999',
position:'relative',
left:'10%',
bottom:'38vh',
display:'flex',
flexDirection:'row'
}}
>

<div style={{
 marginLeft:5,
 paddingTop:1,textAlign:'center',
 height:32,
 width:30,
  borderRadius:'50%'
,background:`#dcffcc`,
marginTop:2,
marginBottom:1
}}>

<AiOutlineSearch
style={{
    color:'#4dd599',
    fontWeight:'bolder',fontSize:15

}}
/>


<p
style={{
    fontSize:9,
    marginLeft:10,
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold',
    width:'7rem',

position:'relative',
left:17,
bottom:16
}}
>
    Client search for gym
</p>

</div>



</div>





<img
src={urls[2]}
style={{
    height:'30vh',
    width:'18%',
    position:'relative',
    left:'14%',
    bottom:'2vh',
    borderRadius:20

}}

/>

<div
style={{
    background:'#fe346e',
    borderRadius:'50%', 
    height:15,
    width:15,
    border:'3px solid #fff',
    position:'absolute',
    right:'26%',
    bottom:'30.5vh',
}}
>




</div>



<div

style={{
background:'white',
width:'18%',
height:36,
borderRadius:20,
boxShadow:'0 0 5px #999',
position:'relative',
left:'27%',
bottom:'20vh',
display:'flex',
flexDirection:'row'
}}
>

<div style={{
 marginLeft:5,
 paddingTop:1,textAlign:'center',
 height:32,
 width:30,
  borderRadius:'50%'
,background:`#fde2e2`,
marginTop:2,
marginBottom:2
}}>

<GiUbisoftSun
style={{
    color:'#fe346e',
    fontWeight:'bolder',fontSize:15

}}
/>


<p
style={{
    fontSize:9,
    marginLeft:10,
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold',
    width:'7rem',

position:'relative',
left:1,
bottom:16
}}
>
    Our Software
</p>

</div>



</div>



</div>






</Col>

</Row>


        </div>
    )
}

export default MyFit
