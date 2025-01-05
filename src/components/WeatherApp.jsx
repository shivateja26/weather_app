import sunny from '../assets/images/sunny.png';
import snowy from '../assets/images/snowy.png';
import rainy from '../assets/images/rainy.png';
import cloudy from '../assets/images/cloudy.png';

const WeatherApp = () => {
  return (
    <div className="container">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">London</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" />
                    <i className="fa-solid fa-magnifying-glass"></i>
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
                        <i className="fa-solid fa-droplet">35%</i>
                    </div>
                    <div className="wind">
                        <div className="data-name">wind</div>
                        <i className="fa-solid fa-wind">3 km/h</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WeatherApp;
