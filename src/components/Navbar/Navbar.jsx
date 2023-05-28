import React, { useState } from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Navbar.scss"
import Minicart from '../Minicart/Minicart';
import { useSelector } from 'react-redux';



const Navbar = () => {

   const[open,setopen] = useState(false)
   const products = useSelector(stale => stale.cart.products) //lay store trong gio hang

  return (
    <div className='navbar'>
    <div className='wrapper'>
    <div className='left'>          
           
           <div className='item'>
            <span>VND</span>          
            <ArrowDropDownIcon/>
            </div>               
          <div className='item'>
          <Link className='link' to="/products/1"> Điện Thoại  </Link>
          </div>
          <div className='item'>
          <Link className='link' to="/products/2"> Máy Tính Bảng  </Link>
          </div>
          <div className='item'>
          <Link className='link' to="/products/3"> SmartWatch   </Link>
          </div>
         
   </div>
   <div className='center'> 
          <Link className='link' to="/"> E-Store   </Link>
        
   </div>
   <div className='right'>
   
   <div className='item'>
   <Link className='link' to="/"> Trang chủ  </Link>
   </div>
   <div className='item'>
   <Link className='link' to="/"> Giới thiệu  </Link>
   </div><div className='item'>
   <Link  className='link'to="/"> Liên lạc  </Link>
   </div><div className='item'>
   <Link className='link' to="/"> Cửa hàng  </Link>
   </div>
    <div className='icon'>
        <SearchIcon/>
        <PersonOutlineIcon/>
        <FavoriteBorderIcon/>
   <div className='carticon'onClick={()=>setopen(!open)} >
   <ShoppingCartOutlinedIcon/> 
   <span>{products.length}</span>
   </div>
   </div>
   </div>
    </div>

    {open && <Minicart/>}
  
    </div>
  )
}

export default Navbar