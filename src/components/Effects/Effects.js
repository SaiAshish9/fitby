import React,{useState} from 'react'

import {Row,Col,Container} from 'react-bootstrap'


import './Effects.css'


const Effects = () => {

const [upper,setUpper]=useState(1)
const [lower,setLower]=useState(3)


    return (
        <div   >


<Container style={{width:'100%',minHeight:'40vh',textAlign:'center'}}>


    <Row  id="large" className=' justify-content-center' >


    <Col 
 xs={12} 
 lg={upper===1?5:3}
 md={8}
onMouseOver={()=>setUpper(1)}
style={{height:'30vh',cursor:'pointer',margin:5}}>

{
    upper===1?(
        <div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-6.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>
    ):(
<div
 style={{display:'flex', width:'100%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-6.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>
    )
}


</Col>



        <Col 
 xs={12} 
    lg={upper===2?5:3}
    md={8}
onMouseOver={()=>setUpper(2)}
style={{height:'30vh',cursor:'pointer',margin:5}}>

{
    upper===2?(
        <div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-7.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>
    ):(
<div
 style={{display:'flex', width:'100%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-7.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>
    )
}


</Col>




<Col 
 xs={12} 
 lg={upper===3?5:3}
 md={8}
 onMouseOver={()=>setUpper(3)}
style={{height:'30vh',cursor:'pointer',margin:5}}>

{
    upper===3?(
        <div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-8.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>
    ):(
<div
 style={{display:'flex', width:'100%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-8.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>
    )
}


</Col>

    </Row>

    </Container>


<Container>

    <Row id="large1" className='justify-content-center'>




    <Col 
    xs={12} 
    lg={lower===1?5:3}
    md={8}
onMouseOver={()=>setLower(1)}
style={{height:'30vh',cursor:'pointer',margin:5}}>

{
    lower===1?(
        <div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-9.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>
    ):(
<div
 style={{display:'flex', width:'100%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-9.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>
    )
}


</Col>










        <Col 
        xs={12} 
        lg={lower===2?5:3}
        md={8}

onMouseOver={()=>setLower(2)}
style={{height:'30vh',cursor:'pointer',margin:5}}>

{
    lower===2?(
        <div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-10.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>
    ):(
<div
 style={{display:'flex', width:'100%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-10.jpg')`,backgroundSize:'contain',backgroundPosition:'center'}} >

</div>
    )
}


</Col>














<Col 
xs={12} 
lg={lower===3?5:3}
md={8}

onMouseOver={()=>setLower(3)}
style={{height:'30vh',cursor:'pointer',margin:5}}>

{
    lower===3?(
        <div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-11.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>
    ):(
<div style={{display:'flex', width:'100%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-11.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>
    )
}


</Col>

    </Row>


<Row id="small1" className="justify-content-center" >

<Col 
 xs={12} 
 md={8}
style={{height:'30vh',cursor:'pointer',margin:5}}>

<div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-6.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>

</Col>

<Col 
 xs={12} 
 md={8}
style={{height:'30vh',cursor:'pointer',margin:5}}>

<div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-7.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>

</Col>

<Col 
 xs={12} 
 md={8}
style={{height:'30vh',cursor:'pointer',margin:5}}>

<div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-8.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>

</Col>





</Row>




<Row id="small" className="justify-content-center" >

<Col 
 xs={12} 
 md={8}
style={{height:'30vh',cursor:'pointer',margin:5}}>

<div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-9.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>

</Col>

<Col 
 xs={12} 
 md={8}
style={{height:'30vh',cursor:'pointer',margin:5}}>

<div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-10.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>

</Col>

<Col 
 xs={12} 
 md={8}
style={{height:'30vh',cursor:'pointer',margin:5}}>

<div style={{width:'100%',height:'30vh',display:'flex'}}>
<div style={{width:'50%',height:'30vh',background:`url('https://bridge321.qodeinteractive.com/wp-content/uploads/2020/01/home-image-11.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >

</div>

<div style={{width:'50%', height:'30vh',background:'#f4f4f4'}} >

</div>
</div>

</Col>





</Row>






















    </Container>




        </div>
    )
}

export default Effects 
