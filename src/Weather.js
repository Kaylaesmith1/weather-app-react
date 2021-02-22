import React, { useState } from 'react';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
      
      function currentWeather(response) {
      setWeatherData({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: Math.round(response.data.main.temp),
         description: response.data.weather[0].description,
         humidity: response.data.main.humidity,
         wind: Math.round(response.data.wind.speed),
         feels: Math.round(response.data.main.feels_like),
         sunrise: response.data.sys.sunrise,
         sunset: response.data.sys.sunset,
         iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      })
  }

  function search() {
  const apiKey = "c5ec52f93b5c1b4b6fe696ad9119316f";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let units = "imperial";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(currentWeather);

  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();

  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }
if (weatherData.ready){
  
  return(
    <div className="container">
      <WeatherInfo data={weatherData}/>

      <div>
        <form onSubmit={handleSubmit} id="searching">
          <input
            type="text"
            placeholder="Search City"
            className="search-city"
            id="search-city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button className="search-current ml-2 mr-2" id="search-current">Current</button>
          <button id="search-button">Search</button>
        </form>
      </div>
      <br />

      <h3 className="recently-searched ml-3 mr-3">
        Recently searched:
        <div className="row">
          <div className="col">
            <span className="city">Barcelona</span>
            <br />            
            <img src="" alt="" className="iconBCN"></img><img src ="http://openweathermap.org/img/wn/50n@2x.png" id="iconBCN" alt="sun"
            />
            <br />
            <span className="high-temperature" id="max-temp-BCN">69°</span>
            <span className="low-temperature" id="min-temp-BCN">54°</span>
          </div>
          <div className="col">
            <span className="city">Chicago
            </span>
            <br />
            <img src=""  alt="" className="iconChicago"></img><img src ="http://openweathermap.org/img/wn/11d@2x.png" id="iconChicago" alt="thunder"
            />
            <br />
            <span className="high-temperature" id="max-temp-Chicago">68°</span>
            <span className="low-temperature" id="min-temp-Chicago">53°</span>
          </div>
          <div className="col">
            <span className="city">Berlin</span>
            <br />
            <img src="" alt="" className="iconBerlin"></img><img src ="http://openweathermap.org/img/wn/09n@2x.png" id="iconBerlin" alt="rain"
            />
            <br />
            <span className="high-temperature" id="max-temp-Berlin">55°</span>
            <span className="low-temperature" id="min-temp-Berlin">49°</span>
          </div>
        </div>
      </h3>

    <WeatherForecast city={weatherData.city}/>



      <div className="row weather-forecast ml-3 mr-3" id="forecast">
        <div className="col-2">
          <strong>12:00</strong>
            <img src ="http://openweathermap.org/img/wn/01d@2x.png"
            alt="sun"
            />
            <div className="weather-forecast-temperature">  
              <span className="high-temperature-f">22°</span><span className="low-temperature-f"> 17°</span>
            </div>    
          </div>
          <div className="col-2">
      <strong>15:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/09d@2x.png"
      alt="rain"
            />
      <br />
      <span className="high-temperature-f">53°</span>
      <span className="low-temperature-f">45°</span>
    </div>
    <div className="col-2">
      <strong>18:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/13n@2x.png" alt="snow"
        />
      <br />
      <span className="high-temperature-f">51°</span>
      <span className="low-temperature-f">47°</span>
    </div>
    <div className="col-2">
      <strong>21:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/02n@2x.png"
      alt="partclouds"
            />
      <br />
      <span className="high-temperature-f">47°</span>
      <span className="low-temperature-f">40°</span>
    </div>
    <div className="col-2">
      <strong>00:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/50n@2x.png"
      alt="fog"
            />
      <br />
      <span className="high-temperature-f">49°</span>
      <span className="low-temperature-f">42°</span>
    </div>
    <div className="col-2">
      <strong>3:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/01n@2x.png"
      alt="moon"
            />
      <br />
      <span className="high-temperature-f">52°</span>
      <span className="low-temperature-f">47°</span>
    </div>
      </div>
      <footer>
        <div className="signature">
          <small>
            <a
            href="https://github.com/Kaylaesmith1/weather-app-react"
              target="_blank" rel="noreferrer"
             
              >Open-source code </a
            >
            by Kayla Smith</small
          >
        </div>
      </footer>
      
      </div>   
  );
} else {
  search();  
  return "Loading...";
  }
}
