import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import SunTime from "./SunTime";


export default function WeatherInfo(props) {
  if (props.unit === "fahrenheit") {
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
              <li>Feels like: <span className="weather-temperature">{props.data.feels}</span>°</li>
              <br />
            </ul>
          </div>
          
            <div className="col-1"><img src ={props.data.iconUrl} alt={props.data.description}/>
                 </div>
                 <div className="col-3">
                   <span className="moveTemp">
               
                 <WeatherTemperature fahrenheit={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/> 
                 </span> 
                 </div>
                 
            

          <div className="col-5">
            <ul>
              <li>Wind: <span className="values" id="wind">{props.data.wind} mph</span></li>
              <li>Humidity: <span className="values" id="humidity">{props.data.humidity}%</span></li>
              <li>Sunrise: <span className="values" id="sunrise"><SunTime time={props.data.sunrise}/></span></li>
              <li>Sunset: <span className="values" id="sunset"><SunTime time={props.data.sunset}/></span></li>
            </ul>
          </div>
          </div>
      </h4>
    </div>
  );
} else {
    return (
      <div className="WeatherInfo">
        <h1 className="gdansk">{props.data.city.toUpperCase()}</h1>
        <h4>
          <div className="row">
            <div className="col-3">
              <ul className="rightNow">
                <li id="rightNow">
                  <FormattedDate date={props.data.date} />
                </li>
                <br />
                <li id="description">{props.data.description}</li>
                <br />
                <li>
                  Feels like:{" "}
                  <span className="weather-temperature">
                    {Math.round(((props.data.feels - 32) * 5) / 9)}
                  </span>
                  °
                </li>
                <br />
              </ul>
            </div>
​
            <div className="col-4">
              <WeatherTemperature
                fahrenheit={props.data.temperature}
                unit={props.unit}
                setUnit={props.setUnit}
              />
              <img src={props.data.iconUrl} alt={props.data.description} />
            </div>
​
            <div className="col-5">
              <ul>
                <li>
                  Wind:{" "}
                  <span className="values" id="wind">
                    {Math.round(props.data.wind * 1.609)} kmh
                  </span>
                </li>
                <li>
                  Humidity:{" "}
                  <span className="values" id="humidity">
                    {props.data.humidity}%
                  </span>
                </li>
                <li>
                  Sunrise:{" "}
                  <span className="values" id="sunrise">
                    <SunTime time={props.data.sunrise} />
                  </span>
                </li>
                <li>
                  Sunset:{" "}
                  <span className="values" id="sunset">
                    <SunTime time={props.data.sunset} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </h4>
      </div>
    );
  }
}