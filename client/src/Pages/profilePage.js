import React from 'react'
import "./profile.css";
function profilePage() {
  return (
    <div className='profile'>
        <div className='profileCover'>

        </div>
        <div className='profileImg'>

        </div>
        <div className='profileDetails'>
            <p>Bikramjit Das</p>
            <p>guwahati,Assam</p>
            <div className='profileMessage'>
                <button className='message'>Message</button>
                <p>Jan 2023</p>
            </div>
        </div>
    </div>
  )
}

export default profilePage