import { useEffect, useState } from 'react';
import './Weather.css';
import Search from './Search';
import Weather from './Weather';
import axios from 'axios';
import React from 'react';
require('dotenv').config();

const API_KEY = process.env.API_KEY;


const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const fetchWeather = (e) => {
    e && e.preventDefault();
    if (e.key === 'Enter') {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
        )
        .then((res) => {
          setWeather(res.data);
          console.log(res.data);
          setQuery('');
        })
        .catch((err) => {
          console.error('Error fetching weather data:', err);
        });
    }
   };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Jalgaon&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="app">
      <Search query={query} setQuery={setQuery} fetchWeather={fetchWeather} />
      {weather.main && <Weather weather={weather} />}
    </div>
  );
};

export default WeatherApp;
