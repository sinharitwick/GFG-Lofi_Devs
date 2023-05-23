import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Landcard.css'

function Landcard({ location, price }) {
  return (
    <div className='product'>
        <div className="image">
            <img src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="namePrice">
            <h3>Farmland</h3>
            <span>₹ {price}</span>
        </div>
        <div className='tags'>
            For Rent
        </div>
        <p>
            <LocationOnIcon />
            {location}
        </p>
        <div className="bay">
            <button>Book Now</button>
        </div>
    </div>
  )
}

export default Landcard