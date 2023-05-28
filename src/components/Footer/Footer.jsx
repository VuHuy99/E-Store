import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
    <div className='top'>
    <div className='item'>
      <h1>Danh mục   </h1>
      <Link className='link' to="/products/1"> Điện Thoại  </Link>
      <Link className='link' to="/products/2"> Máy Tính Bảng  </Link>
      <Link className='link' to="/products/3"> SmartWatch   </Link>
      
    </div>
    
    <div className='item'>
      <h1>Hỗ trợ</h1>
     <span>Gửi góp ý</span>
     <span>Địa chỉ</span>
     <span>bản điện thoại</span>
    </div>
    <div className='item'>
      <h1>Giới thiệu</h1>
     <span>
     Đến với thị trường điện thoại di động E-store luôn cạnh tranh bằng sự uy tín với sản phẩm mới, giá hấp dẫn, 
     nhiều ưu đãi dành cho khách hàng của mình.
      </span>
    </div>
    <div className='item'>
      <h1> Liên lạc</h1>
     <span>Gọi mua: 1800.1061 (7:30 - 22:00) </span>
     <span>Khiếu nại: 1800.1063 (8:00 - 21:30)</span>
     <span>Bảo hành: 1800.1065 (8:00 - 21:00)  </span>
    </div>
    

    </div>
    <div className='bottom'>
    <div className="left">
    <span className="logo">       E-store  </span>
    <span className="copy right"> © 2023. All Rights Reserved  </span>
    </div>
    <div className="right">
     <img src='./img/payment.png' alt=''/>


    </div>
    </div>
    </div>
  )
}

export default Footer