const API_KEY = '4e7df82b9420e465923c0a77036ca26a';
// Preston Town ID
const townID = '5604473';
const apiUrlCurrent = `http://api.openweathermap.org/data/2.5/weather?id=${townID}&units=imperial&appid=${API_KEY}`;
const apiUrlForecast = `http://api.openweathermap.org/data/2.5/forecast?id=${townID}&units=imperial&appid=${API_KEY}`;

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const skyConditionElement = document.querySelector('#sky-condition');
const highTempElement = document.querySelector('#high-temp');
const windChillElement = document.querySelector('#wind-chill');
const humidityElement = document.querySelector('#humidity');
const windSpeedElement = document.querySelector('#wind-speed');

const forecastFirstContainer = document.querySelector('#forecast-first-half');
const forecastSecondContainer = document.querySelector('#forecast-second-half');

function calcWindChill(temp, windSpeed){
    if (temp > 50 || windSpeed < 3) {
        return 'N/A';
    }
    let windChill = 35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16);
    windChill = Math.round(windChill);
    return windChill + '℉';
}

// Build weather summary
fetch(apiUrlCurrent)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        skyConditionElement.textContent = `${jsonObject.weather[0].main}, ${jsonObject.main.temp}℉`;
        highTempElement.textContent = `${jsonObject.main.temp_max}℉`;
        humidityElement.textContent = `${jsonObject.main.humidity}%`;
        windSpeedElement.textContent = `${jsonObject.wind.speed} mph`
        windChillElement.textContent = calcWindChill(jsonObject.main.temp, jsonObject.wind.speed);
    });

// Build five day forecast
fetch(apiUrlForecast)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let daysCount = 0;
        jsonObject.list.forEach((timeSeg) => {
            const dateParts = timeSeg.dt_txt.split(' ');
            const d = new Date(dateParts[0]);
            const weekday = daysOfWeek[d.getDay()];
            if (dateParts[1] == "18:00:00") {
                const dayTemp = `${timeSeg.main.temp}℉`;
                const dayWeatherImgSrc = `https://openweathermap.org/img/w/${timeSeg.weather[0].icon}.png`;
                const dayWeatherImgAlt = timeSeg.weather[0].description;

                const dayContainerElement = document.createElement('div');
                const weekdayElement = document.createElement('p');
                const dayWeatherElement = document.createElement('img');
                const dayTempElement = document.createElement('p');

                dayContainerElement.classList.add('forecast-day');
                weekdayElement.textContent = weekday;
                weekdayElement.style.fontWeight = 'bold';
                dayWeatherElement.src = dayWeatherImgSrc;
                dayWeatherElement.alt = dayWeatherImgAlt;
                dayTempElement.textContent = dayTemp
                dayTempElement.style.fontStyle = 'italic';

                dayContainerElement.appendChild(weekdayElement);
                dayContainerElement.appendChild(dayWeatherElement);
                dayContainerElement.appendChild(dayTempElement);
                if (daysCount < 3) {
                    forecastFirstContainer.appendChild(dayContainerElement);
                }
                else {
                    forecastSecondContainer.appendChild(dayContainerElement);
                }
                daysCount++;
            }
        });
    });

console.log(apiUrlForecast);
