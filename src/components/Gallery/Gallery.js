import React from 'react'

import C3 from '../../assets/C3.jpg'

const Gallery = () => {


const data=[

{
        title:'Intro Club',
        desc:'Introduction to yoga'
},
{
    title:'Club 1',
    desc:'Vinyasa Flow Level 1 '
},
{
    title:'Club 2',
    desc:'Vinyasa Flow Level 2 '
},{
    title:'Club 3',
    desc:'Vinyasa Flow Level 3 '
},{
    title:'Club 4',
    desc:'Vinyasa Flow Level 4 '
},{
    title:'Club 5',
    desc:'Vinyasa Flow Level 5 '
}


]

    return (
        <div className="row" style={{minHeight:'50vh',width:'100%',marginTop:'10vh'}}  >
            


{
    data.map((data,i)=>(

<div key={i+1} className="col-md-4" style={{display:'flex', flexDirection:'column', align:'center',justifyContent:'center',padding:20}}  >

<img

src={C3}

style={{width:'80%', margin:'auto',textAlign:'center'}}

/>


<h2 style={{fontWeight:'bold',textAlign:'center',margin:20}} >

{
    data.title
}
</h2>

<h5 style={{textAlign:'center',opacity:0.7}} >
{data.desc}
</h5>


</div>


    ))
}




        </div>
    )
}

export default Gallery
