import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css"

export default function Infobox({ imfo }) {
  console.log("**", imfo.city); // Error: imfo might be undefined

  const INIT_URL =
    "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=2048x2048&w=is&k=20&c=VP4sgIBQaIcgxMDi-GrF0s2ASAHHymy3SHrcI2Gd6vQ=";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
  return (
    <div className="weather">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            imfo.humidity > 80 ? RAIN_URL : imfo.temp > 20 ? HOT_URL : COLD_URL
          }
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {imfo.city} {imfo.humidity > 80 ? <ThunderstormIcon /> : imfo.temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon />}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {imfo.temp}</p>
            <p>Humidity = {imfo.humidity}</p>
            <p>Min temp = {imfo.tempMin}</p>
            <p>Max temp = {imfo.tempMax}</p>
            <p>Feels like = {imfo.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
