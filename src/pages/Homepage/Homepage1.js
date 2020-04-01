import React,{useState,useEffect} from 'react'

import Navbar from '../Navbar/Navbar'

// import request from 'request'

// const url="https://us19.api.mailchimp.com/3.0/lists/3488d38347
// "Authorization": "Sai 419e73540

import './Homepage.css'

import Demo from './demo.png'

const Homepage = () => {


// useEffect(()=>{

// var data={
//     members:[
//         {
//             email_address:'saiashish7777@gmail.com',
//             status:'subscribed',
//                 }
//     ]
// }
// var url= "https://us19.api.mailchimp.com/3.0/lists/3488d38347"

//     var option={
//         // url:'https://us19.api.mailchimp.com/3.0/lists/3488d38347',
//         method:'POST',
//         mode:'no-cors',
//         headers:{
//             // 'Authorization': 'Sai 392a3faeb21e5d81bddba52bd355ce2b-us19',
//             "Authorization":"Sai d34e579dc1bcac0ed51adb56571d04d6-us20",
//             'Content-Type': 'application/json'
//         // },
//         // json:{
//         //     email_address:'saiashish7777@gmail.com',
//         //     status:'subscribed' 
//         // }
//         },
//         body:JSON.stringify(data)
//         }

// request(option,function(e,r,body){
//     if(e){
//         console.log(e)
//     }else{
//         console.log(r.statusCode)
//         console.log(r)
//     }
// })

// fetch(url,{
//     method:'POST',
//     mode:'no-cors',
//     headers:{
//         "Authorization":"Sai 392a3faeb21e5d81bddba52bd355ce2b-us19",
//         'Content-Type': 'application/json'  
//       },
//     body: JSON.stringify(data)    
// })
// .then(res=>res.json())
// .then(res=>console.log(res))
// .catch(e=>console.log(e))

// },[])


    return (
        <div className='main'>
       <Navbar/>


<div className='row' style={{display: 'flex',alignItems: 'center',marginTop:'20vh'}}>

<div className="col-md-6 demo" >

<img  className='demo' src={Demo} alt="wait" style={{width:'30vw',height:'50vh',marginLeft:'10vw'}} />

</div>


<div className='col-md-6' style={{margin:'auto',display:'flex',textAlign:'center',flexDirection:'column',justifyContent:'center',padding:'3rem',background:'white',borderRadius:20}}>

<h3 style={{display:'bold',textAlign:'left'}}>Stay Home,Stay Fit.</h3>

<p style={{width:'85%',textAlign:'left',fontSize:'1.3rem',fontWeight:'lighter'}}>
At this hour of pandemic our team of nutritionists, dietitians and trainers have created an E book of all possible information and plans that you need in order to stay fit and have an healthy immune system. 
</p>

<input type="text" className="form-control" placeholder="Your Name" style={{boxShadow: 'none',background:'#f4f4f4',border:'none',opacity:0.7}}/>

<input type="email" className="form-control" placeholder="E-mail Address" style={{boxShadow: 'none',background:'#f4f4f4',border:'none',opacity:0.7,marginTop:15}}/>

<button className='btn btn-success' style={{color:'white',boxShadow:'none', opacity:0.8,fontWeight:'bold',marginTop:10,width:'9rem'}}

onClick={(e)=>{
    e.preventDefault()
}}
>
Get Your Ebook
</button>

<a href="https://www.who.int/" style={{color:'black'}} target="_blank" rel="noopener noreferrer">

<h4 style={{textAlign:'center',marginTop:50,width:'85%'}}>
    Stop the spread. Help share accuate information about Covid-19
</h4>

</a>

</div>




</div>

        </div>
    )
}

export default Homepage
