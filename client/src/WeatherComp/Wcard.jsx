// import React from 'react'

// function Wcard() {
//   // Define the api key and the base url
// const apiKey = "a0fe9b2cd1cdbe195b9356f1f948c588";
// const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

// // Define a function that takes a city name as an argument and returns a promise that resolves to the weather data
// async function getWeatherData(city) {
//   // Construct the full url with the city name and the api key
//   const url = `${baseUrl}?q=${city}&appid=${apiKey}`;

//   // Use the fetch api to make a request to the url and get the response
//   const response = await fetch(url);

//   // Check if the response is ok, otherwise throw an error
//   if (response.ok) {
//     // Convert the response to json and return it
//     const data = await response.json();
//     return data;
//   } else {
//     throw new Error(`Failed to fetch weather data for ${city}: ${response.status}`);
//   }
// }

// // Define a function that takes the weather data and extracts the temperature and cloud icon
// function formatWeatherData(data) {
//   // Get the main object from the data
//   const main = data.main;

//   // Get the temperature in Kelvin and convert it to Celsius
//   const tempK = main.temp;
//   const tempC = tempK - 273.15;

//   // Get the weather array from the data and get the first element
//   const weather = data.weather[0];

//   // Get the icon code from the weather object
//   const icon = weather.icon;

//   // Return an object with the temperature and icon properties
//   return {
//     temp: tempC,
//     icon: icon,
//   };
// }

// // Define a function that takes the weather data and extracts the temperature, cloud icon, wind speed, and wind icon
// function formatWeatherData(data) {
//   // Get the main object from the data
//   const main = data.main;

//   // Get the temperature in Kelvin and convert it to Celsius
//   const tempK = main.temp;
//   const tempC = tempK - 273.15;

//   // Get the weather array from the data and get the first element
//   const weather = data.weather[0];

//   // Get the icon code from the weather object
//   const icon = weather.icon;

//   // Get the wind object from the data
//   const wind = data.wind;

//   // Get the wind speed in meters per second
//   const speed = wind.speed;

//   // Get the wind direction in degrees
//   const direction = wind.deg;

//   // Define a function that takes the wind direction and returns a corresponding wind icon
//   function getWindIcon(direction) {
//     // Define an array of wind icons based on the direction
//     const icons = ["⬆️", "↗️", "➡️", "↘️", "⬇️", "↙️", "⬅️", "↖️"];

//     // Calculate the index of the icon based on the direction
//     const index = Math.round(direction / 45) % 8;

//     // Return the icon at that index
//     return icons[index];
//   }

//   // Call the getWindIcon function and get the wind icon
//   const windIcon = getWindIcon(direction);

//   // Return an object with the temperature, icon, speed, and windIcon properties
//   return {
//     temp: tempC,
//     icon: icon,
//     speed: speed,
//     windIcon: windIcon,
//   };
// }

// // Define a function that takes a city name and displays the temperature, cloud icon, wind speed, and wind icon in the console
// async function showWeather(city) {
//   try {
//     // Call the getWeatherData function and await for the result
//     const data = await getWeatherData(city);

//     // Call the formatWeatherData function and get the formatted data
//     const formattedData = formatWeatherData(data);

//     // Log the temperature, icon, speed, and windIcon to the console
//     console.log(`The temperature in ${city} is ${formattedData.temp} °C`);
//     console.log(`The cloud icon is ${formattedData.icon}`);
//     console.log(`The wind speed is ${formattedData.speed} m/s`);
//     console.log(`The wind icon is ${formattedData.windIcon}`);
//   } catch (error) {
//     // Handle any errors by logging them to the console
//     console.error(error.message);
//   }
// }

// // Test the showWeather function with some city names
// showWeather("London");
// showWeather("New York");
// showWeather("Tokyo");
//   return (
//     <div className='weatherCard'>
//       <p>{formattedData.temp}°C</p>
//     </div>
//   )
// }

// export default Wcard;

import "./Wcard.css";
// import TemperatureAndDetails from "./TemperatureAndDetails";
import TempCard from "./TempCard";
import getFormattedWeatherData from "./weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const getLocation = require("../Pages/currentLoc");
import { useGeolocation, useCityName } from "../Pages/fetchLocation";
function WeatherCard() {
  // const [location, setLocation] = useState("");
  const {lat,lon}=useGeolocation();
  const city=useCityName(lat,lon);
  const location=city;

  let mycity = location;
  console.log(mycity);

  const units="metric";
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // const message = location ? location : "current location.";

      // toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ q: location, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [location, units]);

  // const formatBackground = () => {
  //   if (!weather) return "from-cyan-700 to-blue-700";
  //   const threshold = units === "metric" ? 20 : 60;
  //   if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

  //   return "from-yellow-700 to-orange-700";
  // };
  // const formatBackground = () => {
  //   if (!weather) return "blue";
  //   const threshold = units === "metric" ? 20 : 60;
  //   if (weather.temp <= threshold) return "blue";

  //   return "orange";
  // };

  return (
    <div className={`myCard  mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400`} >
      {weather && <TempCard weather={weather} />}

      {/* <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} /> */}
    </div>
  );
}

export default WeatherCard;
