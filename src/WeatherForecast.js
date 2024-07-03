import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data);
    }
    console.log(props);
    let apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec"; 
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="weatherForecast">
            <div className="row">
                <div className="col">
                    <div className="weatherForecast-day">Thu</div> 
                    <WeatherIcon code="01d" size={36}/> 
                    <div className="weatherForecast-temperature">
                        <span className="weatherForecast-temperature-max">19°</span>
                        <span className="weatherForecast-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
     )
}