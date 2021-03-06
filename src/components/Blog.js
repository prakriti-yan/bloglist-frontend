import React, { useState } from 'react'
import blogService from '../services/blogs'
import '../global.css'

const Blog = (props) => {
  const { blogs, blog, setBlogs, user } = props
  const [visible, setVisible] = useState(false)
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
    <div className='blogSection'>
      <div  key={blog.id} onClick={toggInfo} className='title'>
        {blog.title} by <i>{blog.author}</i>
      </div>
      <div style={infoStyle} className='togglebox'>
        Url: {blog.url}<br/>
        There are {blog.likes} likes for this post
        <button  onClick={addLikes}>like</button>
        <br/>
         Added by <i>{blog.author}</i>
        <br/>
        {(blog.author===user.username) &&
         <button onClick={handleDelete}>remove</button>
        }
      </div>
    </div>
  )
}

export default Blog