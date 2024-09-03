import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "e5872907c5c9f31221eb6fa7cca30397";

    let getWeatherInfo = async () => {
        if (!city) return; // Check if city is provided
        let url = `${API_URL}q=${city}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let jsonResponse = await response.json();

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        updateInfo(result);
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        await getWeatherInfo(); // Fetch and update weather info first
        setCity(""); // Reset the city input after updating info
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
                <br /><br />
                <Button variant="contained" type="submit">
                    Send
                </Button>
            </form>
        </div>
    );
}