import React from 'react';
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header.jsx';

export default function Weather() {
    return(
        <div className="weather"> 
        <Header/>
            <div className="row">
                <div className="col-6">
                    <h2 className = "display-city">Edinburgh</h2>
                    <img className="weather-image" src={require('./image/free-icon-blue-cloud-and-weather-16527.png')} alt="cloudy"></img>
                    <span className="temp-value">11</span>
                    <span classNme="celsius">°C/ </span>
                    <span className="farenheit">°F</span>
                    
                    <ul className = "weather-data">
                        <li>Precipitation: <span className="precipration">0% </span> </li>
                        <li>Humidity: <span className="humidity">82% </span></li>
                        <li>Wind: <span className="wind">5mph </span></li>
                    </ul>
                </div>
            <div className="col-6">
                <ul className = "weather-add-data">
                <li>Weather</li>
                <li className = "date"> Tuesday 21:00</li>
                <li className = "weather-description">cloudy</li>
                </ul>
            </div>          
            </div>
        </div>
    )
}