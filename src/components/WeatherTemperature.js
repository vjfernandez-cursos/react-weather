import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temperature, weatherstate}) => (
    <div>
         <WeatherIcons name={weatherstate} size="2x" />
        <span>{temperature}ºC</span></div>
);

export default WeatherTemperature;
