import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeeatherTemperature from './WeatherTemperature';
import WeatherLocation from './WeatherLocation';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div><WeatherExtraInfo humidity={80} wind={'10m/s'}/>
    <WeatherTemperature temperature ='12' weatherstate='cloud' /></div>
);

export default WeatherData;