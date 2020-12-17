import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Country({src}) {
    const api_key=process.env.REACT_APP_API_KEY;

    const {name, languages,capital, population, flag} = src[0]
    const [temperature, setTemperature] = useState("")
    const [icon, setIcon] = useState("")
    const [wind, setWind] = useState("")
    
    function hookCapital(){
        axios
        .get("http://api.openweathermap.org/data/2.5/weather?q="+capital+"&appid="+api_key+"&units=metric")
        .then(response=>{
            setTemperature(response.data.main.temp)
            setIcon(response.data.weather[0].icon)
            setWind(response.data.wind.speed)
        })
    }
    useEffect(hookCapital,[])


    return (
        <div>
            <h1>{name}</h1>

            <br></br>

            <p>capital {capital}</p>
            <p>population {population}</p>

            <br></br>
            <h3>Languages</h3>
            <ul>
                {languages.map(result=>
                <li key={result.iso639_1}> {result.name}</li>
                )}
            </ul>
            <img src={flag} alt="flag" height="100"></img>
            <br></br>
            <h3>Weather in {capital}</h3>
            <p>Temperature: {Math.round(temperature)} </p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-image"></img>

            <p>Wind {wind}</p>
        </div>
    )
}
