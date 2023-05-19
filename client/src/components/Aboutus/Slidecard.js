import React from 'react'
import "./Slidecard.css";
function Slidecard(props) {
  return (
    <div className='slidecard'>
        <div className='cardimg'>
            <img src={props.img}/>
        </div>
        <div className='cardTitle'>
        {props.title}
        </div>
        <p>Description</p>
    </div>
  )
}

export default Slidecard;