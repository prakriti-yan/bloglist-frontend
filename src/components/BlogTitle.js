import React from 'react'
import Notification from './Notification'
import '../global.css'

const BlogTitle =(props) => {
  const { notice } = props
  return (
  <>
    <h2 className='header'>Blogs</h2>
    <Notification
      notice= {notice}
      success={true}/>
  </>
  )
}

export default BlogTitle