import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import Titles from "../componets/Titles";
import Weather from "../componets/Weather";
import Form from "../componets/Form";
import { API_URL } from "../../config";

const WeatherContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const success = pos => {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;

    let geoAPI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCgQs71zWRYkIHoiCl2Lejbsno12zv9qwA`;

    axios.get(geoAPI).then(res => {
      if (res.status === 200) {
        let api = "";
        let cityName =
          res.data.results.lenght >= 0
            ? res.data.results[0].address_components[2].long_name
            : null;
        let countryName =
          res.data.results.lenght >= 0
            ? res.data.results[7].address_components[0].long_name
            : null;

        if (cityName && countryName) {
          api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${API_URL}&units=metric`;
        }

        callAPIAfterFiveMinute(api);

        setInterval(() => {
          callAPIAfterFiveMinute(api);
        }, 300000);
      }
    });
  };

  const callAPIAfterFiveMinute = api => {
    axios
      .get(api)
      .then(res => {
        setCity(res.data.name);
        setCountry(res.data.sys.country);
        setTemperature(res.data.main.temp);
        setHumidity(res.data.main.humidity);
        setDescription(res.data.weather[0].description);
      })
      .catch(err => {
        toast.error("Location not found!");
      });
  };

  const handleWeather = ({ cityName, countryName }) => {
    if (!cityName) {
      toast.error("City and Country field should not be empty!");
      return;
    }
    if (!countryName) {
      toast.error("City and Country field should not be empty!");
      return;
    }

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${API_URL}&units=metric`;
    setIsLoading(true);

    axios
      .get(api)
      .then(res => {
        setCity(res.data.name);
        setCountry(res.data.sys.country);
        setTemperature(res.data.main.temp);
        setHumidity(res.data.main.humidity);
        setDescription(res.data.weather[0].description);

        setIsLoading(false);
      })
      .catch(err => {
        toast.error("City not found!");

        setIsLoading(false);
      });
  };

  return (
    <Container>
      <InnerContainer>
        <Titles />
        <WeatherWrapper>
          <Form getWeather={handleWeather} isLoading={isLoading} />
          <Weather
            city={city}
            country={country}
            temperature={temperature}
            humidity={humidity}
            description={description}
          />
        </WeatherWrapper>
      </InnerContainer>
    </Container>
  );
};

export default WeatherContainer;

const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

   
`;

const InnerContainer = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 90vw;

    @media (max-width: 768px) {
        flex-flow: column wrap;
        height: auto;
        max-height: 90vh;
    }
`;

const WeatherWrapper = Styled.div`
    width: 60%;
    height: 100%;
    background-color: #2c3e50;
    padding: 3rem;

    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }
`;
