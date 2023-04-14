import { useState, useEffect } from "react";
const useGeolocation = () => {
  // Define a state variable to store the coordinates
  const [coords, setCoords] = useState({ lat: null, lon: null });

  // Define a function that handles the success case of getting the geolocation
  function handleSuccess(position) {
    // Get the latitude and longitude from the position object
    const { latitude, longitude } = position.coords;

    // Set the state variable with the coordinates
    setCoords({ lat: latitude, lon: longitude });
  }

  // Define a function that handles the error case of getting the geolocation
  function handleError(error) {
    // Log the error to the console
    console.error(error.message);
  }

  // Use the useEffect hook to run once when the component mounts
  useEffect(() => {
    // Check if the geolocation api is supported by the browser
    if (navigator.geolocation) {
      // Request the user's permission and get their current position
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      // Alert the user that geolocation is not supported
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  // Return the coordinates from the custom hook
  return coords;
};

// Define a custom hook that returns the city name from the coordinates
const useCityName = (lat, lon) => {
  // Define a state variable to store the city name
  const [city, setCity] = useState(null);

  // Use the useEffect hook to run whenever the coordinates change
  useEffect(() => {
    // Check if both latitude and longitude are available
    if (lat && lon) {
      // Construct the url for the OpenStreetMap Nominatim API with the coordinates
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

      // Use the fetch api to make a request to the url and get the response
      fetch(url)
        .then((response) => {
          // Check if the response is ok, otherwise throw an error
          if (response.ok) {
            // Convert the response to json and return it
            return response.json();
          } else {
            throw new Error(`Failed to fetch city name: ${response.status}`);
          }
        })
        .then((data) => {
          // Get the address object from the data
          const address = data.address;

          // Get the city name from the address object
          const cityName = address.city || address.town || address.village;

          // Set the state variable with the city name
          setCity(cityName);
        })
        .catch((error) => {
          // Handle any errors by logging them to the console
          console.error(error.message);
        });
    }
  }, [lat, lon]);

  // Return the city name from the custom hook
  return city;
};
// module.exports = useGeolocation,useCityName;
export { useGeolocation, useCityName };

//   // Define a component that displays the city name from the browser
//   function CityName() {
//     // Use the useGeolocation custom hook and get the coordinates
//     const { lat, lon } = useGeolocation();

//     // Use the useCityName custom hook and get the city name
//     const city = useCityName(lat, lon);

//     // Render a div element that shows either a loading message or the city name
//     return <div>{city ? `Your city is ${city}` : "Loading..."}</div>;
//   }

//   export default CityName;
