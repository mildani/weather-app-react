import React from 'react';
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
          <Weather defaultCity="New York"/>
      </header>
      <footer><a href="https://github.com/mildani/weather-app-react" target="_blank" rel="noopener noreferrer">Open-source code</a> by mildani</footer>
    </div></div>
  );
}

