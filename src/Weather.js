import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: Math.round(response.data.main.humidity),
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: Math.round(response.data.wind.speed),
            city: response.data.name
            
        });
        
    }
    
    if (weatherData.ready) {
        return ( 
            <div className="Weather">
                <form>
                   <div className="row">
                     <div className="col-6">
                     <input type="search" placeholder="Enter a city.." 
                       className="form-control"
                       autoFocus="on"
                     />
                     </div>
                     <div className="col-3">
                     <input type="submit" value="Search" 
                      className="btn btn-primary w-100"
                     />
                     </div>
                    </div>
                </form>
             <h1>{weatherData.city}</h1>
             <ul>
                <li>
                    <FormattedDate date={weatherData.date}/>
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
             </ul>
             <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <img 
                          src={weatherData.iconUrl}
                          alt={weatherData.description}
                          className="float-left"
                        />
                        <div className="float-left"> 
                         <span className="temperature">{Math.round(weatherData.temperature)}</span>
                         <span className="unit">℃</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity:{weatherData.humidity}%</li>
                        <li>Wind:{weatherData.wind}km/h</li>
                    </ul>
    
                </div>
             </div>
            </div>
        );
     
    } else {
        const apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec"; //57821c3b75b60c68ecd1a8d0dd1aa8d3;
        //let city = "props.defaultCity";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }   
}