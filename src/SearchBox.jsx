import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState();

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "e5872907c5c9f31221eb6fa7cca30397";

    let getWeatherInfo = async () => {
        let url = `${API_URL}q=${city}&appid=${API_KEY}`;
        console.log(url)
    let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,


    }
    console.log(result);
    return updateInfo;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
   
    setCity("");
    let info = await getWeatherInfo();
    updateInfo(info);
  };

  return (
    <div className="searchbox">
     
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="city name"
          variant="outlined"
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}