import React, { useState, useEffect } from 'react';
import loginService from './services/login'
import blogService from './services/blogs'
import BlogForm from './components/BlogForm'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogTitle from './components/BlogTitle'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [notice, setNotice] = useState(null)
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
      if (newBlog){
        const message = `a new blog "${newBlog.title}" has been added by "${newBlog.author}"!`
      setNotice(message)
      setTimeout(()=>{
        setNotice(null)
      }, 4000)
      setBlogs(blogs.concat(newBlog))
      setTitle('')
      setAuthor('')
      setUrl('')}
      
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
      setErrorMessage('Wrong username or password!')
      setUsername('')
      setPassword('')
      setTimeout(()=>{
        setErrorMessage(null)
      }, 4000)

    }
  }

  const handleLogout = (event) =>{
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
  }

  

  if (user === null){
    return (
    <LoginForm
    errorMessage={errorMessage}
    handleLogin={handleLogin}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    />)
  }
  return (
    <div>
      <BlogTitle 
      notice= {notice}
      />
      <p>{user.username} is logged in! <button onClick={handleLogout}>logout</button></p>
      <br/>
        <BlogForm 
        createBlog={createBlog}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        url={url} setUrl={setUrl}
        />
       <br/>
       <h2>List</h2>
        {blogs? blogs.map(blog=>
        <Blog 
        key={blog.id}
        blogs={blogs}
        blog={blog}
        setBlogs={setBlogs}
        />)
        :null}
    </div>
  )
}

export default App;
