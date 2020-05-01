import React,{useState} from 'react'

import {Link} from 'react-router-dom'

import './signUp.css'

const SignUp = () => {

const [option,setOption]=useState('signin')


const url1="url('https://cdn.pixabay.com/photo/2016/11/01/18/38/background-1789175_960_720.png')"

const url2="url('https://cdn.pixabay.com/photo/2017/08/12/10/13/background-2633962_960_720.jpg')"

    return (
        <div style={{background:'#b2ebf2',borderRadius:20, width:'98vw',height:'96vh',margin:'auto',marginTop:'2vh',overflow:'hidden',
        border:'1px solid #999',
        
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
        }}>
            

<div style={{
height:'70vh',
width:'70%',
background:'white',
borderRadius:20,
background:`${option==='signin'?url1:url2}`,
backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',
position:'absolute'
}}>


<div
className={option==='signin'?'signin':'hide'}
style={{
    background:'white',
width:'45%',height:'70vh',
borderRadius:20,
boxShadow:'0 0 10px #00bcd4',
display:'flex',alignItems:'center',justifyContent:'center',
flexDirection:'column'
}}

>

<h4>
    Welcome Back
</h4>


<p style={{color:'#999'}}>
    To log in please enter your email and password
</p>


<input
type="text"
placeholder="Email"
style={{
    border:'none',
    borderBottom:'1px solid #999',
    outline:'none',
    padding:10,
    width:'80%',
    color:'#999',
    margin:10,
    fontSize:12,
    fontFamily:" 'Poppins', sans-serif"
}}

/>


<input
type="password"
placeholder="Password"
style={{
    border:'none',
    borderBottom:'1px solid #999',
    outline:'none',
    padding:10,
    width:'80%',
    color:'#999',
    margin:10,
    fontSize:12,
    fontFamily:" 'Poppins', sans-serif"
}}

/>


<Link
style={{
    width:'80%',
    height:'5vh',
    background:'#543864',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:12,
    fontFamily:" 'Poppins', sans-serif",
    paddingTop:10,
    marginTop:20
}}
>
Login Now
</Link>

<p
style={{
    color:'#999',
marginTop:20
}}
>
Not registered yet? {' '} <span style={{color:'orange',fontSize:15}}>
     <Link
     className='slide'
     style={{
         color:'orange',
         textDecoration:'none'
     }}
     onClick={()=>setOption('signup')}

     >
     Sign up   
     </Link>
     
     </span>
</p>


</div>



<div
className={option==='signup'?'signup':'hide'}
style={{
    background:'white',
width:'45%',height:'70vh',
borderRadius:20,
boxShadow:'0 0 10px #00bcd4',
display:'flex',alignItems:'center',justifyContent:'center',
flexDirection:'column'
}}

>

<h4>
    Welcome 
</h4>


<p style={{color:'#999'}}>
    please enter your email and password
</p>


<input
type="text"
placeholder="Email"
style={{
    border:'none',
    borderBottom:'1px solid #999',
    outline:'none',
    padding:10,
    width:'80%',
    color:'#999',
    margin:10,
    fontSize:12,
    fontFamily:" 'Poppins', sans-serif"
}}

/>


<input
type="password"
placeholder="Password"
style={{
    border:'none',
    borderBottom:'1px solid #999',
    outline:'none',
    padding:10,
    width:'80%',
    color:'#999',
    margin:10,
    fontSize:12,
    fontFamily:" 'Poppins', sans-serif"
}}

/>


<Link
style={{
    width:'80%',
    height:'5vh',
    background:'#543864',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:12,
    fontFamily:" 'Poppins', sans-serif",
    paddingTop:10,
    marginTop:20
}}

>
Sign Up 
</Link>

<p
style={{
    color:'#999',
marginTop:20
}}
>
Already registered? {' '} <span style={{color:'orange',fontSize:15}}>
     <Link
     className='slide'
     style={{
         color:'orange',
         textDecoration:'none'
     }}
     onClick={()=>setOption('signin')}

     >
     Sign in     
     </Link>
     
     </span>
</p>


</div>





</div>

        </div>
    )
}

export default SignUp
