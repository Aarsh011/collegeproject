import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { context } from '../../Context/Context'
const main = () => {
  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input,response}= useContext(context);
  return (
    <div className='main'>
      <div className='nav'>
        <p>Lisca</p>
        <img src={assets.download_img} alt=''/>
      </div>
    <div className="main-container">
      {!showResult
        ?<>
      <div className='greet'>
        <p><span>Hello, Buddy!</span></p>
        <p> How can i help you today?</p>
       </div>
       <div className='cards'>
        <div className='card'>
          <p>What qualifications and experiences do the faculty members have? </p>
          <img src={assets.bulb_icon} alt=''/>
        </div>
        <div className='card'>
          <p>Are there any internship or practical learning opportunities included?</p>
          <img src={assets.question_icon} alt=''/>
        </div>
        <div className='card'>
          <p>Who is the M.D of Laureate Institue?</p>
          <img src={assets.bulb_icon} alt=''/>
        </div>
        <div className='card'>
          <p>What courses are offered, and what are their specializations?</p>
          <img src={assets.code_icon} alt=''/>
        </div>
       </div>
      </>
        :<div className='result'>
          <div className='result-title'>
            <img src={assets.download_img} alt=''/>
            <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt=''/>
              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
              </div>
      </div>
    }
       
       <div className="main-bottom">
         <div className="search-box">
           <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt here'/>
         <div>
          <img src={assets.gallery_icon} alt=""/>
          <img src={assets.mic_icon} alt=""/>
          <img onClick={()=>onSent()} src={assets.send_icon} alt=""/>
       </div>
    </div>
    <p className='bottom-info'>
        Lisca may display inaccurate info, including about people, so double-check its response.
      </p>
    </div>
  </div>
  </div>
  )
}

export default main
