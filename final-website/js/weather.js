const API_KEY = '4e7df82b9420e465923c0a77036ca26a';
const curDate = new Date();
const time = Math.floor(curDate.getTime() / 1000);
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=43.822282&lon=-111.790987&dt=${time}&units=imperial&appid=${API_KEY}`;

console.log(weatherUrl);

const curWeather = document.querySelector('.cur-weather');
const futureWeather = document.querySelector('.forecast-weather');

fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const dayContainer = document.createElement('div');
        const curStatus = document.createElement('p');
        const dayWeatherElement = document.createElement('img');


        dayWeatherElement.src = `https://openweathermap.org/img/w/${jsonObject.current.weather[0].icon}.png`;
        dayWeatherElement.alt = jsonObject.current.weather[0].description;

        curStatus.innerHTML = `${jsonObject.current.weather[0].description}<br>${jsonObject.current.temp}℉<br>${jsonObject.current.humidity}%`;

        dayContainer.appendChild(dayWeatherElement);
        dayContainer.appendChild(curStatus);
        curWeather.appendChild(dayContainer);
    });
