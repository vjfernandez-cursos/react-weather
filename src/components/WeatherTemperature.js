import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
const traduceState = state => {
    switch(state) {
        case 'cloud': return 'cloud';
        case 'cloudy': return 'cloudy'; 
        case 'rain': return 'rain'; 
        case 'snow': return 'snow'; 
        case 'windy': return 'windy'; 
        default: return 'day-sunny';

    }
}

const WeatherTemperature = ({temperature, weatherstate}) => (
    <div>
         <WeatherIcons name={traduceState(weatherstate)} size="2x" />
        <span>{temperature}ºC</span></div>
);
WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherstate: PropTypes.string
}
export default WeatherTemperature;
