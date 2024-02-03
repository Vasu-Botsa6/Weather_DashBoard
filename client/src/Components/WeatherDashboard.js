import React, { useState, useEffect } from 'react';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "a0df3cb420a101f8249b2b4eb8ca2bd5";
  const city = 'New York'; // Example city

  useEffect(() => {
    console.log("api key",apiKey)
    console.log("wd in before",weatherData);
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
        //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
    console.log("wd in after",weatherData)
  }, [city, apiKey]);

  return (
    <div>
        
      {weatherData && (
        <div>
        {console.log("wd in return",weatherData)}
          <h2>Weather in {city}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* You can include more weather details as needed */}
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
