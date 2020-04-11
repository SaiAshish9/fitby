import React,{useState} from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaAlignRight} from 'react-icons/fa'
import {Link,withRouter} from 'react-router-dom'
import './Navbar2.css'
import Logo from './logo1.png'
import TopBar from '../TopBar/TopBar'


const Bottom = ({history}) => {

const [toggle,setToggle]=useState(false)

const icons=[
<FaFacebookF style={{margin:10}}/>,
<FaInstagram style={{margin:7,fontWeight:'bolder',fontSize:'1.4rem'}}/>,
<FaTwitter   style={{margin:10}}/>
]

const links=[
   {name: 'Home',
   route:'/'},
   {name:'About',
   route:'/about'},
   {name:'Classes',
   route:'/classes'},
   {name: 'Contact',
   route:'/contact'},
   {name: 'Pricing',
   route:'/pricing'}
]

console.log(history.location.pathname)

    return (
        <div>

{/* <TopBar/> */}

        <div className='row' style={{width:'100%',minHeight:'10vh'}} >
 

<div className='col-3'>
<Link to="/">
<img src={Logo} alt="fitby" style={{width:'5rem',marginLeft:20,marginTop:10}} />
</Link>
</div>

<div id="middle" className=' col-7' style={{display:'flex',alignItems:'center'}} >

<div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'80%',fontFamily:" 'Poppins', sans-serif"}}>


{
links.map((i,k)=>(



    i.route!==history.location.pathname?
    (
    <Link to={i.route} className="routes" key={k} style={{textDecoration:'none'}}>
{i.name}
    </Link>):(
        <Link className="routes" key={k} style={{textDecoration:'none',color:'#ff5722',fontWeight:'bolder'}}>
        {i.name}
            </Link>
    )


))
}
</div>


</div>

 <div id="icons" className=" col-2" style={{display:'flex',justifyContent:'space-center',alignItems:'center'}}>

{
    icons.map((i,k)=>(
<a key={k} className="link" href="https://www.google.com" target="_blank" rel="noopener noreferrer"  style={{color:'white',marginRight:10}}>

{i}

</a>
    ))
}

</div>

<div id="toggle" style={{width:'75%',textAlign:'end',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>

<FaAlignRight 
style={{cursor:'pointer',margin:7,fontWeight:'bolder',fontSize:'1.4rem',color:'#ff5722',textAlign:'end'}}
onClick={()=>setToggle(!toggle)}
/>,


</div>

        </div>

<div className="toggleBar" style={{display:'flex',flexDirection:'column',flexWrap:'wrap',paddingLeft:'2rem',paddingVertical:'1rem'}} >


{
toggle && links.map((i,k)=>(



    i.route!==history.location.pathname?
    (
    <Link to={i.route} className="routes" key={k} style={{textDecoration:'none',margin:10,borderBottom:'1px solid #f4f4f4',padding:10}}>
{i.name}
    </Link>):(
        <Link className="routes" key={k} style={{textDecoration:'none',color:'#ff5722',fontWeight:'bolder',margin:10,borderBottom:'1px solid #f4f4f4',padding:10}}>
        {i.name}
            </Link>
    )


))
}


</div>




        </div>
    )
}

export default withRouter(Bottom)
