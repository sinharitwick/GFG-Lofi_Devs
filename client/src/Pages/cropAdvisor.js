import React, { useState, useEffect } from 'react';
import Navbar from '../components/UI/Navbar';
const getLocation = require('./currentLoc');

const CropInputForm = () => {
const [climate, setClimate] = useState('');
const [soil, setSoil] = useState('');
const [crops, setCrops] = useState('');
const [month, setMonth] = useState('');
const [isLoading, setLoading] = useState(false);
const [location, setLocation] = useState('');

useEffect(() => {
  const getUserLocation = async () => {
  try {
    const userLocation = await getLocation();
    setLocation(userLocation.city);
  } catch (error) {
    console.error(error);
  }
  };
  getUserLocation();
}, []);

const handleSubmit = async (event) => {
event.preventDefault();
setLoading(true);
try {
const response = await fetch('http://localhost:5000/api/cropAdvisor', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
location,
climate,
soil,
month
})
});
const result = await response.json();
setCrops(result.crops);
} catch (error) {
console.error(error);
}
setLoading(false);
};

const handleLocationChange = (event) => {
  setLocation(event.target.value);
}

return (
<div>
  <Navbar />
<form onSubmit={handleSubmit}>
<label>
    Location:
    <input type="text" value={location} onChange={handleLocationChange} />
</label>
  <br />
  <br />
<label>
Climate:
<select value={climate} onChange={event => setClimate(event.target.value)}>
<option value="">Select Climate</option>
<option value="Tropical">Tropical</option>
<option value="Semi-Arid">Semi-Arid</option>
<option value="Arid">Arid</option>
<option value="Subtropical">Subtropical</option>
<option value="Moderate">Moderate</option>
</select>
</label>
<br />
<br />
<label>
Soil:
<select value={soil} onChange={event => setSoil(event.target.value)}>
<option value="">Select Soil</option>
<option value="Sandy">Sandy</option>
<option value="Clay">Clay</option>
<option value="Red">Red</option>
<option value="Black">Black</option>
<option value="Silty">Silty</option>
<option value="Alluvial">Alluvial</option>
</select>
</label>
<br />
<br />
<label>
Month:
<select value={month} onChange={event => setMonth(event.target.value)}>
  <option value="">Select Month</option>
  <option value="Jan">January</option>
  <option value="Feb">February</option>
  <option value="Mar">March</option>
  <option value="Apr">April</option>
  <option value="May">May</option>
  <option value="Jun">June</option>
  <option value="Jul">July</option>
  <option value="Aug">August</option>
  <option value="Sep">September</option>
  <option value="Oct">October</option>
  <option value="Nov">November</option>
  <option value="Dec">December</option>
</select>
</label>

<br />
<br />
<button type="submit">Predict Crop</button>
</form>
{isLoading ? (
<div>Loading...</div>
) : (
<div>
<h2>Predicted Crop: {crops}</h2>
</div>
)}
</div>
);
};

export default CropInputForm;