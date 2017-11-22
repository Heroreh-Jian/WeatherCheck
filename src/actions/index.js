import axios from "axios";
const Weather_API="7c682efab777835414683245b3c2386c";

export const FETCH_WEATHER="FETCH_WEATHER";
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${Weather_API}`;

export function fetchWeather(city){
    const url = `${URL}&q=${city}`
    const request=axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    };
}