import * as utils from "./utils";

const state = {
  weather: {},
  forecast: {},
  units: 'metric', //imperial
  input: 'Ivanovo',

  daily: [],
  hourly: [],
  index: 0,
}

class WeatherData {
  constructor(weather) {
    this.weather = weather;
  }
  getTown() {
    return this.weather.name;
  }
}

class Forecast {
  constructor(forecast) {
    this.forecast = forecast;
  }
  //Current day
  /********************************************************************************** */
  getCurrentDescription() {
    const string = this.forecast.current.weather[0].description;
    return utils.capitalize(string);
  }

  getCurrentDate() {
    return utils.toDateTime(this.forecast.current.dt, this.forecast.timezone);
  }

  getCurrentTemp() {
    return utils.toReadableTemp(this.forecast.current.temp);
  }

  getCurrentIcon() {
    return utils.getIcon(this.forecast.current.weather[0].icon);
  }

  getCurrentFeelsLike() {
    return utils.toReadableTemp(this.forecast.current.feels_like);
  }

  getCurrentHumidity() {
    return this.forecast.current.humidity;
  }

  getCurrentChanceOfRain() {
    console.log(this.forecast);
    return this.forecast.hourly[0].pop * 100;
  }

  getCurrentWindSpeed() {
    return utils.roundToOne(this.forecast.current.wind_speed);
  }
  //Current day setters
  /********************************************************************************** */
  setCurrentTemp(val){
    this.forecast.current.temp = val;
  }

  setCurrentWindSpeed(val){
    this.forecast.current.wind_speed = val
  }

  setCurrentFeelsLike(val){
    this.forecast.current.feels_like = val
  }
  //DAILY
  /********************************************************************************** */
  setDaily(){
    this.forecast.dailyFiltered = utils.fillDaily(this.forecast.daily);
  }

  setConvertedDaily(){
    this.forecast.dailyFiltered = utils.convertDaily(this.forecast.dailyFiltered)
  }

  //HOURLY
  /********************************************************************************** */
  setHourly(){
    this.forecast.hourlyFiltered = utils.fillHourly(this.forecast.hourly)
  }

  setConvertedHourly(){
    this.forecast.hourlyFiltered = utils.convertHourly(this.forecast.hourlyFiltered)
  }
}

export {state, WeatherData, Forecast}