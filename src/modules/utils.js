import { state } from "./classes";

function getIcon(code) {
  const codes = {
    "01d": "./imgs/sun.svg",
    "01n": "./imgs/moon.svg",
    "02d": "./imgs/cloudy-day.svg",
    "02n": "./imgs/cloudy-night.svg",
    "03d": "./imgs/cloud.svg",
    "03n": "./imgs/cloud.svg",
    "04d": "./imgs/cloudy.svg",
    "04n": "./imgs/cloudy.svg",
    "09d": "./imgs/rainy.svg",
    "09n": "./imgs/rainy.svg",
    "10d": "./imgs/rainy.svg",
    "10n": "./imgs/rainy.svg",
    "11d": "./imgs/lightning.svg",
    "11n": "./imgs/lightning.svg",
    "13d": "./imgs/snow.svg",
    "13n": "./imgs/snow.svg",
    "50d": "./imgs/mist.svg",
    "50n": "./imgs/mist.svg",
  };
  const image = new Image(100);
  image.src = codes[code];
  return image;
}

function capitalize(string) {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

function toDateTime(seconds, timezone) {
  const t = new Date()
  t.setTime(seconds*1000)
  return {
    date: t.toLocaleDateString("en-US", {
      timeZone: timezone,
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: `Time: ${t.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour12: false,
    })}`,
  };
}

function toReadableTime(time) {
  time.split(" ");
}

function toReadableTemp(temp) {
  return Math.round(temp);
}

function roundToOne(val) {
  return Math.round(val * 10) / 10;
}

function setTempUnits(state) {
  return state.units === "metric" ? "°C" : "°F";
}
function setSpeedUnits(state) {
  return state.units === "metric" ? "km/h" : "mph";
}

function convertToF(value) {
  return value * 1.8 + 32;
}

function convertToC(value) {
  return (value - 32) / 1.8;
}

function convertToMph(value) {
  return value / 1.609344;
}

function convertToKmph(value) {
  return value * 1.609344;
}

function fillDaily(array) {
  return array.map((item) => {
    return {
      dt: item.dt,
      maxTemp: item.temp.max,
      minTemp: item.temp.min,
      icon: item.weather[0].icon,
      getDay: function () {
        const date = new Date();
        date.setTime(this.dt * 1000);
        return date.toLocaleDateString("en-US", {
          weekday: "long",
        });
      },
      getDate: function () {
        const date = new Date();
        date.setTime(this.dt * 1000);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });
      },
    };
  });
}

function convertDaily(array) {
  return array.map((item) => {
    return {
      dt: item.dt,
      maxTemp: (() => {
        if (state.units === "metric") {
          return convertToF(item.maxTemp);
        }
        if (state.units === "imperial") {
          return convertToC(item.maxTemp);
        }
      })(),
      minTemp: (() => {
        if (state.units === "metric") {
          return convertToF(item.minTemp);
        }
        if (state.units === "imperial") {
          return convertToC(item.minTemp);
        }
      })(),
      icon: item.icon,
      getDay: item.getDay,
      getDate: item.getDate,
    };
  });
}

function fillHourly(array) {
  const arr = array.slice(0, 24);
  const result = [];
  const temp = arr.map((item) => {
    return {
      timezone: state.forecast.forecast.timezone,
      dt: item.dt,
      temp: item.temp,
      icon: item.weather[0].icon,
      getHour: function () {
        const date = new Date();
        date.setTime(this.dt * 1000);
        return date.toLocaleTimeString("en-US", {
          timeZone: this.timezone,
          hour12: true,
          hour: "numeric",
        });
      },
    };
  });
  while (temp.length) {
    result.push(temp.splice(0, 8));
  }
  return result;
}

function convertHourly(array) {
  const temp = [];
  for (let arr of array) {
    temp.push(
      arr.map((item) => {
        return {
          timezone: item.timezone,
          dt: item.dt,
          temp: (() => {
            if (state.units === "metric") {
              return convertToF(item.temp);
            }
            if (state.units === "imperial") {
              return convertToC(item.temp);
            }
          })(),
          icon: item.icon,
          getHour: item.getHour,
        };
      })
    );
  }
  return temp;
}

export {
  getIcon,
  capitalize,
  toDateTime,
  toReadableTemp,
  toReadableTime,
  roundToOne,
  setTempUnits,
  setSpeedUnits,
  convertToF,
  convertToC,
  convertToMph,
  convertToKmph,
  fillDaily,
  convertDaily,
  fillHourly,
  convertHourly,
};
