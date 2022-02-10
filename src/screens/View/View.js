import React from 'react'
import "./Styles.css";
import background from "../../assets/images/b.jpg"
const ViewEvent = () => {
  return (
    <div className='eventContainer'>
        <div className='eventCard'>
        <div className='eventImage'>
            <img src={background} height="100%" width="100%"/>
        </div>
        <div className='eventInfo'>
        <div className='location'>Kozhikode</div>
        <div className='date'>12 feb 2022</div>
        </div>
        <div className='eventDetails'>
        <div className='heading'> Birthday party </div>
        <div className='desc'> An event to enjoy the birthday party of our daughter</div>

        </div>
        <div className='eventSell'>
        <div className='view'> <button className='viewButton'> View</button></div>
        <div className='prize'></div>
        </div>
        </div>        
    </div>
  )
}

export default ViewEvent
