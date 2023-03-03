import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DailyList = () => {
  const weatherData = useSelector((state) => state.weather.weather);

  const [forecast, setForecast] = useState();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    setForecast(weatherData.forecast.forecastday);
  }, [weatherData]);

  const mapForecast = (dayWeather) => {
    const date = new Date(dayWeather.date + " 00:00");
    const day = date.getDay();

    return (
      <div className="border row mb-3 p-3 align-items-center">
        <div className="col">
          <img src={dayWeather.day.condition.icon} alt="" />
          <div className="fw-bold d-inline"> {days[day]}</div>
        </div>

        <div className="col d-flex justify-content-end">
          <div className="fw-bold d-inline">
            {dayWeather.day.condition.text}
          </div>
          <div className="fw-bold  d-inline ms-2" style={{ color: "gray" }}>
            {dayWeather.day.mintemp_c}°C /{dayWeather.day.maxtemp_c}°C
          </div>
        </div>
      </div>
    );
  };

  return <React.Fragment>{forecast?.map(mapForecast)}</React.Fragment>;
};

export default DailyList;
