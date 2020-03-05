import React from 'react'
import Notification from '../components/Notification'
import '../global.css'

const LoginForm = (props) => {
  const { handleLogin, username, password, errorMessage } = props

  const userAtr = { ...username }
  const passAtr = { ...password }

  delete userAtr.clearField
  delete passAtr.clearField

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
          <input {...userAtr} />
          <br/>
          <label>Password:</label>
          <input {...passAtr} />
        </div>
        <button type= "submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm