import * as utils from "./utils";
import { state } from "./classes";

const { log } = console;

const interfaceBox = document.querySelector(".interface");
const forecastBox = document.querySelector(".forecasts-block");
const changeHours = document.querySelector("change-hours");
const fields = interfaceBox.children;

const dailyButton = document.querySelector(".daily");
const hourlyButton = document.querySelector(".hourly");

const day = (day, date, temphigh, templow, icon) => {
  return ` 
  <div class="daily-forecast" id="current-day">
  <div class="daily_day">${day}</div>
  <div class="daily_date">${date}</div>
  <div class="daily_date"></div>
  <div class="daily_temp">
    <h1 class="daily_temp-high">${utils.toReadableTemp(temphigh)} ${utils.setTempUnits(state)}</h1>
    <p class="daily_temp-low">${utils.toReadableTemp(templow)} ${utils.setTempUnits(state)}</p>
  </div>
  <div class="daily_icon">
    <img src='${utils.getIcon(icon).src}'>
  </div>
</div>
  `;
};

const hour = (time, temp, icon) => {
  return `
  <div class="hourly-forecast" id="current-hour">
    <div class="hourly_time">${time}</div>
    <div class="hourly_temp">${temp}</div>
    <div class="hourly_icon">
      ${icon}
    </div>
  </div>  
  `;
};

const handle = (target) => {
  if (target.classList.contains("daily")) {
    log(fields);
    fields[0].className = "daily interface-btn selected";
    fields[1].className = "hourly interface-btn";
    fields[2].className = "change-hours hide";
    addDailyDOM(state);
  } else if (target.classList.contains("hourly")) {
    fields[1].className = "hourly interface-btn selected";
    fields[0].className = "daily interface-btn";
    fields[2].className = "change-hours show";
    addHourlyDOM(state);
  }
};

const addDailyDOM = (state)=>{
  forecastBox.innerHTML = '';
  const daily = state.forecast.forecast.dailyFiltered;
  for(let i = 1; i<daily.length; i++){
    forecastBox.innerHTML += day(daily[i].getDay(), daily[i].getDate(), daily[i].maxTemp, daily[i].minTemp, daily[i].icon)
  }

}
const addHourlyDOM = (state)=>{
  forecastBox.innerHTML = '';
  const hourly = state.hourly;
  
}

export { dailyButton, hourlyButton, handle, addDailyDOM };
