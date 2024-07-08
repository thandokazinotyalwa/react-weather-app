import React from "react";
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
  <div className="App">
    <div className="container">
      <Weather defaultCity="Cape Town"/>
      <footer>This project was coded by{" "}
      <a href="https://github.com/thandokazinotyalwa?tab=repositories" target="blank">Thandokazi Notyalwa</a>{" "}
      and is{" "}
      <a href="https://github.com/thandokazinotyalwa?tab=repositories" target="blank">open-sourced on Github</a>
      and {" "}
      <a href="https://skyviewweather.netlify.app/" target="blank">hosted on Netlify</a>
      </footer>
    </div>
    </div>
  );
}


