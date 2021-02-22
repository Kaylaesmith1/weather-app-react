import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
        <WeatherForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {

 let apiKey = "c5ec52f93b5c1b4b6fe696ad9119316f";
  let units = "imperial";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/forecast";
  let apiUrl = `${apiEndpoint}?q=${props.city}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(handleForecastResponse);
  return null;
  
}
}