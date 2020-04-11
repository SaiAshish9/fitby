import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Bottom.css'

const Bottom = () => {

const icons=[
<FaFacebookF/>,
<FaLinkedinIn/>,
<FaInstagram/>,
<FaTwitter/>
]

    return (
        <div className='row' style={{width:'100%',height:'10vh',marginTop:'90vh'}} >
{
    icons.map((i,k)=>(
        <div key={k} className="col-3" style={{textAlign:'center',padding:20}}>

<Link className="link">
{i}
</Link>

        </div>
    ))
}
        </div>
    )
}

export default Bottom
