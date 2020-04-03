import React from 'react'

import Navbar from '../../components/Navbar/Navbar'

import Carousel from '../../components/Carousel/Carousel'

import First from '../../components/First/First'

import Gallery from '../../components/Gallery/Gallery'

import Blogs from '../../components/Blogs/Blogs'

const Homepage = () => {
    return (
        <div style={{width:'100%',overflowX:'hidden'}}>
            <Navbar/>
            <Carousel/>
            <First/>

<div  style={{width:'100%',minHeight:'40vh',background:'#ffebd9'}}>

</div>


<Gallery/>

<Blogs/>
        </div>
    )
}

export default Homepage
