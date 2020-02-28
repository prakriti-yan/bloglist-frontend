import React from 'react'
import Notification from './Notification'
import propTypes from 'prop-types'
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

BlogTitle.propTypes = {
  notice: propTypes.string.isRequired,
}

export default BlogTitle