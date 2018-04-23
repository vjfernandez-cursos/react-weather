import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeeatherTemperature from './WeatherTemperature';
import WeatherLocation from './WeatherLocation';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div><WeatherExtraInfo humidity={80} wind={'10m/s'}/>
    <WeatherTemperature temperature ='hot' weatherstate='sunnom' /></div>
);

export default WeatherData;