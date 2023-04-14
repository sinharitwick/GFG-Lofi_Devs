const axios = require("axios");

const getLocation = async () => {
  try {
    const response = await axios.get("https://ipapi.co/json/");
    const location = response.data;
    return {
    //   latitude: location.latitude,
    //   longitude: location.longitude,
    city:location.city
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = getLocation;
