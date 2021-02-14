import React from 'react';

export default function Weather() {
  return(
    <div class="container">
      <h1>GDAŃSK</h1>
      <button className="btn btn-primary">Test</button>
      <h4>
        <div class="row">
          <div class="col-3">
            <ul class="rightNow">
              <li id="rightNow">Tuesday 17:55</li>
              <br />
              <li id="description">Partly cloudy</li>
              <br />
              <li>Feels like: <span id="feels">43</span>°</li>
              <br />
            </ul>
          </div>
                    <div class="col-4">
            <div class="weather-temperature">
            <img src="" alt="" class="icon" id="icon"></img><h2 class="temperature" id="tempNow" alt="temp"><img src ="http://openweathermap.org/img/wn/02d@2x.png" alt="partsun"
            />55</h2>
            <span class="units">
              
               <span id="fahrenheit-link" class="active">°F | </span>
              
               <span id="celcius-link" class="active">°C</span>
               </span>
            </div>
          </div>
          <div class="col-5">
            <ul>
              <li>Wind: <span class="values" id="wind">15 mph</span></li>
              <li>Humidity: <span class="values" id="humidity">69%</span></li>
              <li>Sunrise: <span class="values" id="sunrise">7:11</span></li>
              <li>Sunset: <span class="values" id="sunset">17:48</span></li>
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
            class="search-city"
            id="search-city"
          />
          <button class="search-current" id="search-current">Current</button>
          <button id="search-button">Search</button>
        </form>
      </div>
      <br />

      <h3 class="recently-searched">
        Recently searched:
        <div class="row">
          <div class="col">
            <span class="city">Barcelona</span>
            <br />            
            <img src="" alt="" class="iconBCN"></img><img src ="http://openweathermap.org/img/wn/50n@2x.png" id="iconBCN" alt="sun"
            />
            <br />
            <span class="high-temperature" id="max-temp-BCN">69°</span>
            <span class="low-temperature" id="min-temp-BCN">54°</span>
          </div>
          <div class="col">
            <span class="city">Chicago
            </span>
            <br />
            <img src=""  alt="" class="iconChicago"></img><img src ="http://openweathermap.org/img/wn/11d@2x.png" id="iconChicago" alt="thunder"
            />
            <br />
            <span class="high-temperature" id="max-temp-Chicago">68°</span>
            <span class="low-temperature" id="min-temp-Chicago">53°</span>
          </div>
          <div class="col">
            <span class="city">Berlin</span>
            <br />
            <img src="" alt="" class="iconBerlin"></img><img src ="http://openweathermap.org/img/wn/09n@2x.png" id="iconBerlin" alt="rain"
            />
            <br />
            <span class="high-temperature" id="max-temp-Berlin">55°</span>
            <span class="low-temperature" id="min-temp-Berlin">49°</span>
          </div>
        </div>
      </h3>

      <div class="row weather-forecast" id="forecast">
        <div class="col-2">
          <strong>12:00</strong>
            <img src ="http://openweathermap.org/img/wn/01d@2x.png"
            alt="sun"
            />
            <div class="weather-forecast-temperature">  
              <span class="high-temperature-f">22°</span><span class="low-temperature-f"> 17°</span>
            </div>    
          </div>
          <div class="col-2">
      <strong>15:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/09d@2x.png"
      alt="rain"
            />
      <br />
      <span class="high-temperature-f">53°</span>
      <span class="low-temperature-f">45°</span>
    </div>
    <div class="col-2">
      <strong>18:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/13n@2x.png" alt="snow"
        />
      <br />
      <span class="high-temperature-f">51°</span>
      <span class="low-temperature-f">47°</span>
    </div>
    <div class="col-2">
      <strong>21:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/02n@2x.png"
      alt="partclouds"
            />
      <br />
      <span class="high-temperature-f">47°</span>
      <span class="low-temperature-f">40°</span>
    </div>
    <div class="col-2">
      <strong>00:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/50n@2x.png"
      alt="fog"
            />
      <br />
      <span class="high-temperature-f">49°</span>
      <span class="low-temperature-f">42°</span>
    </div>
    <div class="col-2">
      <strong>3:00</strong>
      <br />
      <img src ="http://openweathermap.org/img/wn/01n@2x.png"
      alt="moon"
            />
      <br />
      <span class="high-temperature-f">52°</span>
      <span class="low-temperature-f">47°</span>
    </div>
      </div>
      <footer>
        <div class="signature">
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