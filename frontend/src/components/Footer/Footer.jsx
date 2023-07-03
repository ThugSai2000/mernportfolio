import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {BsGithub,BsYoutube,BsInstagram,BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <div className="footer">
<div>
           <Link to="about">
        <Typography className="footerAboutBtn">About Me</Typography>
        </Link>
        <Link to="contact" className="footerContactBtn">
        <Typography>ContactUs</Typography>
        </Link>
       
      </div>
      <div>
      <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ThugSai2000/" target='blank'>
            <BsGithub/>
        </a>
        <a href="https://www.youtube.com/@pirates_of_web/featured" target='blank'>
            <BsYoutube/>
        </a>
        <a href="https://www.instagram.com/pirates_of_web/" target='blank'>
            <BsInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/sai-kiran-gadi-96677520b/" target='blank'>
            <BsLinkedin/>
        </a>
      </div>
      </div> 

    
      


      
    
  )
}
/*
*/
export default Footer
