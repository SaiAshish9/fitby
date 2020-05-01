import React from 'react'

import {MdKeyboardArrowDown} from 'react-icons/md'

import {Row,Col} from 'react-bootstrap'

import {Link} from 'react-router-dom'

import {IoIosArrowDropdown,IoIosSquare} from 'react-icons/io'

import {GiPineTree} from 'react-icons/gi'

import {FaLeaf,FaAppleAlt,FaFacebookF,FaTwitter,FaPinterestP} from 'react-icons/fa'

import {MdLocalGroceryStore} from 'react-icons/md'


const bottomUrls=[
    'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/10/26/11/10/honey-1006972_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-cone-1274894_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_960_720.jpg'
]

const socialLinks=[
    <FaFacebookF/>,
    <FaTwitter/>,
    <FaPinterestP/>
]

const Yaro = () => {




const freeData=[
    {
        data:'GLUTEN FREE',
        icon:<GiPineTree style={{color:'#f1935c',fontSize:50,fontWeight:'bold',margin:5}}/>
    },
    {
        data:'GMO FREE',
        icon:<FaLeaf  style={{color:'#f1935c',fontSize:50,fontWeight:'bold',margin:5}}/>
    },
    {
        data:'USDA ORGANIC',
        icon:<FaAppleAlt  style={{color:'#f1935c',fontSize:50,fontWeight:'bold',margin:5}}/>
    }
    
  
    
]

const candlesData=[
    'Sugar,gluten,lactose,preservatives or chocate FREE.',
    'Use only natural sweeteners : dates,Jerusalem artichoke syrup,coconut sugar',
    'Carob instead of chocolate',
    'The basis of sweets is nuts,seeds,berries,and dried fruits',
    'Instead of the usual flour we use coconut flour (coconut flour - is miled and dried coconut meat)'
]


const navLinks=[
    'about us',
    'catalog',
    'our sweets',
    'founder',
    'contacts'
]

    return (
        <div style={{
             width:'100vw',overflowX:'hidden !important',
position:'absolute',
left:0,
right:0
}}>
            
<div style={{
    height:'10vh',
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
}}>



<p
style={{
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold',
    fontSize:30,
    margin:20,
    marginLeft:'5vh',
    cursor:'pointer'
}}
>
YARO
</p>






<div
style={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around'
}}
>

{
        navLinks.map((i,k)=>(
<p
key={k}
style={{
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold',
    fontSize:14,
    marginRight:35,
    textTransform:'uppercase'
}}
>
{i}
</p>      
      
      ))
}

<p
style={{
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold',
    fontSize:14,
    marginRight:35,
    textTransform:'uppercase',
    color:'#f1935c',
    cursor:'pointer'
}}
>
EN
<MdKeyboardArrowDown
style={{
    fontSize:20,
    marginLeft:3
}}
/>

</p>    

</div>
</div>

<Row
style={{
    width:'100%',
    height:'90vh',
    paddingLeft:'10vw'
}}
>

<Col
lg={4}
style={{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column'
}}

>

<h2
style={{
    fontSize:70,
 postion:'absolute',
 width:'50vw',
 zIndex:1,

 }}
>
    We create<br/> meaningful meals
</h2>


<p
style={{
    fontSize:15,
    color:'#999',
    width:'30vw',
    fontFamily:" 'Poppins', sans-serif",
    margin:'10px 0'
}}
>
We know for sure that healthy food can be tasty,while healthy lifestyle can bring pleasure.No need to count calories and spend much of your time.We took care of everything. 
</p>


<Link
style={{
    background:'#f1935c',
    color:'white',
    height:'6vh',
    width:'30%',textAlign:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:15,
    fontWeight:'bold',
    margin:'14px 0',
    textDecoration:'none'

}}
>
CATALOG
</Link>


<p
style={{
    color:'#f1935c',
    fontSize:10,
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    cursor:'pointer',
    marginTop:20
}}
>
    <IoIosArrowDropdown
    style={{
        marginRight:2,
       fontSize:15,
       fontWeight:'bold'
    }}
    />

SCROLL DOWN
</p>

</Col>

<Col
lg={8}
style={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}}
>

<div 

style={{
    height:'70vh',
    width:'90%',
    background:"url('https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg')",
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat'

}}
>

</div>

<div
style={{
    height:'70vh',
    width:'10%',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    background:'#f1935c'
    // background:"url('https://cdn.pixabay.com/photo/2016/02/08/08/49/snow-1186174_1280.jpg')"
}}
>

</div>


</Col>

