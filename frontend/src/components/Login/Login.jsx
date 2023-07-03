import React, { useEffect, useState } from 'react'
import { Typography,Button} from '@mui/material'
import './Login.css'
import {login} from "../../action/user"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")

    const dispatch = useDispatch()
    const alert = useAlert()

    const {loading, message, error} = useSelector((state) => state.login)
    
    const loginFormHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }

    useEffect(()=>{
      if (error) {
        alert.error(error)
        dispatch({
          type: "CLEAR_ERRORS"
        })
      }
      if (message) {
        alert.success(message)
        dispatch({
          type: "CLEAR_MESSAGE"
        })
      }
    }, [alert, error, message, dispatch])
  return (
    <div className='login'>
      <div className='loginContainer'>

<form className="loginForm" onSubmit={loginFormHandler}>
    <Typography variant='h4'>
        <p>A</p>
        <p>D</p>
        <p>M</p>
        <p>I</p>
        <p  style={{marginRight:"1vmax"}}>N</p>
        <p>P</p>
        <p>A</p>
        <p>N</p>
        <p>E</p>
        <p>L</p>
    </Typography>

    <input type="email" placeholder="Admin Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input  type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <Button type="submit" variant='contained' disabled={loading}>Login</Button>
</form>
      </div>
    </div>
  )
}

export default Login
