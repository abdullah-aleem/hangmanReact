import React from 'react'

const Notification = ({showNotification}) => {
  //     --------Working--------
  //it shows the notication when someone 
  console.log('notication AND SHOULD I SHOW', showNotification)
    return (
        <div className={`notification-container ${showNotification?'show':''}`} >
        <p>You have already entered this letter</p>
      </div>
    )
}

export default Notification
