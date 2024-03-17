import React, {useState} from 'react';
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Header from "./Header";
import FormattedDate from './FormattedDate';
import WeatherTemp from './WeatherTemp';


export default function Weather(props) {
        let formatted_icon="";
        formatted_icon=props.iconWeather;

        return(
        <div className="weather"> 
            <div className="row">
                <div className="col-6">
                    <h2 className = "display-city">{props.data.name}</h2>
                    <img className="weather-image" src={require("./image/"+formatted_icon)} alt="cloudy"></img>                   
                    <WeatherTemp celsius={props.data.temperature}/>
                    
                    <ul className = "weather-data">
                        <li>Pressure: <span className="pressure">{props.data.pressure}</span> p</li>
                        <li>Humidity: <span className="humidity">{props.data.humidity}</span>%</li>
                        <li>Wind: <span className="wind">{(Math.round(props.data.wind))} </span> mph </li>
                    </ul>
                </div>
            <div className="col-6">
                <ul className = "weather-add-data">
                <li><strong>Weather</strong></li>
                     
                <li className="text-capitalize"> <span className="description">{props.data.description}</span></li> 
                <FormattedDate info={props.data.date}/>
       
                </ul>
            </div>          
            </div>
        </div>
        )
    }
    
   
     