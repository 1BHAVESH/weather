import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Infobox({ imfo }) {
    console.log("**", imfo.city); // Error: imfo might be undefined

    const INIT_URL = "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {imfo?.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {imfo?.temp}</p>
                        <p>Humidity = {imfo?.humidity}</p>
                        <p>Min temp = {imfo?.tempMin}</p>
                        <p>Max temp = {imfo?.tempMax}</p>
                        <p>Feels like = {imfo?.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}