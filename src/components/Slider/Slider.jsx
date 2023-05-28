import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import './Slider.scss'
const Slider=() =>{
  
  const [currentslide,setcurrentslide] = useState(0);
  const data =[
    './img/1-1.png',
    './img/1-2.jpg',
    './img/1-4.jpg',
    './img/1-3.png',
    
];
 const preslide =() => {
       setcurrentslide(currentslide === 0 ? 3 : (prev) =>prev -1 ) //neu trang ht la 0 thi se chuyen den cuoi. nguoc lai -1
 };
 const nextslide =() => {
  setcurrentslide(currentslide === 3 ? 0 : (prev) =>prev +1 )//neu trang ht la 3 thi se chuyen den dau. nguoc lai +1

 };

  
  
  
  
  
  
  
  return (
    <div className='slider'>
     <div className="container" style={{transform:`translateX(-${currentslide*100}vw)`}}>
       <img src={data[0]} alt=''/>
      <img src={data[1]} alt=''/>
       <img src={data[2]} alt=''/>
       <img src={data[3]} alt=''/>
     </div>    
     <div className='icons'>
     <div className="icon" onClick={preslide}  > 
      <WestOutlinedIcon/>
      </div> 
     <div className="icon" onClick={nextslide} >
      <EastOutlinedIcon/>  
      </div>  
     </div>
</div>

  )
}

export default Slider