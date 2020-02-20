import React, { useState, useEffect } from 'react';
import loginService from './services/login'
import blogService from './services/blogs'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [blogs, setBlogs] = useState([])
  
  useEffect(()=>{
    getBlogs()
  }, [])

  const getBlogs = async() =>{
    const blogs = await blogService.getAll()
    setBlogs(blogs)
    console.log(blogs)
  }

  const handleLogin = async (event) =>{
    console.log("logging in!")
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: username, 
        password: password
      })
      setUser(user)
      setUsername('')
      setPassword('')
      console.log(user.username)
    }catch(exception){
      setErrorMessage('Wrong credientials')
      setTimeout(()=>{
        setErrorMessage(null)
      }, 5000)
    }
  }

  const printBlog = () =>blogs.map(blog=>{
    return (
      <p key={blog.id}>
        {blog.title}  {blog.author}
      </p>
    )
  })
  

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
      <p>{user.username} is logged in</p>
        <>
        {printBlog()}
        </>
    </div>
  )
}

export default App;
