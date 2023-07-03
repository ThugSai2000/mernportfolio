import React from "react"
import "./YoutubeCard.css"
import { Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { deleteYoutube, getUser } from "../../action/user"
import { FaTrash} from "react-icons/fa"
const YoutubeCard = ({
  url = "",
  title = "",
  image,
  isAdmin = false,
  id,
}) => {
  
  const {user} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const deleteHandler = async (id) =>{
    await dispatch(deleteYoutube(id))
    dispatch(getUser())
  }

  

  return (
    <div className="youtubeCard">
        {
        user && user.youtube &&
        user.youtube.map((item) => (
          <a href={item.url} target="blank">
          <img src={item.image.url} alt="video" />
        <Typography>{item.title}</Typography>
          </a>      

        ))
      }
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
  )
}

export default YoutubeCard
