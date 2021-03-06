import React from "react"
import FormattedDate from "./FormattedDate"
import WeatherTemperature from "./WeatherTemperature"
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
<div className="timestamp"><FormattedDate date={props.data.date} /></div>
<div className="city">{props.data.city}</div>
<div className="description">{props.data.description}</div>
<img src={props.data.icon} alt={props.data.description} /><WeatherTemperature celsius={props.data.temperature} />
<ul>
    <li> Humidity: {props.data.humidity}%</li>
    <li> Wind: {props.data.wind} km/h</li>
</ul></div>)}