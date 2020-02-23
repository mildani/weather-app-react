import React, {useState} from "react"
import axios from "axios"
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)


    function handleResponse(response) {
console.log(response);
setForecast(response.data);
setLoaded(true)}

function formatHours(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
    
   
    if (loaded && forecast.city.name === props.city) {
        function imgUrl(index){
            return `http://openweathermap.org/img/wn/${forecast.list[index].weather[0].icon}@2x.png`
        }
    return (
    <div className="WeatherForecast"> 
    <div className="separator">Upcoming Forecast</div>
    <div className="forecastTable">
    <div className="row">
      <div className="col hours">{formatHours(new Date(forecast.list[0].dt*1000))}</div>
      <div className="col"><img src={imgUrl(0)} alt={forecast.list[0].weather[0].description}/></div>
      <div className="col temp">{Math.round(forecast.list[0].main.temp)}ºC</div>
    </div>
    <div className="row">
    <div className="col hours">{formatHours(new Date(forecast.list[1].dt*1000))}</div>
      <div className="col"><img src={imgUrl(1)} alt={forecast.list[1].weather[0].description}/></div>
      <div className="col temp">{Math.round(forecast.list[1].main.temp)}ºC</div>
    </div>
    <div className="row">
    <div className="col hours">{formatHours(new Date(forecast.list[2].dt*1000))}</div>
      <div className="col"><img src={imgUrl(2)} alt={forecast.list[2].weather[0].description}/></div>
      <div className="col temp">{Math.round(forecast.list[2].main.temp)}ºC</div>
    </div>
    <div className="row">
    <div className="col hours">{formatHours(new Date(forecast.list[3].dt*1000))}</div>
      <div className="col"><img src={imgUrl(3)} alt={forecast.list[3].weather[0].description}/></div>
      <div className="col temp">{Math.round(forecast.list[3].main.temp)}ºC</div>
    </div>
    <div className="row">
    <div className="col hours">{formatHours(new Date(forecast.list[4].dt*1000))}</div>
      <div className="col"><img src={imgUrl(4)} alt={forecast.list[4].weather[0].description}/></div>
      <div className="col temp">{Math.round(forecast.list[4].main.temp)}ºC</div>
    </div></div>
    </div>)} else {
         const apiKey = "3a94f3778290bfeee61278505dbbe51d";
         let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);
         return null;
    }}