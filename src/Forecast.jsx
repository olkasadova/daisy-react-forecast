import React, {useState, useEffect} from 'react';
import './Forecast.css';
import axios from "axios";
import FormattedDate from './FormattedDate';

export default function Forecast(props){
   
    let formatted_icon= "sun-outline.png";    
    let [forecastData, setForecastData] = useState({forecastloaded:false});
    let [forecastloaded, setForecastloaded] = useState(false);
    let n=0;
    console.log(forecastloaded);
    function HandleAPIResponse (response){
        
        forecastData= {
            setForecastloaded: true,
            //data: response.data.daily
            description: response.data.daily[n].condition.description,
            temp_min: response.data.daily[n].temperature.minimum,
            temp_max: response.data.daily[n].temperature.maximum,
            date: new Date(response.data.daily[n].time*1000),
            icon: response.data.daily[n].condition.icon_url
        }
        setForecastData (forecastData);
        setForecastloaded(true);
    }

    let forecastIcon = forecastData.icon;
    console.log(forecastloaded);

if (forecastloaded) 
{
    return(
        <div className="forecast"> 
            <div className="row">
                <div className ="col-2"> 
                    <div className="forecast-time"> 
                        <FormattedDate info={forecastData.date}/> 
                    </div>                           
                    <img className="forecastIcon" src={forecastIcon} alt="terra"></img>
                    <div className="forecast-temperature">
                        <span className="forecast-temperature-max">{Math.round(forecastData.temp_min)}C</span>
                        <span className="forecast-temperature-min">{Math.round(forecastData.temp_max)}C</span>   
                    </div>
                </div>
                <div className ="col-2"> 
                    <div className="forecast-day"> Friday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div className="forecast-temperature">7C</div>
                </div>
                <div className ="col-2"> 
                    <div className="forecast-day">Saturday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div className="forecast-temperature">7C</div>
                </div>
                <div className ="col-2"> 
                    <div className="forecast-day">Sunday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div className="forecast-temperature">7C</div>
                </div>
                <div className ="col-2"> 
                    <div className="forecast-day">Monday</div>              
                    <div> 00:00</div>  
                    <img className="forecastIcon" src={require("./image/"+formatted_icon)}alt="terra"></img>
                    <div className="forecast-temperature">7C</div>
                </div>
            </div>
        
        </div>
    )
    
    }
   
else {    
     let APIkey="c9c17abaa3otf64ba314bf3fce705208";
     let APIurl=`https://api.shecodes.io/weather/v1/forecast?lat=${props.data.latitude}&lon=${props.data.longitude}&key=${APIkey}&units=metric`
     axios.get(APIurl).then(HandleAPIResponse);   
     console.log (APIurl); 
     return(
         <div> "Forecast loading..."</div>       
     )}
     
}
