import React from "react";
import PropTypes from "prop-types";
import "../styles/weather.scss";

const Weather = ({ city, country, temperature, humidity, description }) => {
  return (
    <>
      <div className="weather__info">
        <p className="weather__key">
          City:
          <span className="weather__value">{city ? city : "N/A"}</span>
        </p>
        <p className="weather__key">
          Country:
          <span className="weather__value">{country ? country : "N/A"}</span>
        </p>
        <p className="weather__key">
          Temperature:
          <span className="weather__value">
            {temperature ? temperature : "N/A"}
          </span>
        </p>
        <p className="weather__key">
          Humidity:
          <span className="weather__value">{humidity ? humidity : "N/A"}</span>
        </p>
        <p className="weather__key">
          Weather forecast:
          <span className="weather__value">
            {description ? description : "N/A"}
          </span>
        </p>
      </div>
    </>
  );
};

Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  description: PropTypes.string
};

export default Weather;
