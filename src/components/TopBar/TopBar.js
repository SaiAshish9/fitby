import React from 'react'

import Icons from '../../constants/social-icons'

import './topbar.css'

const TopBar = () => {
    return (
        <div    >
            
<div   style={{ maxHeight:'6vh',width:'100%',background:'black',display:'flex',alignItems:'center',justifyContent:'space-between'}}>

<h6 className="address" style={{ marginLeft:'1%',marginTop:10,color:'white',fontFamily:" 'Poppins', sans-serif"}}> 
care@fitby.in
</h6>

<h6 className='phone' style={{color:'white',textAlign:'end',margin:'auto',fontFamily:" 'Poppins', sans-serif"}}>
    +91 - 7579440559
</h6>


<div  style={{display:'flex',align:'center',justifyContent:'space-between',position:'absolute',right:10}}>
{/* {
    Icons.map((i,k)=>{
      return(  <a styles={{color:'white',margin:' 2rem'}}  key={k} href={i.link} target="_blank" rel="noopener noreferrer">
          {i.icon}
        </a>
      )
    })
} */}

</div>     


<div>



</div>

</div>
        </div>
    )
}

export default TopBar
