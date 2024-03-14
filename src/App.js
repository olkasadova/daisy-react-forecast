import React from 'react';
import './App.css';
import Weather from  "./Weather.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Footer/>
       </div>
      </div>
    
  );
}

export default App;
