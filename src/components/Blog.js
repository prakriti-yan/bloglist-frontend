import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = (props) => {
  const { blogs, blog, setBlogs, user } = props
  const [visible, setVisible] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    cursor: 'pointer'
  }
  const infoStyle = {
    display: visible? '':'none'
  }

  const handleDelete = async () => {
    if (window.confirm(`Are you sure to remove ${blog.title}`)){
      const response = await blogService.remove(blog.id)
      if (response === 204){
        console.log('successfully deleted!')
        setBlogs(blogs.filter(b => b.id !== blog.id))
      }
    }
  }
  const toggInfo = () => {
    setVisible(!visible)
    console.log(blog.user)
    console.log(user.username)
  }
  const addLikes = async() => {
    await blogService.update(blog.id, {
      user: blog.user,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    })
    const blogs = await blogService.getAll()
    setBlogs(blogs)
  }

  return(
    <div style={blogStyle}>
      <div  key={blog.id} onClick={toggInfo} className='title'>
        {blog.title}  {blog.author}
      </div>
      <div style={infoStyle} className='togglebox'>
        {blog.url}<br/>
        {blog.likes}likes
        <button  onClick={addLikes}>like</button>
        <br/>
         added by {blog.author}
        <br/>
        {(blog.author===user.username) &&
         <button onClick={handleDelete}>remove</button>
        }
      </div>
    </div>
  )
}

export default Blog