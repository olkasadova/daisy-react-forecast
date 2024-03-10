import React, {useState} from 'react';
import './Header.css';

export default function Header (){

    let [city, setCity] = useState ("");
    let handleSubmit = (event) => {
       event.preventDefault();
        validate (city);
        console.log(city);
        console.log (typeof(city));
    }

    let validate = (city)=>{
        let error = "";
        let message = document.getElementById("validation-text");
        message.innerHTML = "";

            if ((city.length) > 50 ){
                error = "city value is too long";
                
            }
            if (city == ""){
                error = "Please enter a city...nothing to search";}
         message.innerHTML  = error;
    }
    
    return(
        <header className="header">
            <img className="logo-image" src={require("./image/sun-outline.png" )} alt="terra"></img>
            <div>
            <form className="form-inline" onSubmit = {handleSubmit}>   

                <div className="row">
                    <div className="col-9">
                        <input 
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
    )
}