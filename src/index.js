import "./style.css";
import { fillDaily } from "./modules/utils";
import {requestWeather, requestForecast, requestCurrentLocation } from "./modules/api";
import {WeatherData, Forecast, state} from './modules/classes'
import {loadDOM, searchInput, searchButton, convertButton, convertUnits} from './modules/upperdom';
import { dailyButton, handle, hourlyButton, addDailyDOM } from "./modules/lowerdom";

const { log } = console;
log("Creating new project");


searchInput.addEventListener('change',(e)=>{
  state.input = e.target.value
  console.log(state.input)
})

searchButton.addEventListener('click', async ()=>{
  state.weather = new WeatherData(await requestWeather(state.input, state.units))
  state.forecast = new Forecast(await requestForecast(state.input, state.units));
  state.daily = fillDaily(state.forecast.forecast.daily)

  loadDOM(state.forecast, state.weather)
  addDailyDOM(state)

  log(state.daily)
  log(state.forecast.forecast.daily)
});

convertButton.addEventListener("click", () => {
  convertUnits(state);
});

dailyButton.addEventListener('click', (e)=>{
  const target = e.target;
  handle(target)
  log('daily button clicked')
})

hourlyButton.addEventListener('click', (e)=>{
  const target = e.target;
  handle(target)
  log('hourly button clicked')
})


// Onload with current user location
state.input = 'ivanovo';
//Working API
//state.input = await requestCurrentLocation();

(async ()=>{
  state.weather = new WeatherData(await requestWeather(state.input, state.units))
  state.forecast = new Forecast(await requestForecast(state.input, state.units));
  state.daily = fillDaily(state.forecast.forecast.daily)
  loadDOM(state.forecast, state.weather)
  addDailyDOM(state)
  log(state.daily)
  log(state.daily[1].getDay())
})()

// const weather = new WeatherData(await requestWeather(state.input, state.units))
// const forecast = new Forecast(await requestForecast(state.input, state.units));
// loadDOM(forecast, weather)
// log(weather)
// log(forecast)
// log('---------------LEFT-BAR--------------------')
// log('Title:', forecast.getCurrentDescription())
// log('City:', weather.getTown())
// log('Date:', forecast.getCurrentDate())
// log('Temperature:', forecast.getCurrentTemp())
// log('Weather ico:', forecast.getCurrentIcon())
// log('---------------RIGHT-BAR--------------------')
// log('Feels like:', forecast.getCurrentFeelsLike())
// log('Humidity:', forecast.getCurrentHumidity())
// log('Chance of rain:', forecast.getCurrentChanceOfRain())
// log('Wind speed:', forecast.getCurrentWindSpeed())

