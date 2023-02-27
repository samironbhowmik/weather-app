import React, { useState } from "react";
import "../components/Weather.css";
import axios from "axios"

const Weather = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("")
  const [lastCity, setLastCity]= useState([])
  const [weather, setWeatherData] = useState(null)
  var API_key = "d17259ef734880845ce96a25738c57c0"

  const handleSearch = async(e) => {
    // fetching from api
    // e.preventDefault()
    // const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=${API_key}&units=metric`)
    // console.log(result);
    // const data = await result.json()

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=${API_key}&units=metric`).then((res)=>{
        setCity(res.data)
        console.log(res.data);
    }).catch((error)=>{
        console.log(error);
    })

    //  if(data.cod===200)
    // {
    //     setWeatherData(data)
    //     setCity(search)
    //     if(lastCity.length===3)
    //     {
    //         setLastCity([search, ...lastCity.slice(0,2)])

    //     }else{
    //         setLastCity([search, ...lastCity])
    //     }
    // }
    // else{
    //     alert("Enter Valid City Name!")
    // }

  }
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <input
            value={search}
            className="search"
            type="text"
            placeholder="Enter City Name"
            onChange={handleChange}
          />
          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
          {/* details of city */}
            {weather && (
                <>
                    <p>Weather Details of City: {city}</p>
                    <p>Current Temperature: {setWeatherData.main.temp}</p>
                    <p>Temperature Range: {setWeatherData.main.temp_min} to {setWeatherData.main.temp_max} </p>
                    <p>Humidity: {setWeatherData.main.humidity}</p>
                    <p>Sea Level: {setWeatherData.main.sea_level}</p>
                    <p>Ground Level:{setWeatherData.main.grnd_level} </p>
                </>
            )}
            {/* last 3 city */}
            <h2 className="bottom-heading">Last 3 city entries</h2>
            <ul>
                {lastCity.map((city)=>{
                    return(
                        <>
                            <p key={city}>{city}</p>
                        </>
                    )
                })}
            </ul>
        </div>
      </div>
    </>
  );
};

export default Weather;
