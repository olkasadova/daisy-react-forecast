import React from 'react';
import Weather from "./Weather";
import Header from "./Header";

export default function FormattedDate(props){
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = props.date.getDay();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    return (
        <div>
            {day}
            <div>
                {hours}:{minutes}
            </div>
        </div>
       
    )
}