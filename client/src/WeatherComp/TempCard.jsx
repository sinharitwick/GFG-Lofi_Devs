import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "./weatherService";

function TempCard({
  weather: {
    details,
    icon,
    temp,
    speed,
    humidity,
    feels_like,
    name,
    country
  },
}) {
  return (
    <div>
      <div className="flex items-left justify-left py-2 text-base text-cyan-300">
        <p className="px-2 pr-2" >{`${name}, ${country}`}</p>
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-black py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl text-black">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempCard;
