import React from 'react';
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="gdansk">{props.data.city.toUpperCase()}</h1>
      <h4>
        <div className="row">
          <div className="col-3">
            <ul className="rightNow">
              <li id="rightNow"><FormattedDate date={props.data.date}/></li>
              <br />
              <li id="description">{props.data.description}</li>
              <br />
              <li>Feels like: <span id="feels">{props.data.feels}</span>°</li>
              <br />
            </ul>
          </div>

          <div className="col-4">
            <div className="weather-temperature">
            <h2 className="temperature" id="tempNow" alt="temp"><img src ={props.data.iconUrl} alt={props.data.description}
            />{props.data.temperature}</h2>
            <span className="units">
              
               <span id="fahrenheit-link" className="active">°F | </span>
              
               <span id="celcius-link" className="active">°C</span>
               </span>
            </div>
          </div>

          <div className="col-5">
            <ul>
              <li>Wind: <span className="values" id="wind">{props.data.wind} mph</span></li>
              <li>Humidity: <span className="values" id="humidity">{props.data.humidity}%</span></li>
              <li>Sunrise: <span className="values" id="sunrise">7:11</span></li>
              <li>Sunset: <span className="values" id="sunset">17:48</span></li>
            </ul>
          </div>
          </div>
      </h4>

    </div>
  );
}