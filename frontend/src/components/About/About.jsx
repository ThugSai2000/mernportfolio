import React from 'react'
import './About.css'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'


const About = () => {
  const {user} = useSelector((state) =>  state.user)

  return (
    <div className='about'>
      <div className="aboutContainer1">
        <Typography>
           {user?.about.quote}
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
        <img src={user?.about.avatar.url} alt="Mypicture" className='aboutAvatar'/>
        <Typography variant='h4' style={{margin:"1vmax 0", color: "black", textAlign: "center"}}>{user?.about.name}</Typography>
        <Typography variant='h6' style={{margin:"1vmax 0", color: "black", textAlign: "center"}}>{user?.about.title}</Typography>
        <Typography style={{color: "black", textAlign: "center",padding:"15px"}}>{user?.about.subtitle}</Typography>
        </div>
         <div  className="aboutDescription">
            <Typography
            style={{margin:"1vmax 0",
        wordSpacing:"5px",
        lineHeight:"50px",
          letterSpacing:"5px",
           textAlign:"right" }}>
            {user?.about.description}
           </Typography>
         </div>
      </div>
    </div>
  )
}

export default About