</Row>



<Row>

<Col
lg={4}
style={{
    display:'flex',
    alignItems:'center',
    paddingLeft:'20vh'
}}
>

<div 

style={{
    height:'70vh',
    width:'40vw',
    background:"url('https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg')",
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    position:'relative',
    zIndex:1

}}
>

</div>



<div
style={{
    background:'#f1935c',
    position:'absolute',
    left:'5vh',
    top:'50vh',
    width:'15rem',
    height:'15rem'
}}
>



</div>



</Col>


<Col
lg={5}
>

<div
style={{
    width:'100%',
    height:'60vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:'10vh'
}}
>

<p
style={{
    fontWeight:'bold',
    fontSize:30,
    width:'80%'
}}
>

    More information about our candles
 
 </p>

{
    candlesData.map((i,k)=>(

        <p
        key={k}
        style={{
            color:'#999',
            fontSize:12,
            margin:'10px 0',
            fontFamily:" 'Poppins', sans-serif",
        }}
        >
<IoIosSquare
style={{
    color:'#f1935c',
    marginRight:3

}}
/>
{i}
</p>

    ))
}



</div>


<div
style={{
    display:'flex',
    width:'100%',
    height:'20vh',
    justifyContent:'space-around'
}}
>


{
freeData.map((i,k)=>(
<div
key={k}
style={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    cursor:'pointer'
}}
>
{i.icon}
<p
style={{
    color:'#f1935c',
    marginTop:20,
    fontFamily:" 'Poppins', sans-serif"
}}
>
    {i.data}
</p>
</div>
))    
}



</div>


</Col>

<Col
col={3}
style={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}}
>

<div

style={{
    height:'40vh',
    width:'100%',
    background:"url('https://cdn.pixabay.com/photo/2016/10/27/22/12/cake-1776661_1280.jpg')",
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'

}}
>


</div>


</Col>


</Row>



<Row
style={{
    marginTop:'7vh'
}}
>

<Col
lg={4}
style={{
    display:'flex',
    alignItems:'center',
    paddingLeft:'20vh', 
}}
>

<div 

style={{
    height:'50vh',
    width:'15vw',
    background:"url('https://cdn.pixabay.com/photo/2015/09/12/11/39/employees-936804_960_720.jpg')",
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    position:'relative',
    top:'10vh',
    zIndex:1

}}
>

</div>



<div
style={{
    background:'#f1935c',
    position:'absolute',
    left:'5vh',
    top:'10vh',
    width:'12rem',
    height:'20rem'
}}
>



</div>



</Col>


<Col
lg={5}
>

<div
style={{
    width:'100%',
    height:'60vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
}}
>

<p
style={{
    fontWeight:'bold',
    fontSize:30,
    width:'70%'
}}
>

    Tony Starks <br/> the founder of YARO
 
 </p>



        <p
    
        style={{
            color:'#999',
            fontSize:15,
            margin:'20px 0',
            fontFamily:" 'Poppins', sans-serif",
        }}
        >

Lorem ipsum dolor sit amet, ius tota delectus dissentias an, in mazim singulis quaerendum sit, te sit rebum deleniti. Mutat labore audire usu ei, error corpora mea ad. At nam eros nonumes similique. Graece numquam at his.
<br/>
</p>
<p
 style={{
    color:'#999',
    fontSize:15,
    margin:'20px 0',
    fontFamily:" 'Poppins', sans-serif",
    marginTop:'3vh'
}}
>
Quas complectitur in mel, in dicit semper corpora usu. Amet nostrum interesset cum ea. Mea te hinc putant scaevola, ut brute audiam cum. Ius ea idque movet. Case patrioque consequat no mea, ad his ceteros ullamcorper. In everti elaboraret inciderint eos, his no quis scribentur.

</p>




</div>


<div
style={{
    display:'flex',
    width:'100%',
    height:'20vh',
    justifyContent:'space-around'
}}
>






</div>


</Col>

<Col
col={3}
style={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}}
>

<div

style={{
    height:'30vh',
    width:'100%',
    background:"url('https://cdn.pixabay.com/photo/2016/08/12/07/37/red-1587846_1280.jpg')",
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover', 
    marginRight:70
}}
>


</div>


</Col>


</Row>

<div
style={{
    marginTop:'7vh',
    width:'100%',
    height:'60vh',
    background:'#f4f4f4',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'column',
    padding:140
}}
>

<p
style={{
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold'
}}
>
    Our Sweets
</p>

<div
style={{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center'
}}
>

