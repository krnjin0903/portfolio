import React, { useEffect, useState } from "react";
import "./weather.css";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const weatherData = useSelector((state) => state.weather.weather);
  console.log(weatherData);
  const [scale, setScale] = useState("temp_c");
  const [forecast, setForecast] = useState();
  const [backgroundStyle, setBackgroundStyle] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();
  const [currentHour, setCurrentHour] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [todayWeather, setTodayWeather] = useState();

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
    const currentWeather = weatherData.forecast.forecastday[0];
    setTodayWeather(currentWeather);
    const time = weatherData.location.localtime.split(" ")[1];
    const currentDate = new Date(weatherData.location.localtime);
    const hour = Number(time.split(":")[0]);
    setCurrentTime(time);
    setCurrentHour(hour);
    const day = currentDate.getDay();
    setDayOfWeek(day);

    const fiveHours = currentWeather.hour.slice(hour, hour + 5);
    if (hour >= 18 || hour < 4) {
      setBackgroundStyle("backgroundNight");
    } else if (hour >= 12) {
      setBackgroundStyle("backgroundAfternoon");
    } else {
      setBackgroundStyle("backgroundMorning");
    }
    setForecast(fiveHours);
  }, [weatherData, currentTime]);

  const mapForecast = (weather) => {
    let time = Number(weather.time.split(" ")[1].split(":")[0]);
    if (time === currentHour) {
      time = "Now";
    } else if (time > 12) {
      time = time - 12;
    }

    return (
      <div>
        <p>{time}</p>
        <img src={weather.condition.icon} alt="" />
        <p>{weather[scale]}</p>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div>
        {todayWeather?.hour[currentHour] ? (
          <div className="col text-center" style={{ color: "white" }}>
            <div className="card h-100">
              <div className={`card-body pt-5 ${backgroundStyle}`}>
                <div className="row">
                  <p className="col text-start fw-bold">
                    {weatherData.location.name}
                  </p>
                  <p className="col text-end fw-bold">{`${days[dayOfWeek]} ${currentTime}`}</p>
                </div>
                <h1>
                  {todayWeather.hour[currentHour][scale]}
                  °C
                </h1>
                <h5>{todayWeather.hour[currentHour].condition.text}</h5>
                <img
                  src={todayWeather.hour[currentHour].condition.icon}
                  alt=""
                />
                <div
                  className="justify-content-between"
                  style={{ display: "flex", marginTop: 270 }}
                >
                  {forecast ? forecast.map(mapForecast) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default WeatherCard;
