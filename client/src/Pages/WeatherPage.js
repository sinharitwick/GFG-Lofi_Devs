import Inputs from "../WeatherComp/Inputs";
import TimeAndLocation from "../WeatherComp/TimeAndLocation";
import TemperatureAndDetails from "../WeatherComp/TemperatureAndDetails";
import Forecast from "../WeatherComp/Forecast";
import getFormattedWeatherData from "../WeatherComp/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getLocation = require("./currentLoc");
function Weather() {
  const [location, setLocation] = useState("");
  const getUserLocation = async () => {
    try {
      const userLocation = await getLocation();
      setLocation(userLocation.city);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserLocation();
  }, []);
  let mycity = location;
  console.log(mycity);
  const [query, setQuery] = useState({q:location});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        // toast.success(
        //   `Successfully fetched weather for ${data.name}, ${data.country}.`
        // );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`myweather mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      {/* <TopButtons setQuery={setQuery} /> */}
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default Weather;
