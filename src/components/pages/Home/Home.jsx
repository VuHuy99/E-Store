import React from 'react'
import Slider from '../../Slider/Slider'
import './Home.scss'
import Featuredproducts from '../../Featuredproducts/Featuredproducts'
//import Products from '../Products/Products'
//import Products from '../Products/Products'
//import Catalogies from '../../Catalogies/Catalogies'
import Card from '../../Card/Card'
import useFetch from '../../Hook/UseFetch'
function Home() {

  const { data,loading } = useFetch(
    `/products?populate=*`)





  return (
    <div className='home'>
     <Slider/>
   <Featuredproducts type="Mới về "/>
   
   

   <Featuredproducts type="trending"/>
   <Featuredproducts type="Hiện có"/>
 <div className='List1'>
      {loading ? "Vui lòng chờ" : 
      data?.map(item => (<Card item={item} key={item.id} />
      ))}
 
    </div>
  
    </div>
  )
}

export default Home