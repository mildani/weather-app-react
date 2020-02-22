import React from "react"
import "./Weather.css"

export default function Weather() {
    return (
    <div className="Weather">
<form className="form-inline">
    <input type="search" placeholder="Enter a city" className="form-control-sm"/> 
    <input type="submit" value="Search" className="btn btn-sm btn-secondary"  />
</form>
<div>New York City</div>
<div>Clear sky</div>
<img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear sky" /> <span className>10ºC|F</span>
<ul>
    <li> Humidity: 10%</li>
    <li> Wind: 20 km/h</li>
</ul>
</div>)}
