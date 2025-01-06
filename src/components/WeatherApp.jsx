import sunny from '../assets/images/sunny.png';
import snowy from '../assets/images/snowy.png';
import rainy from '../assets/images/rainy.png';
import cloudy from '../assets/images/cloudy.png';
import { useState } from 'react';

const WeatherApp = () => {
    const api_key = "156fb693b088b17398963b099194a060";
    const [location,setLocation] = useState['']
    const [data,setData] =useState({})

    const handleInputChange = ()=>{
        setLocation(e.target.value)
    }
    const search =async ()=>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${api_key}&units=Metric&appid=${api_key}`
        const res =await fetch(url)
        const searchData = await res.json()
        console.log(searchData)
        setData(searchData)
        setLocation('')
    }
  return (
    <div className="container">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">London</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" value={location} onChange={handleInputChange} />
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                </div>
            </div>
            <div className="weather">
                <img src={sunny} alt="sunny" />
                <div className="weather-type">Clear</div>
                <div className="temp">28°</div>
                <div className="weather-date">Fri, 3 May</div>
                <div className="weather-data">
                    <div className="humidity">
                        <div className="data-name">Humidity</div>
                        <i className="fa-solid fa-droplet"></i>
                        <div className='data'>35%</div>
                    </div>
                    <div className="wind">
                        <div className="data-name">wind</div>
                        <i className="fa-solid fa-wind"></i>
                        <div className='data'>3 km/h</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WeatherApp;
