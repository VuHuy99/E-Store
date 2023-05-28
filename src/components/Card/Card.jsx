import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'



const Card = ({item})  => {
  
  
  
  return (
   
    
 
    
   
   <Link to={`/product/${item.id}`}  className='link' >
   <div className='card'> 
        
        
   
  
   
   <img   src={   process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt='' className='image'/>
   {item?.attributes.isNew    && <span> Sản phẩm mới  </span>   }
   <h2>{item?.attributes.title}</h2>
   
   <div className='price'>
   <div className='oldprice'>  {item?.attributes.price.toLocaleString()}đ</div>
   <h3 className='newprice'>  {item?.attributes.pricediscount.toLocaleString()}đ</h3>
  
   </div> 
   </div>
  
   </Link>

  )
 

}

export default Card