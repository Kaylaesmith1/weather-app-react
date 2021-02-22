import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelcius(event) {
    event.prevetDefault();
    setUnit("celcius");
  }

  function showFahrenheit(event) {
  event.preventDefault();
  setUnit("fahrenheit");
}

function celcius() {
  return (props.fahrenheit * 5) / 9 - 32;
}


  if (unit === "fahrenheit") {

  return (
    <div className="weather-temperature">
            <span className="temperature">{Math.round(props.fahrenheit)}
              </span>
               <span className="unit">°F | {" "}
               <a href="/" onClick={showCelcius}>
                 °C
                 </a>
               </span>
            </div>
  );
} else {
  return (
    <div className="weather-temperature">
            
            <span className="temperature">{Math.round(celcius())}
              </span>
               <span className="unit"> 
               <a href="/" onClick={showFahrenheit}>
                 °F |
               </a>{" "}
               °C
               </span>
            </div>
  );
}
}