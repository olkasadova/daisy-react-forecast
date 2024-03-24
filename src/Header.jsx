import React, {useState} from 'react';
import './Header.css';
import Weather from "./Weather.jsx";
import Forecast from "./Forecast.jsx";
import axios from "axios";

export default function Header (props){

    let [city, setCity] = useState ("Edniburgh");
    let [weatherData, setWeatherData] = useState({loaded:false});
    let [loaded, setLoaded] = useState(false);
    let [icon, setIcon]=useState ("sun-outline.png");
    
    function search (){
        const APIkey="b16f3163779c7ceaabe5d3c63b9d9c72";
        // let city="Edinburgh";
         let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
         axios.get(apiUrl).then(HandleAPIResponse);    
    }

    let handleSubmit = (event) => {
       event.preventDefault();
       setCity(city);
       search();
    }

    function HandleAPIResponse (response) {
        
        weatherData = {
            loaded: true,
            latitude: response.data.coord.lat,
            longitude: response.data.coord.lon,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            wind: response.data.wind.speed,
            name: response.data.name,
            description: response.data.weather[0].description,
            main:response.data.weather[0].main,
            pressure: response.data.main.pressure,
        }
        setWeatherData(weatherData);       
        setLoaded(true);
        findIcon(icon);
        console.log ("response main URL name: "+response.data.name)
        }

       
    function findIcon (icon){
        
        switch (weatherData.main) {
            case  "Clouds":
                icon="free-icon-blue-cloud-and-weather-16527.png";
                break;
            case  "Rain":
                icon="free-downpour-rainy-day-icon-16531.png";
                break;
            case  "Clear":
                icon="free-blue-clouds-and-blue-moon-icon-16538.png";
                break;
            case  "Sun":
                icon="free-icon-yellow-sun.png";
                break;
        }
        
        setIcon(icon);
        return (icon);
    }
        

    let validate = (city)=>{
        let error = "";
        let message = document.getElementById("validation-text");
        message.innerHTML = "";

            if ((city.length) > 50 ){
                error = "city value is too long";
                
            }
            if (city === ""){
                error = "Please enter a city...nothing to search";}
         message.innerHTML  = error;
    }
    if (loaded){
    return(
        <div>
        <header className="header">
            <img className="logo-image" src={require("./image/sun-outline.png")} alt="terra"></img>
            <div>
            <form className="form-inline" onSubmit = {handleSubmit}>   

                <div className="row">
                    <div className="col-9">
                        <input 
                        id="user-city"
                        type="text" 
                        className="form-control mb-5" 
                        placeholder='Enter your city...' 
                        autoFocus= "on"
                        onChange={(e)=>{setCity(e.target.value)}}>
                        </input>  
                    </div>    
            
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                </div> 
            </form>
           <p id="validation-text"> </p>
            </div>
      </header>
      
      <Weather data={weatherData} iconWeather={icon}/>
      <Forecast data={weatherData} iconWeather={icon} fstate="false"/>
      </div>
    )
    }
    else{
        return(
            <div>
        <header className="header">
        <img className="logo-image" src={require("./image/sun-outline.png" )} alt="terra"></img>
        <div>
        <form className="form-inline" onSubmit = {handleSubmit}>   

            <div className="row">
                <div className="col-9">
                    <input 
                    id="user-city"
                    type="text" 
                    className="form-control mb-5" 
                    placeholder='Enter your city...' 
                    autoFocus= "on"
                    onChange={(e)=>{setCity(e.target.value)}}>
                    </input>  
                </div>    
        
                <div className="col-3">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
            </div> 
        </form>
       <p id="validation-text"> </p>
        </div>
  </header>
        <div> "Please search for a city..."</div>
        </div>
        )
    }
}