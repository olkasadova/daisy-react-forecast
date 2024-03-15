import React, {useState} from 'react';
import './Header.css';
import App from "./App.js";
import Weather from "./Weather.jsx";
import axios from "axios";

export default function Header (props){

    let [city, setCity] = useState ("Edniburgh");
    let [weatherData, setWeatherData] = useState({loaded:false});
    let [loaded, setLoaded] = useState(false);
    
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
        console.log(response.data);
        weatherData = {
            loaded: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            wind: response.data.wind.speed,
            name: response.data.name,
            description: response.data.weather[0].description,
            pressure: response.data.main.pressure,
        }
        setWeatherData(weatherData);       
        setLoaded(true);
    }
        

   /* let validate = (city)=>{
        let error = "";
        let message = document.getElementById("validation-text");
        message.innerHTML = "";

            if ((city.length) > 50 ){
                error = "city value is too long";
                
            }
            if (city == ""){
                error = "Please enter a city...nothing to search";}
         message.innerHTML  = error;
    }*/
    if (loaded){
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
      
      <Weather data={weatherData}/>
      
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