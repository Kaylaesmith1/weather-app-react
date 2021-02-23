import React from 'react';

export default function WeatherTemperature(props) {
  
  function showCelcius(event) {
    event.preventDefault();
    props.setUnit("celcius");
  }

  function showFahrenheit(event) {
  event.preventDefault();
  props.setUnit("fahrenheit");
}

function celcius() {
  return ((props.fahrenheit - 32) * (5/9));
}


  if (props.unit === "fahrenheit") {

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
                 °F 
               </a>{" "}
               | °C
               </span>
            </div>
  );
}
}