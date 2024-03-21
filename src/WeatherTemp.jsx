import React, {useState} from "react";

export default function WeatherTemp (props) {
    

        let [units, setUnits]=useState("celsius")
        let [temp, setTemp]=useState (props.celsius);
       
        function convertFareheit (){
            temp=((temp*9/5)+32);
            setTemp(temp);
           setUnits("farenheit");
        }
        
        function convertCelsius (){
            temp=((temp-32)*5/9);
            setTemp(temp);
           setUnits("celsius");
        }
   
    if (units==="celsius"){
    
        return (
            <div>
            <span className="temp-value">{Math.round(temp)}</span>
            <span >°C/ </span>
            <a className="farenheit" href="#" onClick={convertFareheit}>°F</a>
            </div>
        );
    }

        else{
            return (
                <div>
                <span className="temp-value">{Math.round(temp)}</span>
                <a className="celsius" href="#" onClick={convertCelsius} >°C/ </a>
                <span>°F</span>
                </div>
            );
        }
}
