import React, {useState} from "react"
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius")
    
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function convertToFahrenheit() {
        return (Math.round((props.celsius *9/5)+32))
    }
    
    
    if (unit==="celsius") {
    return (
        <span className="WeatherTemperature">
            <span className="temperature-value">{ Math.round(props.celsius)}</span>
            <span className="units">ºC | <a href="/" onClick={showFahrenheit}>ºF</a></span>
            </span>
    )} else {
        return (
            <span className="WeatherTemperature">
            <span className="temperature-value">{ convertToFahrenheit()}</span>
            <span className="units"><a href="/" onClick={showCelsius}>ºC</a> | ºF</span>
            </span>
        )
    }
}