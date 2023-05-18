import {React, useState, useEffect } from 'react'
import Navbar from '../components/UI/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import LandCard from '../components/landlease/Landcard';
import './Landlist.css'

function Landlist() {
  return (
    <div className='landlist'>
        <Navbar />
        <div className="container-landlist">
            <div className="left">
                <p id="quote" className='quote'>Explore new lands</p>
                <div className='left-box'>
                <div className='search-box'>
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                </div>
            </div>
        </div>
        <div className="features">
            <div className='f-container'>
            <p className='f-header'>LAND LISTING</p>
            <div className="products">
                <LandCard />
                <LandCard />
                <LandCard />
                <LandCard />
                <LandCard />
                <LandCard />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landlist;