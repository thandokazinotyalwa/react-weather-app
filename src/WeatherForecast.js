import React, { useState } from "react";
import "./weatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="weatherForecast">
                <div className="row">
                    {forecast.map(function (dailyforecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyforecast} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );

    } else {
        let apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}