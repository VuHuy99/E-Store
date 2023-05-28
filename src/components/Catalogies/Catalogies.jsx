import React from 'react'
import "./Catalogies.scss"
import { Link } from 'react-router-dom'
function Catalogies() {
  return (
    <div className='catalogies'>
        <div className="col">
          <div className="row">   <img src="https://images.pexels.com/photos/3250815/pexels-photo-3250815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />  
                                <Link to='/products/1'> Smartphone </Link>
           
          
                 </div>  
          <div className="row">  <img src="https://images.pexels.com/photos/3250815/pexels-photo-3250815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />  
                                <Link to='/products/1'> Smartphone </Link>
                  
          
          
          
           </div>        
        </div>

        <div className="col">
        <div className="row">       <img src="https://images.pexels.com/photos/2320369/pexels-photo-2320369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />  
                                <Link to='/products/1'> Smartphone </Link>    
        
        
        </div>       
        </div>    
        <div className="col col-l" >
        <div className="row"> 
        <div className="col">
           <div className='row'> <img src="https://images.pexels.com/photos/2320369/pexels-photo-2320369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />  
                                <Link to='/products/1'> Smartphone </Link>  
           
           
           
           </div>  
             
    
               </div>    
               <div className="col">
               <div className="row">  <img src="https://images.pexels.com/photos/2320369/pexels-photo-2320369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />  
                                <Link to='/products/1'> Smartphone </Link>  
               </div>  
        </div>
        </div>
        <div className="row">         <img src="https://images.pexels.com/photos/2320369/pexels-photo-2320369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />  
                                <Link to='/products/1'> Smartphone </Link>     
          </div>
        
        
        </div>
    </div>
    
  )
}

export default Catalogies