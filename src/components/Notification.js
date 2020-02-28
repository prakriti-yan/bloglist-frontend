import React from 'react'

const Notification = (props) => {
  const { notice, success } = props
  const style = success ? 'notice'  :  'alert'
  if (notice !== null){
    return(
      <div className={style}>
        {notice}
      </div>
    )}
  else{
    return null
  }
}

export default Notification