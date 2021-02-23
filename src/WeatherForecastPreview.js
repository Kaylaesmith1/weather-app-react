import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();



    return (
      <div className="forecast-time">
    {hours}:00
    </div>
    );
  } 

  function temperature() {
    let temperatureHigh = Math.round(props.data.main.temp_max);
    let temperatureLow = Math.round(props.data.main.temp_min);

  
    return (
      <div>
        
      <span className="High">
    {temperatureHigh}°</span>
    <span className="Low">{temperatureLow}°</span>
    </div>
    );
  }

  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}