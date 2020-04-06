import React from 'react'

import Fitby from '../../assets/image.jpg'

import {Dropdown} from 'react-bootstrap'

const First = () => {
    return (
        

<div className="container" style={{marginTop:'10vh'}}>

<div className="row">
  
<div className="col-md-6">

<img src={Fitby} style={{width:'100%'}}/>

</div>

<div className="col-md-6" style={{textAlign:'center'}} >


<h4 style={{textAlign:'start',margin:'20px 0',color:'#F18F0E',textAlign:'center',fontFamily:" 'Poppins', sans-serif"}}>
BE FIT WITH US
</h4>


<label htmlFor="Name" style={{fontWeight:'bold',width:'40%',textAlign:'start',fontFamily:" 'Poppins', sans-serif"}} >
Name
</label>

<input type="text" placeholder="Name" style={{ margin:20,border:'2px solid #F18F0E ',padding:5,background:'#f4f4f4',width:'40%',fontFamily:" 'Poppins', sans-serif"}} />

<br/>

<label htmlFor="Number" style={{fontWeight:'bold',width:'40%',textAlign:'start',fontFamily:" 'Poppins', sans-serif"}} >
Number
</label>


<input type="tel" placeholder="Number" style={{margin:20,border:'2px solid #F18F0E ',padding:5,background:'#f4f4f4',width:'40%',fontFamily:" 'Poppins', sans-serif"}} />

<br/>
<label htmlFor="Email" style={{fontWeight:'bold',width:'40%',textAlign:'start',fontFamily:" 'Poppins', sans-serif"}} >
Email
</label>

<input type="email" placeholder="Email" style={{margin:20,border:'2px solid #F18F0E ',padding:5,background:'#f4f4f4',width:'40%',fontFamily:" 'Poppins', sans-serif"}} />


<div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} >


<Dropdown key="down" style={{width:'50%',padding:20,display:'inline'}} >
  <Dropdown.Toggle variant="warning" id="dropdown-basic" style={{color:'white',fontFamily:" 'Poppins', sans-serif"}} >
Age
  </Dropdown.Toggle>

  <Dropdown.Menu style={{fontFamily:"'Poppins', sans-serif"}}>
    <Dropdown.Item href="#/action-1">Less than 15 years</Dropdown.Item>
    <Dropdown.Item href="#/action-2"> Less than 35 And More than 15  </Dropdown.Item>
    <Dropdown.Item href="#/action-3">More than 35 years</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>



<Dropdown key="down" style={{width:'50%',display:'inline',fontFamily:" 'Poppins', sans-serif"}}>
  <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{color:'white',boxOutline:'none',border:'none'}} >
Goal
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Goal 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2"> Goal 2 </Dropdown.Item>
    <Dropdown.Item href="#/action-3"> Goal 3 </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>



<button className='btn btn-warning' style={{color:'white',width:'50%',textAlign:'center',margin:'2vh',display:'inline',height:'2.5rem',fontFamily:" 'Poppins', sans-serif"}}>
<p>
Get fit now
  </p>  
</button>

</div>


</div>

</div>

</div>


    )
}

export default First
