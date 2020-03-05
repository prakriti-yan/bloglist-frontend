import React from 'react'
import '../global.css'
import propTypes from 'prop-types'

const BlogForm = (props) => {
  const { createBlog, title, author, url } = props

  const titleAtr = { ...title }
  const authorAtr = { ...author }
  const urlAtr = { ...url }

  delete titleAtr.clearField
  delete authorAtr.clearField
  delete urlAtr.clearField

  return (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={createBlog} className='font'>
        <div className='form-group'>
          <label>Title:</label>
          <input {...titleAtr} />
          <br/>
          <label>Author:</label>
          <input {...authorAtr} />
          <br/>
          <label>Url:</label>
          <input {...urlAtr} />
        </div>
        <button type= "submit">create</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  createBlog: propTypes.func.isRequired,
  title: propTypes.object.isRequired,
  author: propTypes.object.isRequired,
  url: propTypes.object.isRequired
}

export default BlogForm