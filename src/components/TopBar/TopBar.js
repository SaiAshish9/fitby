import React from 'react'

import Icons from '../../constants/social-icons'


const TopBar = () => {
    return (
        <div>
            
<div  style={{height:'4vh',width:'100%',background:'#f4f4f4',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

<p style={{marginLeft:'1%',marginTop:10,color:'#F18F0E',fontWeight:'bold',display:'inline'}}> 
tonyStark@gmail.com
</p>

<p style={{fontSize:'2vh', color:'#F18F0E',fontWeight:'bold',marginTop:10}}>
    +91 123456789

</p>


<div className="pull-right" style={{padding:'1rem 1.5rem',display:'flex',align:'center',justifyContent:'space-between',position:'relative',left:'10%'}}>
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
