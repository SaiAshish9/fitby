import React from 'react'

import TopBar from '../TopBar/TopBar'

import Logo from './logo1.png'


const Navbar = () => {
    return (
        <div style={{width:'100%',minHeight:'10vh'}}>
            

<TopBar/>

<div style={{width:'100%',height:'height:7vh'}}>

<img src={Logo}  style={{margin:10,width:'5rem'}} />

</div>

        </div>
    )
}

export default Navbar
