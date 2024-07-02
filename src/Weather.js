import React, {useState} from "react";
import WeatheInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: Math.round(response.data.main.humidity),
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: Math.round(response.data.wind.speed),
            city: response.data.name  
        });
        
    }

    function search(){
        const apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec"; //57821c3b75b60c68ecd1a8d0dd1aa8d3;
        //let city = "props.defaultCity";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        //search for a city
    }

    function handleCityChange(event){
        setCity(event.target.value);

    }
    
    if (weatherData.ready) {
        return ( 
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                   <div className="row">
                     <div className="col-6">
                     <input 
                       type="search" 
                       placeholder="Enter a city.." 
                       className="form-control"
                       autoFocus="on"
                       onChange={handleCityChange}
                     />
                     </div>
                     <div className="col-3">
                     <input 
                      type="submit" 
                      value="Search" 
                      className="btn btn-primary w-100"
                     />
                     </div>
                    </div>
                </form>
             <WeatheInfo data={weatherData}/>
             
            </div>
        );
     
    } else {
        search();
        return "Loading...";
    }   
}