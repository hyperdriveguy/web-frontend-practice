const API_KEY = '4e7df82b9420e465923c0a77036ca26a';
const townID = '5604473';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${townID}&units=imperial&appid=${API_KEY}`;

console.log(apiUrl);

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        document.querySelector('#current-temp').textContent = jsonObject.main.temp;
        const curWeatherImgSrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        document.querySelector('#imagesrc').textContent = curWeatherImgSrc;
        document.querySelector('#icon').src = curWeatherImgSrc;
        document.querySelector('#icon').alt = desc;

    });
