import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherList = ({ weatherData }) => {
  return (
    <div className="weather-list">
      {weatherData.map((data, index) => (
        <WeatherCard
          key={index}
          location={data.location}
          temperature={data.temperature}
          condition={data.condition}
          windSpeed={data.windSpeed}
        />
      ))}
    </div>
  );
};

export default WeatherList;
