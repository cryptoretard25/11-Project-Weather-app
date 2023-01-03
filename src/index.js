import "./style.css";
import { requestWeather, requestForecast, requestCurrentLocation, } from "./modules/api";
import { WeatherData, Forecast, state } from "./modules/classes";
import { loadDOM, searchInput, searchButton, convertButton, convertUnits, } from "./modules/upperdom";
import { dailyButton, handle, handleDots, hourlyButton, addDailyDOM, addHourlyDOM, dots, leftArrow, rightArrow, } from "./modules/lowerdom";

const { log } = console;
log("Creating new project");

searchInput.addEventListener("change", (e) => {
  state.input = e.target.value;
});

searchButton.addEventListener("click", async () => {
  state.weather = new WeatherData(
    await requestWeather(state.input, state.units)
  );
  state.forecast = new Forecast(
    await requestForecast(state.input, state.units)
  );
  state.forecast.setDaily();
  state.forecast.setHourly();

  loadDOM(state.forecast, state.weather);
  if (dailyButton.classList.contains("selected")) {
    addDailyDOM(state);
  } else {
    addHourlyDOM(state, state.index);
  }
});

convertButton.addEventListener("click", () => {
  state.forecast.setConvertedDaily();
  state.forecast.setConvertedHourly();
  convertUnits(state);
  if (dailyButton.classList.contains("selected")) {
    addDailyDOM(state);
  } else {
    addHourlyDOM(state, state.index);
  }
});

dailyButton.addEventListener("click", (e) => {
  const target = e.target;
  handle(target);
});

hourlyButton.addEventListener("click", (e) => {
  const target = e.target;
  handle(target);
  addHourlyDOM(state, state.index);
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = e.target.dataset.dot;
    state.index = index;
    handleDots(state.index);
    addHourlyDOM(state, state.index);
  });
});

rightArrow.addEventListener("click", () => {
  if (state.index < 2) {
    state.index++;
    handleDots(state.index);
    addHourlyDOM(state, state.index);
  } else return;
});

leftArrow.addEventListener("click", () => {
  if (state.index > 0) {
    state.index--;
    handleDots(state.index);
    addHourlyDOM(state, state.index);
  } else return;
});

// Onload with current user location
state.input = await requestCurrentLocation();

(async () => {
  state.weather = new WeatherData(
    await requestWeather(state.input, state.units)
  );
  state.forecast = new Forecast(
    await requestForecast(state.input, state.units)
  );
  state.forecast.setDaily();
  state.forecast.setHourly();

  loadDOM(state.forecast, state.weather);
  addDailyDOM(state);
})();
