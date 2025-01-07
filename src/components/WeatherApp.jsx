import sunny from '../assets/images/sunny.png';
import snowy from '../assets/images/snowy.png';
import rainy from '../assets/images/rainy.png';
import cloudy from '../assets/images/cloudy.png';
import { useState ,useEffect} from 'react';



const WeatherApp = () => {
    const api_key = "156fb693b088b17398963b099194a060";
    const [location,setLocation] = useState('')
    const [data,setData] =useState({})

    useEffect(()=>{
        const fetchDefaultWeather = async()=>{
           const defaultLocation ="Hyderabad"
           const url =`https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`
           const res = await fetch(url)
           const defaultData = await res.json()
           setData(defaultData)
        }
        fetchDefaultWeather()
       },[])


    const handleInputChange = (e)=>{
        setLocation(e.target.value)
    }
    const search =async ()=>{
        if(location.trim() !== ''){
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
            const res =await fetch(url)
            const searchData = await res.json()
            console.log(searchData)
            setData(searchData)
            setLocation('')
        }
       
    }
    const handleKeyDown =(e)=>{
        if(e.key==="Enter"){
            search()
        }
    }
    const weatherImages ={
        Clear:sunny,
        Clouds:cloudy,
        Rain:rainy,
        Snow:snowy,
        Haze:cloudy,
        Mist:cloudy,
        Fog:snowy
    }

    const weatherImage = data.weather ? weatherImages[data.weather[0].main]:null
    const backgroundImages ={
        Clear:'linear-gradient(to right,#f78732,#FFB945 )',
        Clouds:'linear-gradient(to right,#57d6d4,#71eeec )',
        Fog:'linear-gradient(to right,#57d6d4,#71eeec )',
        Rain:'linear-gradient(to right,#5bc8fb,#80eaff )',
        Snow:'linear-gradient(to right,#aff2ff,#fff )',
        Haze:'linear-gradient(to right,#57d6d4,#71eeec )',
        Mist:'linear-gradient(to right,#57d6d4,#71eeec )'

    }
    const backgroundImg= data.weather? backgroundImages[data.weather[0].main]:'linear-gradient(to right,#57d6d4,#71eeec )'
    const currentDate = new Date(); // Create the Date object

    const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const dayOfWeek = daysofWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const formattedDate =`${dayOfWeek},${dayOfMonth},${month}`

    return (
    <div className="container"style={{ background: backgroundImg }}>
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">{data.name}</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" value={location} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                </div>
            </div>
            <div className="weather">
                <img src={weatherImage} alt="sunny" />
                <div className="weather-type">{data.weather ? data.weather[0].main :null }</div>
                <div className="temp">{ data.main ? `${Math.floor(data.main.temp)}°`:null}</div>
                <div className="weather-date">{formattedDate}</div>
                <div className="weather-data">
                    <div className="humidity">
                        <div className="data-name">Humidity</div>
                        <i className="fa-solid fa-droplet"></i>
                        <div className='data'>{data.main ? data.main.humidity:null }%</div>
                    </div>
                    <div className="wind">
                        <div className="data-name">wind</div>
                        <i className="fa-solid fa-wind"></i>
                        <div className='data'>{data.wind ? data.wind.speed:null }km/h</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WeatherApp;
