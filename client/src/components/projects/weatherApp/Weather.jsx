import React, { useState } from "react";
import weatherServices from "../../../services/weatherService";
import { Formik, Form, Field } from "formik";
import WeatherCard from "./WeatherCard";
import DailyList from "./DailyList";
import { useDispatch } from "react-redux";
import { getWeather } from "../../../features/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState(false);

  const initialValues = {
    location: "",
  };

  const onSubmit = (value) => {
    weatherServices
      .getWeatherByCity(value.location)
      .then(onGetWeatherSuccess)
      .catch(onGetWeatherError);
  };

  const onGetWeatherSuccess = (response) => {
    dispatch(getWeather(response.data));
    setSearchResult(true);
  };

  const onGetWeatherError = (error) => {
    setSearchResult("error");
    console.log(error);
  };

  return (
    <React.Fragment>
      <div className="weatherApp">
        <h2>Weather App</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="row">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                  <label>Location</label>
                  <Field name="location" className="form-control" />
                  <button type="submit">Get Weather</button>
                </Form>
              </Formik>
            </div>
            {searchResult === true ? (
              <div className="row justify-content-center mt-4">
                <div className="col-4">
                  <WeatherCard />
                </div>
                <div className="col-6">
                  <DailyList />
                </div>
              </div>
            ) : searchResult === "error" ? (
              <div className="message">
                The location entered was not found. Please try again.
              </div>
            ) : (
              <div className="message">Enter a city or a zipcode!</div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Weather;
