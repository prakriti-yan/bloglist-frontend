import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogService from './services/blogs'
import BlogForm from './components/BlogForm'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogTitle from './components/BlogTitle'
import Togglable from './components/Togglable'
import './global.css'
import { useField } from './hooks'

function App() {
  const username = useField('text')
  const password = useField('text')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [notice, setNotice] = useState(null)
  const [blogs, setBlogs] = useState([])
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  useEffect(() => {
    getBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const getBlogs = async() => {
    const blogs = await blogService.getAll()
    setBlogs(blogs)
    console.log(blogs)
  }

  const createBlog = async event => {
    event.preventDefault()
    try{
      const newBlog = await blogService.create({
        'title': title.value,
        'author': author.value,
        'url': url.value
      })
      if (newBlog){
        const message = `a new blog "${newBlog.title}" has been added by "${newBlog.author}"!`
        setNotice(message)
        setTimeout(() => {
          setNotice(null)
        }, 4000)
        setBlogs(blogs.concat(newBlog))
        title.clearField()
        author.clearField()
        url.clearField()
      }
    }catch(exception){
      console.log(exception)
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)

    }catch(exception){
      setErrorMessage('Wrong username or password!')
      username.clearField()
      password.clearField()
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)
    }
  }

  const handleLogout = (event) => {
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
        password={password}
      />)
  }
  return (
    <div>
      <BlogTitle
        notice= {notice}
      />
      <p className='font'>{user.username} is logged in! <button onClick={handleLogout}>logout</button></p>
      <br/>
      <Togglable buttonLable='create new note'>
        <BlogForm
          createBlog={createBlog}
          title={title}
          author={author}
          url={url}
        />
      </Togglable>
      <br/>
      <h2 >List</h2>
      {blogs? blogs.map(blog =>
        <Blog
          key={blog.id}
          blogs={blogs}
          blog={blog}
          setBlogs={setBlogs}
          user={user}
        />)
        :null}
    </div>
  )
}

export default App
