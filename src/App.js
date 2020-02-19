import React, { useState } from 'react';
import loginService from './services/login'
import blogService from './services/blogs'

// const Form = (props) => {
//   // const 
//   return (
//     <form onSubmit={handleLogin}>
//       <div>
//         username
//         <input
//         type="text"
//         value={username}
//         name="Username"
//         onChange={({target})=> setUsername(target.value)}/>
//       </div>
//       <div>
//         password
//         <input 
//         type = "text"
//         value = {password}
//         name = "Password"
//         onChange={({target})=> setPassword(target.value)}/>
//       </div>
//       <button type= "submit">login</button>
//     </form>
//   )
// }

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [blog, setBlog] = useState(null)

  const handleLogin = async (event) =>{
    console.log("logging in!")
    event.preventDefault()
    // console.log("name and password are", username, password)
    try{
      const user = loginService.login({
        username: username, 
        password: password
      })
      setUser(user)
      setUsername('')
      setPassword('')
      console.log(user)
      // blogDisplay()
    }catch(exception){
      setErrorMessage('Wrong credientials')
      setTimeout(()=>{
        setErrorMessage(null)
      }, 5000)
    }
  }

  // const blogDisplay =() =>{
  //   const newBlog = blogService.getAll()
  //   setBlog(newBlog)
  //   console.log(blog)
  // }

  if (user === null){
  return ( 
    <div>
      <h1>log in to application</h1>
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
  )}
  return (
    <div>
      <h2>blogs</h2>
      <p>Here are the blogs</p>
    </div>
  )
}

export default App;
