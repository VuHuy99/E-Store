import React  from 'react'
import './Featuredproducts.scss'
import Card from '../Card/Card'
import useFetch from '../Hook/UseFetch';


function Featuredproducts({type}) {
 
 //fetch data bang axios
 
       const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`); 
    
      
    return (


    <div className='Featuredproducts'>
     <div className="top">
      <h1> Sản phẩm {type}  </h1>


     </div>
     <div className="bottom">
    {      
    
    
      error ? "Bugs"   :  (loading?
      "loading"
      :data.map(item=>(           
        <Card item={item}  key={item.id} />   



       


     )))
   
     }
    

     </div>
    </div>
  )
}

export default Featuredproducts