import React from 'react'
import Notification from '../components/Notification'
import '../global.css'

const LoginForm = (props) => {
  const { handleLogin, username, setUsername, password, setPassword, errorMessage } = props
  return (
    <div>
      <h2 >Log in to application</h2>
      <Notification
        notice={errorMessage}
        success={false}
      />
      <form onSubmit={handleLogin} className='font'>
        <div className='form-group'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}/>
          <br/>
          <label>Password:</label>
          <input
            type = "text"
            value = {password}
            name = "Password"
            onChange={({ target }) => setPassword(target.value)}/>
        </div>
        <button type= "submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm