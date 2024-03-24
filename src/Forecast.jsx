import React, {useState, useEffect} from 'react';
import './Forecast.css';
import axios from "axios";
import ForecastDay from './ForecastDay';

export default function Forecast(props){
    
    let [forecastData, setForecastData] = useState({forecastloaded:false});
    let [forecastloaded, setForecastloaded] = useState(false);
    let [forecastDaily, setForecastDaily] = useState ({forecastloaded:false});

        useEffect(()=>{
            setForecastloaded(false);
        }, [props.data]);

    function HandleAPIResponse (response){
        forecastData= {
            setForecastloaded: true,
        }
       forecastDaily= response.data.daily;
       setForecastDaily (forecastDaily);
        setForecastData (forecastData);
        setForecastloaded(true);
    }

if (forecastloaded) 
{ 
    return(
        <div className="forecast"> 
            <div className="row">
                {forecastDaily.map(function(dailyForecast,index){
                    if (index < 6){
                    return (
                        <div className ="col-2" key={index}> 
                        <ForecastDay day={dailyForecast}/>
                    </div>
                    );
                    }
                })
                }
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
