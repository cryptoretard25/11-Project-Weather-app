import "./style.css";
import {requestWeather, requestForecast, requestCurrentLocation } from "./modules/api";
import {WeatherData, Forecast, state} from './modules/classes'
import {loadDOM, searchInput, searchButton, convertButton, convertUnits} from './modules/upperdom';
import { dailyButton, handle, handleDots, hourlyButton, addDailyDOM, addHourlyDOM, dots } from "./modules/lowerdom";

const { log } = console;
log("Creating new project");


searchInput.addEventListener('change',(e)=>{
  state.input = e.target.value
  console.log(state.input)
})

searchButton.addEventListener('click', async ()=>{
  state.weather = new WeatherData(await requestWeather(state.input, state.units))
  state.forecast = new Forecast(await requestForecast(state.input, state.units));
  state.forecast.setDaily();
  state.forecast.setHourly();

  loadDOM(state.forecast, state.weather)
  addDailyDOM(state)
  dailyButton.click();
  log(state.daily)
  
  log(state.forecast.forecast.hourlyFiltered)
});

convertButton.addEventListener("click", () => {
  state.forecast.setConvertedDaily();
  state.forecast.setConvertedHourly();
  convertUnits(state);
  if(dailyButton.classList.contains('selected')){
    addDailyDOM(state);
  }else{
    addHourlyDOM(state, 0)
    dots[0].click();
  }
  log(state.forecast)
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
  dots[0].click();
})

dots.forEach(dot=>{
  dot.addEventListener('click', (e)=>{
    const target = e.target
    const index = e.target.dataset.dot;
    handleDots(target);
    addHourlyDOM(state, index)
    log(index)
  })
})

// Onload with current user location
state.input = await requestCurrentLocation();

(async ()=>{
  state.weather = new WeatherData(await requestWeather(state.input, state.units))
  state.forecast = new Forecast(await requestForecast(state.input, state.units));
  state.forecast.setDaily();
  state.forecast.setHourly();

  loadDOM(state.forecast, state.weather)
  addDailyDOM(state)

  log(state.forecast.forecast.hourlyFiltered)
  log(state.forecast.forecast.hourlyFiltered[0][0].getHour())
})()


