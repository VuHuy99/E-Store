import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../Hook/UseFetch';


 const   List = ({ brandid, maxPrice, sort, catid }) =>   {

  const { data,loading } = useFetch(
    `/products?populate=*&[filters][catagory][id]=${catid}${brandid.map(
      (item) =>`&[filters][brand][id][$eq]=${item}`)}   
      & [filters][price][$lte] =${maxPrice}&sort=price:${sort} `) ;

 console.log(data)
  return (
    <div className='list'>
      {loading ? "Vui lòng chờ" : 
      data?.map(item => (<Card item={item} key={item.id} />
      ))}
 
    </div>
 
  );
};

export default  List
