import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York'); 
  const apiKey = 'd68e2c214cc30bb8171a00d549b0a93e';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      
    };
    fetchWeatherData();
  }, [city, apiKey]);



  const handleSearch = (e) => {
    e.preventDefault();
    const newCity = e.target.elements.city.value;
    setCity(newCity);
  };

  return (
    <>
      
      <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <h1>
          <a className="navbar-brand mx-2">Weather Dashboard</a>
        </h1>
        <form className="form-inline" onSubmit={handleSearch}>
          <div className="input-group">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Your City"
              aria-label="Search"
              name="city" // Added name attribute
            />
            <div className="input-group-append">
              <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </nav>
        {weatherData && (
            <div>
                 <WeatherDisplay data={weatherData}/>
            </div>
         
        )}
      </div>
      <div>
        {weatherData && (
          <div>
            <h2>Weather in {city}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherDashboard;
