import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { resetcart } from '../../../redux/cartreducer';
function Success() {


  const dispatch = useDispatch();
  dispatch(resetcart())
  
  return <div m='90px auto' width="80px" height="5ovh" >



<Alert  security='success' >  <AlertTitle>Thành công </AlertTitle> 

       Bạn đã thanh toán thành công.


</Alert> 
     <strong>         </strong>

  </div>;

  
};

export default Success