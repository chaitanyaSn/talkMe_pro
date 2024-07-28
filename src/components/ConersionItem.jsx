import React from 'react'

const ConersionItem = ({props}) => {
  return (
    <div>
     <div className="convo-container">
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-last-message'>{props.lastMessage}</p>
      <p className='con-timeStamp'>{props.timeStamp}</p>
     </div>
    </div>
  )
}

export default ConersionItem
