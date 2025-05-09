import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { context } from '../../Context/Context'
const sidebar = () => {
  const [extended,setExtended]=useState(false)
  const {onSent,prevPrompts,setRecentPrompt,newChat}= useContext(context)
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
     await onSent(prompt)
  }
   
  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=""/>
        <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon} alt=''/>
            {extended?<p>New Chat</p>:null}
        </div>
            {extended
          
         ?<div className='recent'>
           <p className="recent-title">Recent</p>
{Array.isArray(prevPrompts) && prevPrompts.length > 0 ? (
  prevPrompts.map((item, index) => (
    <div
      onClick={() => loadPrompt(item)}
      key={index}
      className="recent-entry"
    >
      <img src={assets.message_icon || ''} alt="Message Icon" />
      <p>{typeof item === 'string' ? item.slice(0, 18) : 'Invalid prompt'}...</p>
    </div>
  ))
) : (
  <p>No recent prompts available</p>
)}
          
        </div>
        : null
}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
        <img src={assets.question_icon} alt=''/>
       {extended?<p>Help</p>:null}
      </div>
        <div className="bottom-item recent-entry">
        <img src={assets.history_icon} alt=''/>
        {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
        <img src={assets.setting_icon} alt=''/>
        {extended?<p>Settings</p>:null}
        </div>
      </div>   
</div>
  )
}

export default sidebar
