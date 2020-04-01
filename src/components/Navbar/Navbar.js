import React from 'react'

import TopBar from '../TopBar/TopBar'

import Logo from './logo.png'


const Navbar = () => {
    return (
        <div style={{width:'100%',minHeight:'10vh'}}>
            

<TopBar/>

<div style={{width:'100%',height:'height:7vh'}}>

<img src={Logo}  style={{margin:10,width:'10%'}} />

</div>

        </div>
    )
}

export default Navbar
