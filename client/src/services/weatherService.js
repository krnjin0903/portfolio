import axios from "axios";

const weatherEndpoint = "https://api.weatherapi.com/v1";

const getWeatherByCity = (query) => {
  const config = {
    method: "GET",
    url: `${weatherEndpoint}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}&days=7`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const weatherServices = { getWeatherByCity };

export default weatherServices;
