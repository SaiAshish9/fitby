import React from 'react'

import {Link} from 'react-router-dom'

import {AiFillApple} from 'react-icons/ai'

import {FaGooglePlay,FaMobileAlt} from 'react-icons/fa'

import {IoIosFlower} from 'react-icons/io'

const url='https://png.pngtree.com/thumb_back/fh260/background/20191009/pngtree-blue-watercolor-background-image_318905.jpg'


const buttons=[
    {
        head:'Download on the',
        data:'App Store',
        icon:<AiFillApple style={{
            color:'white',
            height:'7vh',
            fontSize:30,
            margin:'0 5px'
        }}
        />
    },
    {
        head:'GET IT ON',
        data:'Google Play',
        icon:<FaGooglePlay style={{
            color:'white',
            height:'7vh',
            fontSize:20,
            margin:'0 8px'
        }}
        />
    }
]

const navLinks=[
    'Blog',
    'Blog App',
    'Support'
]


const WellnessLiving = () => {
    return (
        <div style={{borderRadius:20, width:'98vw',height:'96vh',margin:'auto',marginTop:'2vh',overflow:'hidden',border:'1px solid #999'}}>

<div style={{
    width:'100%',
    height:'60vh',
    background:`url(${url})`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
    }}>

<div
style={{
    width:'100%',
    height:'10vh',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
}}
>

<p 
style={{
    fontWeight:'bold',
    color:'white',
    fontSize:15,
    fontFamily:" 'Poppins', sans-serif",
    marginLeft:'10%'
}}
>
<IoIosFlower
style={{
    color:'#d7385e',
    fontSize:30,
    marginRight:5
}}
/>

  <i>
  WellnessLiving
      </i>  
</p>


<div
style={{
    display:'flex',
    justifyContent:'space-around',
    marginRight:'10%'
}}
>

{
    navLinks.map((i,k)=>(
        <p 
        key={k}
        style={{
            fontFamily:" 'Poppins', sans-serif",
            color:'white',
            marginLeft:20,
            cursor:'pointer'
        }}
        >
            {i}
        </p> 
    ))
}



</div>


</div>


<div
style={{
    width:'100%',
    height:'50vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
}}
>

<p
style={{
    color:'white',
    fontWeight:'light',
    fontSize:12,
    fontFamily:" 'Poppins', sans-serif",
}}
>
    WILLNESSLIVING BUSINESS APP
</p>


<p

style={{
    color:'white',
    fontSize:30
    }}
>

Run your business anywhere

</p>

<h3
style={{
    fontWeight:'bold',
    fontSize:25,
    color:'white',
    fontFamily:" 'Poppins', sans-serif",
}}
>
on any device
</h3>

<div
style={{
    display:'flex'
}}
>


{
    buttons.map((i,k)=>(

<div
key={k}
style={{
    background:'#000',
    borderRadius:10,
    margin:10,
    display:'flex',
    width:'8rem',
    height:'7vh',
    cursor:'pointer'
}}
>


{i.icon}

<div
style={{
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',
    height:'7vh'
}}
>


<p
style={{
    color:'white',
    fontSize:10,
    marginTop:20,
    marginBottom:1
}}
>
{i.head}
</p>

<p
style={{color:'white'}}
>
{i.data}
</p>


</div>

</div>

    ))
}

</div>




<p
style={{
    color:'white',
    position:'relative',
    top:'7vh'
}}
>
    Enter your <b>mobile number</b> and we'll text you a link to download
</p>

<div
style={{
    position:'relative',
    top:'6vh',
    display:'flex',
    width:'40%',
}}
>

<input
id="inp"
type="tell"
placeholder="Your Phone Number"
style={{
    paddingLeft:20,
    fontSize:20,
    color:'#999',
    width:'200%',
    border:'none',
    boxShadow:'0 2px 15px #eee',
    height:'8vh',
    fontSize:15,
    fontFamily:" 'Poppins', sans-serif",
    outline:'none',
position: 'relative',
left:'3.8rem'
    }}
/>


<Link
style={{
    background:'#d7385e',
    textAlign:'center',
    letterSpacing:1,
    color:'#fff',
    fontSize:10,
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    padding:'8px 10px',
    height:'6vh',
    borderRadius:20,
    textDecoration:'none',
    position:'relative',
    right:90,
    width:'20rem',
    top:7
    }}
>

GET THE LINK

<FaMobileAlt style={{color:'white',fontWeight:'bold',margin:5,fontSize:17}}/>

</Link>

</div>

<p
style={{
    color:'#999',
    fontSize:12,
position:'relative',
top:'7vh'
}}
>
   * Indian phone numbers only
    </p>


</div>


<div
style={{

    width:'100%',
    height:'30vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'

}}
>

<p
style={{
    color:'blue',
    fontFamily:" 'Poppins', sans-serif",
    fontSize:10,
    fontWeight:'bold',
    letterSpacing:1,
    textTransform:'uppercase',
    marginTop:'10vh'
}}
>
the agility and power of
</p>

<p
style={{
    fontSize:25,
    fontFamily:" 'Poppins', sans-serif",
}}
>
WellnessLiving <b>in One App</b>

</p>


<p
style={{
    fontSize:12,
    color:'#999',
    width:'35rem',
    textAlign:'center'
}}
>
Get the WellnessLiving features you depend on from scheduling to client management to point of sale--included with your software package.
</p>

</div>



</div>

        </div>
    )
}

export default WellnessLiving
