import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './Minicart.scss'
import { useSelector } from 'react-redux';
import { removeitem, resetcart } from '../../redux/cartreducer';
import { useDispatch } from 'react-redux';
import getStripe from './getStripe';
function Minicart() {
    
    const dispatch = useDispatch();
    const products = useSelector(stale => stale.cart.products)
     console.log(products)
     

     
    const totalprice = () =>{


        let total = 0;
        

        
      products.forEach((item) =>   (total += item.quantity* item.price));
      return total.toLocaleString();
    };
   
  


   
   console.log(products.idpayment)
     let lineItem = [];
 
     products.forEach((item) =>  { 
       lineItem.push(
          {
               price:item.idpayment,
               quantity:item.quantity,
          }
       )
      


      });
      console.log(lineItem);



    async function handleCheckout() {

      
     
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({

           
            lineItems:lineItem,
                
          mode: 'payment',
          successUrl: `http://localhost:3000/success`,
          cancelUrl: `http://localhost:3000/products/1`,
          
        });
        console.warn(error.message);
     }
    return (
    <div className='minicart'>
        <h1>Sản phẩm trong giỏ hàng</h1>
        {products?.map(item=>(
     //       <p>{item.color}</p>
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
                <div className="details">
                    <h1>{item.title} </h1>                  
                    <p>   {item.desc.substring(0,60)}  </p>
                    <p>{item.color}   </p>
                    <div className="price">
                       {item.quantity}&nbsp; x &nbsp;{item.price.toLocaleString()}
              
                    </div>
                </div>
                <DeleteOutlineOutlinedIcon className='delete' onClick={()=>dispatch(removeitem(item.id))} />

            </div>
        ))}
        
        <div className="total">

            <span>TỔNG CỘNG</span>
            <span>{totalprice()}    đ</span>
        </div>
        <button onClick={ handleCheckout}>THANH TOÁN</button>
        <span className='reset' onClick={()=>dispatch(resetcart())}> Xóa giỏ hàng </span>
        
        
        </div>
  )
}

export default Minicart