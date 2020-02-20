import React, { useState, useEffect } from 'react';
import loginService from './services/login'
import blogService from './services/blogs'

const BlogForm = (props) =>{
  const { createBlog, title, setTitle, author, setAuthor, url, setUrl} = props
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createBlog}>
      <div>
        title:
        <input
        type="text"
        value={title}
        name="Title"
        onChange={({target})=> setTitle(target.value)}/>
      </div>
      <div>
        author:
        <input 
        type = "text"
        value = {author}
        name = "Author"
        onChange={({target})=> setAuthor(target.value)}/>
      </div>
      <div>
        url:
        <input 
        type = "text"
        value = {url}
        name = "Url"
        onChange={({target})=> setUrl(target.value)}/>
      </div>
      <button type= "submit">create</button>
    </form>
    </div>
  )
}

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  
  useEffect(()=>{
    getBlogs()
  }, [])

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const getBlogs = async() =>{
    const blogs = await blogService.getAll()
    setBlogs(blogs)
    console.log(blogs)
  }

  const createBlog = async event =>{
    event.preventDefault()
    try{
       const newBlog = await blogService.create({
        'title': title,
        'author': author,
        'url': url
      })
      setBlogs(blogs.concat(newBlog))
      setTitle('')
      setAuthor('')
      setUrl('')
    }catch(exception){
      console.log(exception)
    }
  }

  const handleLogin = async (event) =>{
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: username, 
        password: password
      })

      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')

    }catch(exception){
      setErrorMessage('Wrong credientials')
      setTimeout(()=>{
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () =>{
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
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
      <p>{user.username} is logged in! <button onClick={handleLogout}>logout</button></p>
      <br></br>
        <BlogForm 
        createBlog={createBlog}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        url={url} setUrl={setUrl}/>
        {/* {printBlog()} */}
        
    </div>
  )
}

export default App;
