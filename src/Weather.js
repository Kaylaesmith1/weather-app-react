import React from 'react';

export default function Weather() {
  return(
    <div className="container">
      <h1 className="gdansk">GDAŃSK</h1>
      <h4>
        <div className="row">
          <div className="col-3">
            <ul className="rightNow">
              <li id="rightNow">Tuesday 17:55</li>
              <br />
              <li id="description">Partly cloudy</li>
              <br />
              <li>Feels like: <span id="feels">43</span>°</li>
              <br />
            </ul>
          </div>

          <div className="col-4">
            <div className="weather-temperature">
            <img src="" alt="" className="icon" id="icon"></img><h2 className="temperature" id="tempNow" alt="temp"><img src ="http://openweathermap.org/img/wn/02d@2x.png" alt="partsun"
            />55</h2>
            <span className="units">
              
               <span id="fahrenheit-link" className="active">°F | </span>
              
               <span id="celcius-link" className="active">°C</span>
               </span>
            </div>
          </div>

          <div className="col-5">
            <ul>
              <li>Wind: <span className="values" id="wind">15 mph</span></li>
              <li>Humidity: <span className="values" id="humidity">69%</span></li>
              <li>Sunrise: <span className="values" id="sunrise">7:11</span></li>
              <li>Sunset: <span className="values" id="sunset">17:48</span></li>
            </ul>
          </div>
                    </div>

        
      </h4>

      <br />
      <div>
        <form id="searching">
          <input
            type="text"
            placeholder="Search City"
            className="search-city"
            id="search-city"
            autoFocus="on"
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
}