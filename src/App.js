import React from "react";
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
  <div className="App">
    <div class="container">
      <h1>Weather App</h1>
      <Weather />
      <footer>This project was coded by{" "}
      <a href="https://www.delac.io/" target="blank">Thandokazi Notyalwa</a>{" "}
      and is{" "}
      <a href="https://www.delac.io/" target="blank">open-sourced on Github</a>
      </footer>
    </div>
    </div>
  );
}


