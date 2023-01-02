import * as utils from "./utils";
import { state } from "./classes";

const { log } = console;

const interfaceBox = document.querySelector(".interface");
const forecastBox = document.querySelector(".forecasts-block");
const changeHours = document.querySelector("change-hours");
const fields = interfaceBox.children;

const leftArrow = document.querySelector('.change_left')
const rightArrow = document.querySelector('.change_right')
const dots = document.querySelectorAll('.dot')

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
    <div class="hourly_time">${time.toLowerCase()}</div>
    <div class="hourly_temp">${utils.toReadableTemp(temp)} ${utils.setTempUnits(state)}</div>
    <div class="hourly_icon">
      <img src='${utils.getIcon(icon).src}'>
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
    addHourlyDOM(state, 0);
  }
};

const handleDots = (target) =>{
  if(target.classList.contains('dot0')){
    dots[0].className = 'dot dot0 dot-selected';
    dots[1].className = 'dot dot1'
    dots[2].className = 'dot dot2'
  }
  if(target.classList.contains('dot1')){
    dots[0].className = 'dot dot0'
    dots[1].className = 'dot dot1 dot-selected'
    dots[2].className = 'dot dot2'
  }
  if(target.classList.contains('dot2')){
    dots[0].className = 'dot dot0';
    dots[1].className = 'dot dot1'
    dots[2].className = 'dot dot2 dot-selected'
  }
}

const addDailyDOM = (state)=>{
  forecastBox.innerHTML = '';
  const daily = state.forecast.forecast.dailyFiltered;
  for(let i = 1; i<daily.length; i++){
    forecastBox.innerHTML += day(daily[i].getDay(), daily[i].getDate(), daily[i].maxTemp, daily[i].minTemp, daily[i].icon)
  }

}
const addHourlyDOM = (state, index)=>{
  forecastBox.innerHTML = '';
  const hourly = state.forecast.forecast.hourlyFiltered[index]; 
  for (let i = 0; i<hourly.length; i++){
    forecastBox.innerHTML += hour(hourly[i].getHour(), hourly[i].temp, hourly[i].icon)
  }
}

export { dailyButton, hourlyButton, dots, handle, handleDots, addDailyDOM, addHourlyDOM };
