import React from 'react';
import './Forecast.css';

export default function Forecast(props){
    let formatted_icon="free-icon-yellow-sun.png";
       //formatted_icon=props.iconWeather;
    return(
        <div className="Forecast"> 
            <div className="row">
                <div className ="col-2"> 
                    <div>Thursday</div>              
                    <div> 21:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)} alt="terra"></img>
                    <div>7C</div>
                </div>
                <div className ="col-2"> 
                    <div>Friday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div>7C</div>
                </div>
                <div className ="col-2"> 
                    <div>Saturday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div>7C</div>
                </div>
                <div className ="col-2"> 
                    <div>Sunday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div>7C</div>
                </div>
                <div className ="col-2"> 
                    <div>Monday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div>7C</div>
                </div>
                <div className ="col-2"> 
                    <div>Monday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div>7C</div>
                </div>
            </div>
        
        </div>
    )
}