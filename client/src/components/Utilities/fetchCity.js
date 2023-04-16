import { useState, useEffect } from "react";

const useCityName =(lat, lon) => {
  const [city, setCity] = useState(null);
  useEffect(() => {
    if (lat && lon) {
      // Construct the url for the OpenStreetMap Nominatim API with the coordinates
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

      // Use the fetch api to make a request to the url and get the response
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Failed to fetch city name: ${response.status}`);
          }
        })
        .then((data) => {
          const address = data.address;
          const cityName = address.city || address.town || address.village;
          setCity(cityName);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [lat, lon]);

  return city;
};

export {useCityName};


