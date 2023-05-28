import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.scss'
function Contact() {
  return (
    <div className='contact'>
    <div className="wapper">
    <span> LIÊN LẠC VỚI CHÚNG TÔI : </span>
    <div className="mail">
     <input type="email" placeholder='Nhập email'/>
    <button>THAM GIA</button>


    </div>
     <div className="icons">
     <FacebookOutlinedIcon/>
     <InstagramIcon/>
     <TwitterIcon/>
     <GoogleIcon/>
     <GitHubIcon/>



     </div>


    </div>
    
    
    
    </div>
  )
}

export default Contact