import React from 'react'
import Notification from './Notification'
const BlogTitle =(props) =>{
  const {notice} = props
  return (
  <>
    <h2>Blogs</h2>
    <Notification 
    notice= {notice}
    success={true}/>
  </>
  )
}

export default BlogTitle