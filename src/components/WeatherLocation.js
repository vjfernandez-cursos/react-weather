import React  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

var  WeatherLocation = () => (
      <div><Location city='Cairo'/><WeatherData/></div>
); 

export default WeatherLocation;

