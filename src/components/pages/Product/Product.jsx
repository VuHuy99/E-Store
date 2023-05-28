
import './Product.scss'
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hook/UseFetch';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../../redux/cartreducer';
function Product() {
 
  const [selectImg,setselectImg]= useState('img');
  const [quantity,setquantity]= useState(1);
  const id = useParams().id;
  
  const dispatch = useDispatch();
  const { data,loading } = useFetch(
    `/products/${id}?populate=*`

  );

  return (
   <div className='product'>
    
 {loading ? ("Vui lòng đợi") : (

  <>


   <div className="left-product">
    <div className="images">
    <img src={process.env.REACT_APP_UPLOAD_URL+ data?.attributes?.img?.data?.attributes?.url} alt='' onClick={e=>setselectImg('img')}/>
    <img src={process.env.REACT_APP_UPLOAD_URL+ data?.attributes?.img2?.data?.attributes?.url} alt=''onClick={e=>setselectImg('img2')}/>
    <img src={process.env.REACT_APP_UPLOAD_URL+ data?.attributes?.img3?.data?.attributes?.url} alt=''onClick={e=>setselectImg('img3')}/>
    </div>
    <div className="mainimage">

    
    <ReactImageMagnify {...{
   smallImage: {
       alt: '',
       isFluidWidth: true,
       src: process.env.REACT_APP_UPLOAD_URL+data?.attributes?.[selectImg]?.data?.attributes?.url
   },
   largeImage: {
       src: process.env.REACT_APP_UPLOAD_URL+data?.attributes?.[selectImg]?.data?.attributes?.url,
       width: 1200,
       height: 1800
   }
}} />


    </div>
   </div>
   <div className="right-product">
    <h1>{data?.attributes?.title}</h1>
    <span className='price'>{data?.attributes?.pricediscount.toLocaleString()} &nbsp; đ</span>   
   <p> {data?.attributes?.desc}  </p>
   <div className="quantify">
     <button  onClick={() =>   setquantity(prev=>prev ===  1 ? 1 : prev -1 )}  >-</button >
       {quantity}
     <button  onClick={() =>   setquantity(prev=>prev +1)}>+</button>
   </div>
   
   
   
   <button className='add' onClick= {()=> dispatch(addtocart(
{
   id:data.id,
   title:data.attributes.title,
   desc: data.attributes.desc,
   img:data.attributes.img.data.attributes.url,
   price:data.attributes.pricediscount,
   quantity,
   idpayment:data.attributes.idpayment,
})) }>


   <AddShoppingCartIcon/>
   ĐẶT MUA
   </button>
   <div className="links">
   <div className='item'> <FavoriteBorderIcon/> Thêm vào ưa thích  </div>
   <div className='item'>  <BalanceIcon/> So sánh </div>
   </div>   
    <div className='info'>
     <span>  loại sản phẩm: {data.attributes?.catagory?.data?.attributes?.title}     </span>
     <span>Thương hiệu: {data.attributes?.brand?.data?.attributes?.title} </span>
<hr/>
    </div>
    <div className='detail'>





    </div>
    </div>



    </>)}

   </div>


  
  )
}



export default Product


// <label for="select" value={data?.attributes?.Color1}  ></label>
//<select id="select"  className='Select' onChange={(e)=>setcolor(e.target.value)} >  
   
  
//<option value={data?.attributes?.Color1}    onClick={(e)=>setcolor(e.target.value)}    >  {data?.attributes?.Color1}      </option>
//<option value={data?.attributes?.Color2}    onClick={(e)=>setcolor(e.target.value)}   >   {data?.attributes?.Color2}      </option>
//<option value={data?.attributes?.Color3}    onClick={(e)=>setcolor(e.target.value)}    >  {data?.attributes?.Color3}      </option>


 //</select>