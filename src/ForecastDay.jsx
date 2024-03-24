import React from 'react';
import FormattedDate from './FormattedDate';

export default function ForecastDay(props)

{
    console.log (props.day)
    //let time=props.info.time;
     return(
        <div>
            <div className="forecast-time"> 
             <FormattedDate info={new Date(props.day.time*1000)}/> 
            </div>                           
            <img className="forecastIcon" src={props.day.condition.icon_url} alt="terra"></img>
            <div className="forecast-temperature">
                <span className="forecast-temperature-max">{Math.round(props.day.temperature.maximum)}°</span>
                <span className="forecast-temperature-min">{Math.round(props.day.temperature.minimum)}°</span>   
            </div>
        </div>
    )
}