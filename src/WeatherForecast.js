import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    

  }


if (loaded) {
  return ( 
    <div className="WeatherForecast">
      10:00
      <WeatherIcon code={forecast.list[0].weather[0].icon} />
      {Math.round(forecast.list[0].main.temp)}
  </div>
  );

} else {

 let apiKey = "c5ec52f93b5c1b4b6fe696ad9119316f";
  let units = "imperial";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast";
  let city = "Gdańsk";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(handleForecastResponse);
  return null;
  
}
}