import React from 'react'

const Notification = (props) =>{
	const {notice, success} = props
	const noticeStyle = {
		  color: success? 'green' : 'Red',
		  background:'lightgrey',
		  fontSize: 20,
		  borderStyle: 'solid',
		  borderRadius: 5,
		  padding: 10,
		  marginBottom: 10
	}
	if (notice !== null){
	return(
	  <div style= {noticeStyle}>
		  {notice}
	  </div>
	)}
	else{
	  return null
	}
  }

  export default Notification