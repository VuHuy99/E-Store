import React, { useState } from 'react'
import './Products.scss'
import List from '../../List/List';
import {  useParams } from 'react-router-dom';
import useFetch from '../../Hook/UseFetch';
function Products() {
  
  
 const catid = parseInt(useParams().id)  //lấy id sản phẩm hiện tại
 console.log(catid)
  const   [maxPrice,setmaxPrice]=useState(50000000);
  const [sort,setsort] = useState(null);
  const [selectedbrands,setselectedbrands] =useState([]);

  const{data} = useFetch(`/brands?[filters][catagories][id][$eq]=${catid}`)
  console.log(data)

  const handlechange =(e) =>
  {
          const value = e.target.value;
          const checked =e.target.checked;

          setselectedbrands (checked ? [...selectedbrands,value] : selectedbrands.filter(item =>item !== value)  );
  };
  console.log(selectedbrands)
  
  return (
    <div className='products'>
     <div className="left-products">
    
      <div className="fitteritem" >
      <h2>Hãng sản xuất</h2>

      {data?.map((item) =>(<div className="inputitem" key={item.id}  >
      
      <input type='checkbox' id={item.id}  value={item.id} onChange={handlechange} />
      <label htmlFor={item.id}> {item.attributes.title}  </label>
     
     
     </div>
     
     ))}


      </div>

      <div className="fitteritem">
        <h2>Chỉnh với giá tiền phù hợp</h2>
        <div className='inputitem'>
        <span>0</span>
        <input type="range" min={0} max={50000000} onChange={(e)=>setmaxPrice(e.target.value)}/>
        <span>{maxPrice}</span>
        </div>      
        </div>
        <div className="fitteritem">
           <h2> Lọc bằng </h2>  
        <div className="inputitem">
          <input type='radio' id='asc' value='asc' name='price' onChange={(e)=>setsort('asc')} />
          <label htmlFor='asc' > Giá thấp nhất </label>
          </div>
          <div className="inputitem">
          <input type='radio' id='desc' value='desc' name='price'onChange={(e)=>setsort('desc')} />
          <label htmlFor='desc' > Giá cao nhất </label>
          </div>        
          </div>    
      </div>        
      <div className="right-products">
      <img src='../img/1-2.png' alt='' className='productsimg'/>
         
      <List catid={catid}  maxPrice={maxPrice} sort={sort}  brandid={selectedbrands}  />
      
      </div>   
    </div>
  )
}

export default Products