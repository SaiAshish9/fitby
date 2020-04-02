import React from 'react'

import Icons from '../../constants/social-icons'

import './topbar.css'

const TopBar = () => {
    return (
        <div>
            
<div  style={{height:'4vh',width:'100%',background:'#f4f4f4',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

<h6 style={{ marginLeft:'1%',marginTop:10,color:'#F18F0E',display:'inline'}}> 
tonyStark@gmail.com
</h6>

<h6 className='phone' style={{color:'#F18F0E',textAlign:'center',margin:'auto'}}>
    +91 123456789
</h6>


<div style={{padding:'0.5rem 1.5rem',display:'flex',align:'center',justifyContent:'space-between',position:'absolute',right:10}}>
{
    Icons.map((i,k)=>{
      return(  <a styles={{color:'#F18F0E',margin:' 2rem'}}  key={k} href={i.link} target="_blank" rel="noopener noreferrer">
          {i.icon}
        </a>
      )
    })
}
</div>     


<div>



</div>

</div>
        </div>
    )
}

export default TopBar
