import {React, useState, useEffect } from 'react'
import Navbar from '../components/UI/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import LandCard from '../components/landlease/Landcard';
import './Landlist.css';
import axios from 'axios';

function Landlist() {
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
          const response = await axios.get('http://34.131.168.190:5000/api/land');
          setCards(response.data);
        } catch (error) {
          console.error('Error fetching cards:', error);
        }
      };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleAddCard = async () => {
        const newCard = {location, price};

        try {
            await axios.post('http://34.131.168.190:5000/api/land', newCard);
            fetchCards();
            setLocation('');
            setPrice('');
        } catch (error) {
            console.log('Error adding card!', error);
        }
    };

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
                {cards.map((card, index) => (
                    <LandCard key={index} location={card.location} price={card.price} />
                ))}
            </div>
            </div>
        </div>
        <div className="landform">
            <p className='f-header'>ADD YOUR LAND</p>
            <div className='f-div'>
            <form action="" className='l-form'>
                <label>Location</label>
                <input type="text" value={location} onChange={handleLocationChange} placeholder='Enter the location' />
                <label>Price/Sq.Ft.</label>
                <input type="text" value={price} onChange={handlePriceChange} placeholder='Enter the price' />
                <button onClick={handleAddCard}>Add</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Landlist;