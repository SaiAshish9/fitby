import React from 'react'

import Fitby from '../../assets/fitby.jpg'


const First = () => {
    return (
        

<div className="container">

<div className="container" style={{marginTop:'10vh',textAlign:'center'}}>

<input type="text" placeholder="Name" style={{margin:20,border:'2px solid #F18F0E ',padding:5,background:'#f4f4f4',width:'15rem'}} />

<input type="email" placeholder="Email" style={{margin:20,border:'2px solid #F18F0E ',padding:5,background:'#f4f4f4',width:'15rem'}} />

</div>


<div className="row">
  
<div className="col-md-6">

<img src={Fitby} style={{width:'100%'}}/>

</div>

<div className="col-md-6" style={{display:'flex',flexDirection:'column',textAlign:'end'}}>


<h4 style={{textAlign:'start',margin:'20px 0',color:'#F18F0E'}}>
  Stay Home,Stay Fit
</h4>

<p style={{color:'gray',fontWeight:'bold',textAlign:'start',letterSpacing:2}}>
At this hour of pandemic our team of nutritionists, dietitians and trainers have created an E book of all possible information and plans that you need in order to stay fit and have an healthy immune system.
</p>

</div>

</div>

</div>


    )
}

export default First
