import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(props) {
  function handleResponse (response) {
    alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}ºF`)
  }
  let apiKey = "c5ec52f93b5c1b4b6fe696ad9119316f";
  let units = "imperial";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
    type="BallTriangle"
    color="purple"
    height={80}
    width={80}
    />
  );
}