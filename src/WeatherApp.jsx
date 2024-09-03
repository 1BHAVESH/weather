import SearchBox from './SearchBox'
import Infobox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    let [weatherImfo, setWeatherImfo] = useState({
        city: "jodhpur",
        feelsLike : 33.18,
        humidity : 63,
        temp: 29.87,
        tempMax : 29.87,
       tempMin : 29.87,
       weather : "overcast clouds"
    })

    let updateInfo = (result) =>{
        setWeatherImfo(result);
        console.log("---------", weatherImfo); // This might not log the updated value immediately
    }

    return(
        <div className="whole">
            <h2>weather</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <Infobox imfo = {weatherImfo}/>
        </div>
    )
}