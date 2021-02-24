import React from "react";
import Weather from "./Weather";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="row">
          <Weather defaultCity="Gdańsk" />
          </div>
          </div>
  );
}

export default App;
