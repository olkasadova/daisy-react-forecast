import React, {useState, useEffect} from 'react';
import './Forecast.css';
import axios from "axios";
import FormattedDate from './FormattedDate';

export default function Forecast(props){
   
    let formatted_icon= "sun-outline.png";    
    let [forecastData, setForecastData] = useState({forecastloaded:false});
    let [forecastloaded, setForecastloaded] = useState(false);
    let [forecastDaily, setForecastDaily] = useState ({forecastloaded:false});
    let n=0;
    console.log(forecastloaded);
    function HandleAPIResponse (response){
        console.log("response daily:"+ response.data.daily)
        forecastData= {
            setForecastloaded: true,
            //data: response.data.daily[1],
            //description: response.data.daily[n].condition.description,
            //temp_min: response.data.daily[n].temperature.minimum,
           // temp_max: response.data.daily[n].temperature.maximum,
           // date: new Date(response.data.daily[n].time*1000),
            //icon: response.data.daily[n].condition.icon_url
        }
       forecastDaily= response.data.daily;
       setForecastDaily (forecastDaily);
        setForecastData (forecastData);
        setForecastloaded(true);
    }
   // let fdate= new Date( forecastData.date);
    //let forecastIcon = forecastData.icon;
   // let day1 = forecastDaily[0];
    console.log( "forecast data: "+ forecastDaily[0]);

if (forecastloaded) 
{ 
    return(
        <div className="forecast"> 
            <div className="row">
                <div className ="col-2"> 
                    <div className="forecast-time"> 
                        <FormattedDate info={new Date(forecastDaily[0].time*1000)}/> 
                    </div>                           
                    <img className="forecastIcon" src={forecastDaily[0].condition.icon_url} alt="terra"></img>
                    <div className="forecast-temperature">
                        <span className="forecast-temperature-max">{Math.round(forecastDaily[0].temperature.maximum)}C</span>
                        <span className="forecast-temperature-min">{Math.round(forecastDaily[0].temperature.minimum)}C</span>   
                    </div>
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
