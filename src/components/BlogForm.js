import React from 'react'
import '../global.css'

const BlogForm = (props) => {
  const { createBlog, title, setTitle, author, setAuthor, url, setUrl } = props
  return (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={createBlog} className='font'>
        <div className='form-group'>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}/>
          <br/>
          <label>Author:</label>
          <input
            type = "text"
            value = {author}
            name = "Author"
            onChange={({ target }) => setAuthor(target.value)}/>
          <br/>
          <label>Url:</label>
          <input
            type = "text"
            value = {url}
            name = "Url"
            onChange={({ target }) => setUrl(target.value)}/>
        </div>
        <button type= "submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm