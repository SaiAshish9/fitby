import React from 'react'

import {Row,Col,Container} from 'react-bootstrap'


import {FaFacebookF,FaTwitter,FaPinterestP} from 'react-icons/fa'

const CoachInfo = () => {



const data=[
{
data:"The Understated Charm of Jack Johnstone's Photography",
date:new Date().toLocaleDateString()
},
{
    data:"The Understated Charm of Jack Johnstone's Photography",
    date:new Date().toLocaleDateString()
    },
{
        data:"The Understated Charm of Jack Johnstone's Photography",
        date:new Date().toLocaleDateString()
},
]


    const socialLinks=[
        <FaFacebookF/>,
        <FaTwitter/>,
        <FaPinterestP/>
    ]


const links=[
    'Home',
    'About us',
    'Art',
    'Blog',
    'Articles',
    'News',
    'Pinterest',
    'Gallery',
    'Contact'
]


    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',  background:'#f0dab1',borderRadius:20, width:'98vw',height:'96vh',margin:'auto',marginTop:'2vh',overflow:'hidden',border:'1px solid #999'}}>
            



<Row style={{ background:'#deb881',margin:'auto',width:'85vw',height:'88vh',border:'2px solid black'}}>

<Col
lg={2}
style={{borderRight:'1px solid black'}}
>

<Row lg={12}>

<Col style={{height:'18vh',width:'100%',borderBottom:'1px solid black'}}>

<h6 style={{marginTop:'7vh',marginLeft:10}}>
    TETRAD
</h6>


</Col>   

</Row>


<Row lg={12}>

<Col style={{height:'65vh',width:'100%'}}>

<div style={{marginLeft:10,marginTop:'8vh',display:'flex',flexDirection:'column',justifyContent:'space-around'}}> 


{
    links.map((i,k)=>(
        <p key={k} style={{cursor:'pointer',fontSize:12,fontWeight:'bold'}} > 
            {i}
        </p>
    ))
}

</div>

<div style={{marginLeft:10,marginTop:'5vh',borderBottom:'1px solid black'}}> 

<p  style={{fontSize:10,fontWeight:'bold'}} > 
            Show us on following social media
        </p>



</div>


<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>


{
    socialLinks.map((i,k)=>(
<p key={k}  style={{cursor:'pointer',fontSize:10,fontWeight:'bold',margin:5}} > 
    {i}
</p>
    ))
}



</div>




</Col>   

</Row>


</Col>


<Col
lg={7}
style={{borderRight:'1px solid black'}}
>


<Row lg={7}>

<Col style={{height:'18vh',width:'100%',borderBottom:'1px solid black'}}>


<div style={{alignItems:'center',display:'flex',justifyContent:'space-around'}}>

{
    data.map((i,k)=>(

        <div key={k} style={{display:'flex'}}>
   <h6 style={{fontSize:20,marginRight:10,marginTop:35}}>{k+1}. </h6> 
   <p style={{marginTop:'5vh',fontSize:12,fontWeight:'bold'}}>
   {i.data} <br/> {i.date}
        </p>
        </div>
     
    ))
}

</div>




</Col>   

</Row>


<Row lg={7}>

<Col style={{height:'42vh',width:'100%'}}>

<h5 style={{letterSpacing:1,marginTop:10}}>
    LATEST ARTICLES
</h5>

<p style={{letterSpacing:1,marginTop:10,fontWeight:'bold',fontSize:12}}>
12 {'  '}956 article
</p>

<div style={{display:'flex',justifyContent:'space-around'}}>


{
    [...Array(3).keys()].map((i,k)=>(
<img
key={k}
src="https://m.media-amazon.com/images/I/61Tdwe-8FhL._AC_UL436_.jpg"

style={{
    height:'28vh',
    boxShadow:'3px 4px #333'
}}

/>
    ))
}



</div>


</Col>   

</Row>


<Row lg={7}>

<Col style={{height:'20vh',width:'100%',borderTop:'1px solid black'}}>

<div style={{display:'flex'}}>

<div style={{padding:10,width:'80%'}}>

<div style={{display:'flex',justifyContent:'space-between'}}>

<p style={{marginTop:5,width:'15rem',fontSize:12,fontWeight:'bold'}}>
    The Understand Charm of Jack Johnstone's Photography
</p>

<p style={{marginTop:25,width:'15rem',fontSize:12,fontWeight:'bold'}}>
    Recommended for you
</p>

</div>

<div style={{marginTop:-10}} >


    <p style={{fontSize:12,fontWeight:'bold',textAlign:'start'}}>
    <span style={{fontSize:35,fontWeight:'bold',float:'none'}}>
        A
    </span> 
  
<span style={{position:'relative',bottom:10}}>
merican photographer Ben Zank who we've featured previously, shot a new series of surreal portraits following his mobe from New York City to New Zealand . In a statement about his latest work,Zank says,"The images represent a ongoing experience of emotions that I feel,the most recent being isolation and a longing to connect with another human being."

</span>


    </p>
</div>




</div>

<div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>

<div style={{cursor:'pointer', border:'1px solid black', display:'flex',flexDirection:'column',align:'center',justify:'center'}}>

<p style={{height:10,width:40,textAlign:'center',padding:5,fontSize:12,fontWeight:'bold'}}>
270
</p>

{
    socialLinks.map((i,k)=>(
        <p key={k} style={{borderTop:'1px solid black',height:10,width:40,textAlign:'center',padding:5,fontSize:12,fontWeight:'bold'}}>
        {i}
        </p>  
    ))
}


</div>

</div>


</div>



</Col>   

</Row>


</Col>


<Col
lg={3}
>



<Row lg={12}>

<div  style={{height:'38vh',width:'100%',borderBottom:'1px solid black'}}>

<Container  style={{width:'100%',height:'20vh',background:`url('https://johanacademicwritinghelp.com/wp-content/uploads/2017/09/936394705_3de472288a_b.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}}>

</Container>

<p style={{fontSize:12,fontWeight:'bold',margin:10}}>
    Tachelers Reopens Its Doors For A Visually Stimulating Cinematic
</p>

<p style={{fontSize:12,fontWeight:'bold',margin:10}}>
    {new Date().toLocaleDateString()}
</p>

<p style={{fontSize:12,marginLeft:10}}>
As an impressive testament to Berlin's post -societ era,the former iconic Tachelers in Mitte will
</p>

</div>   

</Row>



<Row lg={12}>

<div  style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', height:'44vh',width:'100%'}}>

<p style={{marginTop:50,fontWeight:'bold',fontSize:12,fontFamily:" 'Poppins', sans-serif"}}>

Subscribe Now
<hr style={{width:'3rem',border:'1px solid black',marginTop:5}}></hr>

</p>


<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

<input
type="text"
className='coachinfo'
placeholder='Name'
style={{
    border:'none',
    borderBottom:'1px solid black',
    background:'none',
    outline: 'none',
    paddingLeft:5,
    fontSize:12,
    marginBottom:10,
    color:'#333'
    }}
/>

<div style={{display:'flex',justifyContent:'space-around'}}>


<input
type="email"
className='coachinfo'
placeholder='Email'
style={{
    border:'none',
    borderBottom:'1px solid black',
    background:'none',
    outline: 'none',
    paddingLeft:5,
    fontSize:12,
    margin:10,
    color:'#333',
    width:'3.9rem'
    }}
/>

<input
type="tel"
className='coachinfo'
placeholder='Mobile'
style={{
    border:'none',
    borderBottom:'1px solid black',
    background:'none',
    outline: 'none',
    paddingLeft:5,
    fontSize:12,
    margin:10,
    color:'#333',
    width:'3.6rem'
    }}
/>

</div>




<input
type="text"
className='coachinfo'
placeholder='Info'
style={{
    border:'none',
    borderBottom:'1px solid black',
    background:'none',
    outline: 'none',
    paddingLeft:5,
    fontSize:12,
    marginBottom:10,
    color:'#333'
    }}
/>

<input
type="text"
className='coachinfo'
placeholder='Subject'
style={{
    border:'none',
    borderBottom:'1px solid black',
    background:'none',
    outline: 'none',
    paddingLeft:5,
    fontSize:12,
    marginBottom:10,
    color:'#333'
    }}
/>

</div>


<button style={{outline:'none',background:'none',border:'none',boxShadow:'none',cursor:'pointer',fontWeight:'bold',fontSize:12,fontFamily:" 'Poppins', sans-serif",marginTop:20}}>

SEND
<hr style={{width:'2rem',border:'1px solid black',marginTop:5}}></hr>

</button>


<p style={{textAlign:'center',fontWeight:'bold',fontSize:12,fontFamily:" 'Poppins', sans-serif",position: 'relative',bottom:10}}>
<hr style={{width:'10rem',border:'1px solid black',marginBottom:5}}></hr>

ALL RIGHTS RESERVED

</p>

</div>




</Row>


</Col>

</Row>


        </div>
    )
}

export default CoachInfo