{
    [...Array(2).keys()].map((i,k)=>(
        <div
        key={k}
        style={{
            position:'relative',
            zIndex:1
        }}
        >

        <div
        style={{
            background:'white',
            width:'17rem',
            height:'35vh',
            margin:20,
            background:`${k<2 ?
                
                k===0?
                "url('https://cdn.pixabay.com/photo/2014/12/13/19/44/chocolate-567234_960_720.jpg')"
                :
                "url('https://cdn.pixabay.com/photo/2014/02/08/11/28/bun-261677_960_720.jpg')"
                :""
             } `,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat: 'no-repeat'
        }}
        >

        </div>
        

{
    k<2?(
        <div>
        <p
        style={{
            margin:'0 20px',
            fontSize:14,
            fontWeight:'bold',
            fontFamily:" 'Poppins', sans-serif"
        }}
        >
        A set of sweets "Coco & Caramel"

    </p>


    <p
        style={{
            margin:'0 20px',
            fontSize:12,
            color:'#999',
            fontFamily:" 'Poppins', sans-serif"
        }}
        >
     Vitamin 200 g 

    </p>


    <p
        style={{
            margin:'0 20px',
            fontSize:12,
            fontWeight:'bold',
            fontFamily:" 'Poppins', sans-serif"
        }}
        >
        10 $

    </p>
    </div>
    ):null
}



       

    </div>


    ))
}


<div
style={{
    width:'15vw',
    height:'43vh',
    background:'#fff',
    marginLeft:20,
    position:'relative',
    zIndex:1
}}
>

<div

style={{
    display:'flex',
    justifyContent:'space-between',
    padding:20
}}>
    <p
    style={{
        fontSize:12,
        fontFamily:" 'Poppins', sans-serif",
        fontWeight:'bold'
    }}
    >
Caramel

<br/>
<span style={{color:'#999'}}>
    Vitamin 100 g
</span>

    </p>

    <p
    style={{
        fontSize:12,
        fontFamily:" 'Poppins', sans-serif",
        fontWeight:'bold'
    }}
    >    10 $
</p>

</div>


{
    candlesData.map((i,k)=>(

        <p
        key={k}
        style={{
            color:'#999',
            fontSize:12,
            margin:'10px 0',
            fontFamily:" 'Poppins', sans-serif",
            marginLeft:20,
            marginTop:5
        }}
        >
<IoIosSquare
style={{
    color:'#f1935c',
    marginRight:3

}}
/>
Delicious
</p>

    ))
}

    
</div>

<div 
style={{
    position:'absolute',
    zIndex:0,
    background:'#f1935c',
    width:'100%',
    height:'8vh'
}}
>

</div>



</div>

</div>








<Row
style={{
    marginTop:'7vh',
    paddingRight:'5vw'
}}
>

<Col
lg={4}
style={{
    display:'flex',
    alignItems:'center',
    paddingLeft:'20vh', 
}}
>

<div 

style={{
    height:'50vh',
    width:'20vw',
    background:"url('https://cdn.pixabay.com/photo/2015/08/25/16/12/lime-907124_960_720.jpg')",
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    position:'relative',
    bottom:'5vh',
    zIndex:1

}}
>

</div>







</Col>


<Col
lg={8}
>

<div
style={{
    width:'100%',
    height:'60vh',
    display:'flex',
    flexDirection:'row',
}}
>
<div>

<p
style={{
    fontWeight:'bold',
    fontSize:30,
    width:'90%'
}}
>

Contact Us 
 </p>




 <div
style={{
    display:'flex',
    width:'100%',
    minHeight:'20vh',
}}
>

<div


>

<p
style={{
    color:'#999',
    fontFamily:" 'Poppins', sans-serif",
    fontSize:12
}}
>
    Email
</p>

<p
style={{
    color:'#000',
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    fontSize:12
}}
>
    info@yaro.com
</p>

<p
style={{
    color:'#999',
    fontFamily:" 'Poppins', sans-serif",
    fontSize:12
}}
>Address
</p>


<p
style={{
    color:'#000',
    fontWeight:'bold',
    fontFamily:" 'Poppins', sans-serif",
    fontSize:12
}}
>10 A, Janakpuri,New Delhi,India

</p>


<p
style={{
    color:'#999',
    fontFamily:" 'Poppins', sans-serif",
    fontSize:12
}}
>Follow Us
</p>

<div
style={{
    display:'flex',
    justifyContent:'space-between',
    width:'80%'
}}
>


