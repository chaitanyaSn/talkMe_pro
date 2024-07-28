import React from 'react'
import "./myStyle.css"
import Sidebar from './Sidebar'
import Work from './Work'

const MainContainer = () => {
  return (
    <div className='main-container'>
        <Sidebar/>
        <Work/>
   
    </div>
  )
}

export default MainContainer
