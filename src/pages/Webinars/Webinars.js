import React from 'react'

import {Row,Col,Container} from 'react-bootstrap'

import {FiMusic} from 'react-icons/fi'

import {IoIosArrowDown,IoIosSearch} from 'react-icons/io'

import {BsGridFill,BsGrid} from 'react-icons/bs'

import {AiFillHeart} from 'react-icons/ai'

import {Link} from 'react-router-dom'

import {GiCancel} from 'react-icons/gi'

const Webinars = () => {



const data=[
    {
        color:'#e3e3e3',
        iconColor:'#484c7f',
        data:'Hip Hop'
    },
    {
        color:'#b2ebf2',
        iconColor:'#00bcd4',
        data:'Pop'
    },
    {
        color:'#fde2e2',
        iconColor:'#fe346e',
        data:'Classic'
    },
    {
        color:'#ffeb99',
        iconColor:'#ffd31d',
        data:'Rock'
    },
]

    return (
        <div style={{background:'#f4f4f4',borderRadius:20, width:'98vw',height:'96vh',margin:'auto',marginTop:'2vh',overflow:'hidden',border:'1px solid #999'}}>


<div style={{width:'100%',height:'10vh',background:'white',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

<p style={{color:'#957dad',marginLeft:50,marginTop:10,fontFamily:" 'Poppins', sans-serif",fontWeight:'bold'}}>
    event <span style={{color:'#ff7272'}}>z</span>
</p>

<div style={{display:'flex'}}>


<p style={{
    background:'#f4f4f4',borderRadius:20,padding:'10px 40px',
    color:'#84a9ac',marginRight:50,marginTop:10,fontFamily:" 'Poppins', sans-serif",fontWeight:'bold'}}>
Stark    
</p>

<img
src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKOA3tAE8n9J_1MXpJ3CDH-GT3cWysa0Il7dpNksxpTlyugDgp&usqp=CAU'
style={{
height:45,
width:45,
borderRadius:20,
border:'5px solid white', 
position:'relative',
top:10,
right:80
}}
/>

</div>

</div>

<Row style={{width:'100%',height:'76vh'}}>


<Col lg={9} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>

<div style={{display:'flex',width:'90%',height:'30vh',background:'#ff7272',borderRadius:20,marginTop:'5vh'}}>

<div style={{marginLeft:20,width:'60%',display:'flex',justifyContent:'center',flexDirection:'column'}}>

<h4 style={{color:'white',fontWeight:'bold'}}>
    Find the
</h4>

<h5 style={{color:'white'}}>
    best music event nearby
</h5>

<button style={{
    color: '#ff7272',
    background:'white',
    borderRadius:20,
    outline:'none',
    boxShadow:'none',
    border:'none',
    width:'5rem',
    marginTop:10,fontFamily:" 'Poppins', sans-serif"
}}>
Join
</button>


</div>


<div style={{width: '40%'}}>

<img
src='https://cdn.pixabay.com/photo/2016/06/14/16/13/man-1456923_960_720.png'
style={{
    width:'80%',
    height:'38vh',
    position:'relative',
    bottom:40,
    left:40
}}
/>

</div>

</div>


<div style={{marginTop:'4vh',width:'90%',display:'flex',height:'10vh',justifyContent:'space-between'}}>

{
data.map((i,k)=>(
<div key={k} style={{
    borderRadius:20,
    boxShadow:'5px 5px 5px #eee',
    height:'8vh',
    width:'20%',
    background:'white',
    display:'flex',alignItems:'center'

}}>

<div style={{marginLeft:5, paddingTop:5,textAlign:'center',height:40,width:40, borderRadius:'50%'
,background:`${i.color}`
}}>

<FiMusic
style={{
    color:`${i.iconColor}`,
    fontWeight:'bolder',fontSize:20

}}
/>

</div>

<div>
<p style={{
    marginLeft:12,
    fontFamily:" 'Poppins', sans-serif",
    color:'#999',
    position:'relative',
    top:16,
    fontSize:10,fontWeight:'bold',letterSpacing:1
}}>
    2 events
</p>

<p style={{
    marginLeft:12,
    fontFamily:" 'Poppins', sans-serif",
    color:`${i.iconColor}`,
    fontWeight:'bold'
}}>
    {i.data}
</p>
</div>



</div>
))
}




</div>


<div style={{borderRadius:20,background:'white',width:'90%',display:'flex',height:'40vh',justifyContent:'space-between',marginTop:'3vh',flexDirection:'column'}}>

<div style={{width:'100%',height:'6vh',display:'flex',alignItems:'center',justifyContent:'space-between'}}>


<h4 style={{fontWeight:'bold',margin:'20px 20px 10px'}}> 
    Recommended
</h4>

<div style={{display:'flex',justifyContent:'space-around',marginRight:'20px',marginTop:'20px'}}>

<p style={{marginTop:2,fontSize:12,fontWeight:'bold',color:'#999'}}>
Sort by    
</p>

<p style={{cursor:'pointer',letterSpacing:1,fontSize:12,fontWeight:'bold',color:'#fe346e',background:'#eee',padding:'2px 5px',borderRadius:20,marginLeft:10}}>
Classic    
<IoIosArrowDown style={{
    fontWeight:'bold',
    marginLeft:2,
    color:'#333'
}}/>

</p>


<BsGridFill
style={{
    margin:'4px 7px',cursor:'pointer'
}}
/>
<BsGrid
style={{
    margin:'4px 7px',cursor:'pointer'
}}
/>





</div>





</div>


<div style={{
    height:'25vh',
    width:'94%',
    borderRadius:20, 
    boxShadow:'0 0 10px #999',
    position:'relative',
    bottom:'8vh',
    marginLeft:20, 
    paddingLeft:20,
    display:'flex',alignItems:'center'
}}>


<div style={{
    width:'27%', height:'20vh',
    borderRadius:20, 
    background:'#ffaaa5',
    display:'flex',alignItems:'center',justifyContent:'center'
}}>

<div
style={{
    height:'12vh',
    width:'40%',
    background:'#fe346e',
    position:'relative',
    right:'20%',borderRadius:20,
    display:'flex',alignItems:'center',flexDirection:'column'
}}
>

<p
style={{
    marginTop:10,
  fontSize:12,
    fontFamily:" 'Poppins', sans-serif",fontWeight:'bold',color:'#fff'
}}
>
    23 of Nov
</p>

<p
style={{
    fontFamily:" 'Poppins', sans-serif",fontWeight:'bold',color:'#fff'
}}
>
    2020
</p>


</div>


<img
  src='https://cdn.pixabay.com/photo/2017/02/01/11/48/abstract-2029887_960_720.png' 
style={{
    height:'12vh',
    width:'60%',
    position:'relative',right:'16%'
}}
/>

</div>



<div style={{ 
    marginLeft:30,
    width:'60%',
    diplay:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'

}}>

<h4
style={{
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
}}
>
    Webtalk Invite Day
</h4>

<p
style={{
    fontFamily:" 'Poppins', sans-serif",
    color:'#999',
    textAlign:'start'
}}
>
lorem ipsum dolor sit amet, consectetur adipiscing
</p>


{
    data.map((i,k)=>{

return k!==3&&(<Link
key={k}
style={{
    background:`${i.color}`,
    color:`${i.iconColor}`,
    fontSize:12,
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    padding:'5px 20px',
    borderRadius:20, 
    marginRight:10,  
    textDecoration:'none'

}}
>
{i.data}
</Link>
)}
    )}



</div>



<div style={{width:'20%',height:'20vh',
marginRight:20}}>

<p style={{textAlign:'end'}}>

<AiFillHeart
style={{
    color:'#d7385e',
    fontSize:20,
    cursor:'pointer'
}}
/>

</p>


<h2 style={{textAlign:'center'}}>
$ 100.00
</h2>


<Link
style={{
    background:'#d7385e',
    textAlign:'center',
    letterSpacing:1,
    color:'#fff',
    fontSize:12,
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    padding:'5px 20px',
    borderRadius:20,
    marginLeft:30,
    textDecoration:'none'
    }}
>
Get Ticket
</Link>


</div>


</div>



</div>



</Col>


<Col lg={3}>


<Row lg={12} style={{display:'flex',justifyContent:'center'}}>

    <div style={{background:'white',borderRadius:20,height:'45vh',width:'70%',marginTop:'5vh'}}>
        

    <h3 style={{fontWeight:'bold',margin:'20px 20px 10px'}}> 
    Filter
</h3>

<div
style={{
    display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'
}}
>


<input
type='text'
placeholder='Search'
style={{
color:'#999',
marginBottom:10,
borderRadius:20,
padding:'5px 5px 5px 40px ' ,
border:'none',
outline:'none',
background:'#f4f4f4'
}}
/>

<IoIosSearch
style={{
    color:'#999',
    fontWeight:'bolder',
    fontSize:20,
    position:'relative',
    right:90,
    bottom:35
}}
/>

{
    ['Hip Hop','Rock','Classic','Pop','Classic'].map((i,k)=>(

<div key={k}  style={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottom:'1px solid #f4f4f4',
    width:'80%',
    height:'2vh',
    margin:'5px 0'
}}>

<p

style={{
    fontSize:10,fontWeight:'bold',color:'#999'
}}
>
    {i}
</p>

<p>
<GiCancel
style={{
    cursor:'pointer',
    color:'#999'
}}
/>
</p>

</div>

    ))
}


<Link
style={{
    background:'#d7385e',
    textAlign:'center',
    letterSpacing:1,
    color:'#fff',
    fontSize:10,
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    padding:'7px 20px',
    borderRadius:20,
    marginTop:10,
    textDecoration:'none',
    }}
>
Search 
</Link>

</div>




    </div>

</Row>


<Row lg={12} style={{display:'flex',justifyContent:'center'}}>

    <div
    style={{
    background:'white',
    borderRadius:20,
    height:'32vh',
    width:'70%',
    marginTop:'2vh',
    display:'flex', 
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
    }}>
        
<h6 style={{
    fontWeight: 'bold',
    color:'#999',
    textAlign:'center'
}}>
What to create an<br/> event?
</h6>

<Link
style={{
    background:'#d7385e',
    textAlign:'center',
    letterSpacing:1,
    color:'#fff',
    fontSize:10,
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    padding:'7px 20px',
    borderRadius:20,
    textDecoration:'none',
    }}
>
Search more
</Link>

<img
src='https://cdn.pixabay.com/photo/2017/02/01/11/50/abstract-2029895_960_720.png'
style={{
    height:'10vh',
    width:'40%',
    marginTop:30
}}
/>


    </div>

</Row>

</Col>

</Row>

        </div>
    )
}

export default Webinars
