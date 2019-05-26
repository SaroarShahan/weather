import React, { useState } from "react";
import PropTypes from "prop-types";
import Loader from "../common/Loader";

const Form = ({ getWeather, isLoading }) => {
  const [cityName, setCityName] = useState("");
  const [countryName, setountryName] = useState("");

  const hanldeGetWeather = () => {
    getWeather({ cityName, countryName });
    setCityName("");
    setountryName("");
  };

  return (
    <>
      <input
        type="text"
        name="city"
        placeholder="City name..."
        onChange={e => setCityName(e.target.value)}
      />
      <input
        type="text"
        name="country"
        placeholder="Country name..."
        onChange={e => setountryName(e.target.value)}
      />
      <button onClick={hanldeGetWeather} className="btn" type="submit">
        {isLoading ? <Loader small color="#fff" /> : "Search"}
      </button>
    </>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func,
  isLoading: PropTypes.bool
};

export default Form;
