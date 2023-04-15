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