{
  
  socialLinks.map((i,k)=>(
    <Link
    key={k}
    style={{
        height:40,
        width:40,
        textDecoration:'none',
        background:'#f1935c',
        color:'white',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
justifyContent:'center',
fontSize:12
    }}
    >
{i}
    </Link>
  ))

}

  
</div>

</div>


<div
style={{
    marginLeft:'20vh',
    width:'30%'
}}
>

<input
placeholder="Full Name"
type="text"
style={{
    border:'1px solid #999',
    outline:'none',
    width:'80%',
    padding:10,
    fontFamily:"Poppins,'sans-serif'",
    color:'#999',
    fontSize:12,
    width:'150%'
}}

/>
<input
placeholder="Email"
type="text"
style={{
    border:'1px solid #999',
    borderTop:'none',
    width:'80%',
    outline:'none',
    padding:10,
    fontFamily:"Poppins,'sans-serif'",
    color:'#999',
    fontSize:12,
    width:'150%'
}}

/>

<textarea
placeholder="Message"
style={{
    border:'1px solid #999',
    borderTop:'none',
    height:'15vh',
    width:'80%',
    outline:'none',
    padding:10,
    fontFamily:"Poppins,'sans-serif'",
    color:'#999',
    fontSize:12,
    width:'150%'
}}

/>


<Link
    style={{
        height:'5vh',
        width:'24rem',
        textDecoration:'none',
        background:'#f1935c',
        color:'white',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
justifyContent:'center',
fontWeight:'bold',
fontSize:12,
marginTop:10
    }}
    >
Send
    </Link>

</div>
</div>
</div>
</div>
</Col>
</Row>



<div
style={{
height:'33vh',
width:'100%',
display:'flex',
justifyContent:'space-around'
}}
>


{
    bottomUrls.map((i,k)=>(
<img
key={k}
src={i}
style={{
    width:'12vw',
    height:'30vh'
}}
/>
    ))
}



</div>



<div
style={{
height:'8vh',
width:'100%',
background:'#f1935c'

}}
>


</div>


<div
style={{
height:'40vh',
width:'100%',
display:'flex',
justifyContent:'space-around'
}}
>

<div
style={{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    fontFamily:"Poppins,'sans-serif"
}}
>
<h1>
    YARO
</h1>

</div>



<div
style={{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center'
}}
>

<p style={{ 
    fontSize:12,
    color:'#f1935c',
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold'
}}>Contact Us</p>

<p style={{ 
    fontSize:12,
    color:'#999',
    fontFamily:" 'Poppins', sans-serif"
}}>1234567890</p>

<p style={{ 
    fontSize:12,
    color:'#999',
    fontFamily:" 'Poppins', sans-serif"
}}>1234567890</p>
<p style={{ 
    fontSize:12,
    color:'#999',
    fontFamily:" 'Poppins', sans-serif"
}}>1234567890</p>


</div>


<div
style={{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center'
}}
>

<p style={{ 
    fontSize:12,
    color:'#f1935c',
    fontFamily:" 'Poppins', sans-serif",
    fontWeight:'bold'
}}>Follow Us</p>

<p style={{ 
    fontSize:12,
    color:'#999',
    fontFamily:" 'Poppins', sans-serif"
}}>Facebook</p>

<p style={{ 
    fontSize:12,
    color:'#999',
    fontFamily:" 'Poppins', sans-serif"
}}>Twitter</p>
<p style={{ 
    fontSize:12,
    color:'#999',
    fontFamily:" 'Poppins', sans-serif"
}}>Instagram</p>


</div>


<div
style={{
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center'
}}
>


    <div
    style={{
        diplay:'flex'
    }}
    >

<img
src='https://cdn.pixabay.com/photo/2016/09/18/20/25/candy-1678933_960_720.jpg'
style={{
    height:50,
    float:'left',
    marginRight:10,
    width:50
}}
/>

<p
style={{
    color:'#999',
    fontSize:20,
    letterSpacing:1,
    fontFamily:"Poppins,'sans-serif'"
}}
>
    MADE IN INDIA
</p>

    </div>


<Link
    style={{
        height:'5vh',
        width:'10rem',
        textDecoration:'none',
        background:'#f1935c',
        color:'white',
        textAlign:'center',
        display:'flex',
        alignItems:'center',
justifyContent:'center',
fontWeight:'bold',
fontSize:12,
marginTop:10
    }}
    >
<MdLocalGroceryStore
style={{
    fontSize:15,
    margin:'0 10px'
}}
/>

Store
    </Link>

</div>


</div>



        </div>
    )
}

export default Yaro
