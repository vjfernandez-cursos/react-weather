import React from 'react';

const WeatherExtraInfo = ( {humidity, wind}) => (
        <div>
                <span>{`${humidity}%`}</span>&nbsp;
                <span>{wind + ' VIENTO'}</span>
        </div>
);

export default WeatherExtraInfo;