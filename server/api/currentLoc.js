const axios = require("axios");

const getLocation = async () => {
  try {
    const ipResponse = await axios.get("https://api.ipify.org/?format=json");
    // const ipData = ipResponse.data;
    // const ipAddress = ipData.ip;
    const ip = ipResponse.data.ip

    const locationResponse = await axios.get(`https://api.ip2location.io/?key=79D091D8C049270F63FCA9044751F01E&ip=${ip}&format=json`);
    const locationData = locationResponse.data;
    return {
    //   latitude: location.latitude,
    //   longitude: location.longitude,
    // ip: ipAddress,
    city: locationData.city_name
    // city:location.city 
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = getLocation;
