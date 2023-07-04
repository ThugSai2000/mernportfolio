import React from 'react'
import "./Projects.css"
import { Typography } from '@mui/material'
import {AiOutlineProject} from "react-icons/ai" 
import { Button } from '@mui/base'

import { FaRegSmileWink, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject, getUser } from '../../action/user'

export const ProjectCard = ({
    url, projectImage, projectTitle, description, technologies, isAdmin=false, id
}) => {

  const dispatch = useDispatch()
  
  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id))
    dispatch(getUser)
  }
  return (
   <>
   
   <a href={url} className='projectCard' target='black'>
    <div>
    <img className="projectImage"  src={projectImage} alt="ProjectImage" />
     <Typography style={{padding:"10px",fontSize:"30px"}}>{projectTitle}</Typography>
     
    </div>
    <div>
        <Typography variant='h4'  >About Project</Typography>
        <Typography  style={{textAlign:"center"}}>{description}</Typography>
        <Typography variant='h6' 
        >Tech: {technologies}</Typography>
    </div>
    </a>
<div>
    {
            isAdmin && (
              <Button
                style={{margin:"auto",
                      display:"block",
                      color: "rgba(40, 40, 0, 0.7)"
              }} 
              
              onClick={() => deleteHandler(id)}
              >
                <FaTrash />
              </Button>
            )
          }
          </div>
   </>
  
  )
}


const Projects = () => {

  const {user} = useSelector((state) => state.user)
  
  return (
    <div className='projects'>
      
      <Typography variant='h3' className='headingProjects'>Projects <AiOutlineProject /> </Typography>
      <div className="projectWrapper">
        {user && user.projects &&
        user.projects.map((item) =>(
          <ProjectCard
              id={item._id}
              key={item.id}
              url={item.url}
              projectImage={item.image.url}
              projectTitle={item.title}
              description={item.description}
              technologies={item.technologies}
          />
        )
        )}
      </div>
          

    
      <Typography variant='h4' style={{font:"100 1.2rem 'Ubuntu Mono'"}}
      >All The Projects Are Made By Me <FaRegSmileWink /></Typography>
    </div>

    
  )
}

export default Projects
