import React from 'react';

const WeatherCard = ({ location, temperature, condition, windSpeed }) => {
  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <p>Temperature: {temperature}</p>
      <p>Condition: {condition}</p>
      <p>Wind Speed: {windSpeed}</p>
    </div>
  );
};

export default WeatherCard;
