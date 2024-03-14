import React from 'react';
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Header from "./Header";
import FormattedDate from './FormattedDate';


export default function Weather(props) {

        return(
        <div className="weather"> 
            <div className="row">
                <div className="col-6">
                    <h2 className = "display-city">{props.data.name}</h2>
                    <img className="weather-image" src={require('./image/free-icon-blue-cloud-and-weather-16527.png')} alt="cloudy"></img>
                    <span className="temp-value">{(Math.round(props.data.temperature))}</span>
                    <span className="celsius">°C/ </span>
                    <span className="farenheit">°F</span>
                    
                    <ul className = "weather-data">
                        <li>Pressure: <span className="pressure">{props.data. pressure}</span> p</li>
                        <li>Humidity: <span className="humidity">{props.data.humidity}</span>%</li>
                        <li>Wind: <span className="wind">{(Math.round(props.data.wind))} </span> mph </li>
                    </ul>
                </div>
            <div className="col-6">
                <ul className = "weather-add-data">
                <li><strong>Weather</strong></li>
                
                <li className="text-capitalize"> <span className="description">{props.data.description}</span></li> 
                </ul>
            </div>          
            </div>
        </div>
        )
    }
    
   
     