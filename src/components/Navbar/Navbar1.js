import React from 'react'

import Logo from './logo.png'

import Icons from '../../constants/social-icons'


const Navbar = () => {
    return (
        <nav>


<div className="navbar-brand" style={{position: 'absolute',width:'3vw',left:'2rem',top:'2rem'}}>
<img src={Logo} alt="fitby" style={{width:'12rem',marginLeft:30,marginTop:10}} />
</div>


<div className="socialLinks" style={{padding:'1rem 1.5rem',position:'absolute',right:'1rem',display:'flex',top:'2rem',align:'center',justifyContent:'space-between'}}>
{
    Icons.map((i,k)=>{
      return(  <a styles={{color:'gray',margin:' 2rem'}}  key={k} href={i.link} target="_blank" rel="noopener noreferrer">
          {i.icon}
        </a>
      )
    })
}
</div>          


        </nav>
    )
}

export default Navbar
