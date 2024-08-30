import React from "react";

const Weather = ({ weather }) => {
    if (!weather || !weather.main || !weather.weather || !weather.sys) {
      return <p>No weather data available</p>;
    }
    const temp = weather.main.temp;
    const temperatureCelsius = temp > 100 ? (temp - 273.15).toFixed(2) : temp.toFixed(1);
  
    return (
      <div className="weather">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <p>Temperature: {temperatureCelsius}°C</p>
        <p>Weather: {weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      </div>
    );
  };
  
  export default Weather;