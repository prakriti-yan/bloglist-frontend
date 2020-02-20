import React from 'react'
import blogService from '../services/blogs'

const Blog = (props) =>{
  const {blogs, blog, setBlogs} = props

  const handleDelete = async () =>{
    // event.preventDefault()
    if (window.confirm(`Are you sure to remove ${blog.title}`)){
      const response = await blogService.remove(blog.id)
      if (response === 204){
        console.log('successfully deleted!')
        setBlogs(blogs.filter(b=>b.id !== blog.id))
      }
    }
  }
  return(
      <p key={blog.id}>
      {blog.title}  {blog.author} 
      <button onClick={handleDelete}>delete</button>
      </p>
  )
}

export default Blog