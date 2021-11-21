import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/time')
    .then(response => {
      console.log("im over here!"); 
      console.log(response); 
      return response.json()})
    .then(data => {
      console.log(data);
      console.log("hello");
      setCurrentTime(data.somethingelse);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <p>The current time is {currentTime}.</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
