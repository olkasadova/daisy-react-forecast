import React, {useEffect, useState} from 'react';
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Header from './Header.jsx';


export default function Weather() {

    let [weatherData, setWeatherData] = useState([]);
    let [loaded, setLoaded] = useState(false);

    function HandleAPIResponse (response) {
        weatherData = (response.data);

        setWeatherData(weatherData);       
        setLoaded(true);
        console.log(response.data);     
    }
         
   
    if (loaded){
        return(
        <div className="weather"> 
        <Header/>
            <div className="row">
                <div className="col-6">
                    <h2 className = "display-city">{weatherData.name}</h2>
                    <img className="weather-image" src={require('./image/free-icon-blue-cloud-and-weather-16527.png')} alt="cloudy"></img>
                    <span className="temp-value">{(Math.round(weatherData.main.temp))}</span>
                    <span className="celsius">°C/ </span>
                    <span className="farenheit">°F</span>
                    
                    <ul className = "weather-data">
                        <li>Precipitation: <span className="precipration">0% </span> </li>
                        <li>Humidity: <span className="humidity">{weatherData.main.humidity}</span>%</li>
                        <li>Wind: <span className="wind">{(Math.round(weatherData.wind.speed))} </span> mph </li>
                    </ul>
                </div>
            <div className="col-6">
                <ul className = "weather-add-data">
                <li><strong>Weather</strong></li>
                <li className = "date"> Tuesday 21:00</li>
                <li className="text-capitalize"> <span className="description">{weatherData.weather[0].description}</span></li> 
                </ul>
            </div>          
            </div>
        </div>
        )
    }
    else{
        const APIkey="b16f3163779c7ceaabe5d3c63b9d9c72";
        let city="Edinburgh";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
        axios.get(apiUrl).then(HandleAPIResponse);
        
    }
   
    }
     