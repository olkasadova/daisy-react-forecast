import React from 'react';
import './App.css';
import Weather from  "./Weather.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Weather/>
        <Footer/>
       </div>
      </div>
    
  );
}

export default App;
