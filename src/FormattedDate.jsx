import React from 'react';
import Weather from "./Weather";
import Header from "./Header";

export default function FormattedDate(props){
    console.log(props.info)
   
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[props.info.getDay()];
    let hours = props.info.getHours();
    let minutes = props.info.getMinutes();
    return (
        <div>
        {day}
        <div>
            {hours}:{minutes}
        </div>
    </div>
    )
}