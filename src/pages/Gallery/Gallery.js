import React from 'react'

import Carbon from '../Carbon/carbonHealth.js'
import CoachInfo from '../CoachInfo/CoachInfo'
import Webinars from '../Webinars/Webinars'
import SignUp from '../SignUp/SignUp'
import MyFit from '../MyFit/MyFit'
import WellnessLiving from '../WellnessLiving/WellnessLiving'

const Gallery = () => {
    return (
        <React.Fragment>
            
           <Carbon/>
           <div style={{marginBottom:'2vh'}}>
           <CoachInfo/> 
           </div>

           <div style={{marginBottom:'2vh'}}>
           <Webinars/> 
           </div>

           <div style={{marginBottom:'2vh'}}>
           <SignUp/> 
           </div>

           <div style={{marginBottom:'2vh'}}>
           <MyFit/> 
           </div>

           <div style={{marginBottom:'2vh'}}>
           <WellnessLiving/>                
           </div>



        </React.Fragment>
    )
}

export default Gallery
