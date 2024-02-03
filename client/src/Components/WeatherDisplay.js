// // import React from 'react';
// import bgImage from "./background_image.jpg";
// import './WeatherDisplay.css'; 

// const WeatherDisplay = ({ data }) => {
//   // Get today's date and day dynamically
//   const currentDate = new Date();
//   const options = { weekday: 'long' }; // Get full weekday name
//   const currentDay = currentDate.toLocaleDateString('en-US', options);

//   return (
//     <div className="weather-display" style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="weather-details">
//         <div className="weather-details-temp">{data.main.temp}°C</div>
//         <div className="weather-details-city">{data.name}</div> {/* Assuming data.name contains the city name */}
//       </div>
//       <div className="date-day">
//         <div className="day">{currentDay}</div>
//         <div className="date">{currentDate.toLocaleDateString()}</div>
//       </div>
//     </div>
//   );
// };

// export default WeatherDisplay;




import React from 'react';
import bgImage from "./background_image.jpg";
import './WeatherDisplay.css'; 

const WeatherDisplay = ({ data }) => {
  // Get today's date and day dynamically
  const currentDate = new Date();
  const options = { weekday: 'long' }; // Get full weekday name
  const currentDay = currentDate.toLocaleDateString('en-US', options);

  console.log("wd",data)

  // Format the date to "30 JAN 2024" format
  const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('en-US', { month: 'short' })} ${currentDate.getFullYear()}`;

  return (
    <div className="weather-display" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="weather-details">
        <div className="weather-details-temp">{data.main.temp}°C</div>
        <div className="weather-details-city"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="white" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>{" "}{data.name}</div> {/* Assuming data.name contains the city name */}
      </div>
      <div className="date-day">
        <div className="day">{currentDay}</div>
        <div className="date">{formattedDate}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;






