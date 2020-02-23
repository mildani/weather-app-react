import React, {useState} from "react"
import FormattedDate from "./FormattedDate"
import axios from "axios"
import "./Weather.css"



export default function Weather(props) {
const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000)
    });
    setLoaded(true);
  }

  function search() {
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
<form className="form-inline" onSubmit={handleSubmit}>
    <input type="search" placeholder="Enter a city" className="form-control-sm" onChange={updateCity} /> 
    <input type="submit" value="Search" className="btn btn-sm btn-secondary"  />
</form>
  )

  if (loaded) {
    return (
    <div className="Weather">
{form}
<div className="timestamp"><FormattedDate date={weather.date} /></div>
<div className="city">{weather.city}</div>
<div className="description">{weather.description}</div>
<img src={weather.icon} alt={weather.description} /> <span className="temperature">{Math.round(weather.temperature)}ºC|F</span>
<ul>
    <li> Humidity: {weather.humidity}%</li>
    <li> Wind: {weather.wind} km/h</li>
</ul>
</div>)} else {
     search();
    return "Loading"
}}