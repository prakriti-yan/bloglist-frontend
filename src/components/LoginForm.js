import React from 'react'
import Notification from '../components/Notification'

const LoginForm = (props) =>{
	const {handleLogin, username, setUsername, password, setPassword, errorMessage } = props
	return ( 
	  <div>
		<h1>log in to application</h1>
		<Notification 
		notice={errorMessage}
		success={false}
		/>
		<form onSubmit={handleLogin}>
		<div>
		  username
		  <input
		  type="text"
		  value={username}
		  name="Username"
		  onChange={({target})=> setUsername(target.value)}/>
		</div>
		<div>
		  password
		  <input 
		  type = "text"
		  value = {password}
		  name = "Password"
		  onChange={({target})=> setPassword(target.value)}/>
		</div>
		<button type= "submit">login</button>
	  </form>
	  </div>
	)
  }

export default LoginForm