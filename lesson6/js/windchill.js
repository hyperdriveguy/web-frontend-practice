function calcWindChill(temp, windSpeed){
    if (temp > 50 || windSpeed < 3) {
        return 'N/A';
    }
    let windChill = 35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16);
    windChill = Math.round(windChill);
    return windChill + '℉';
}

const highTemp = document.querySelector('#high-temp').textContent;
const wind = document.querySelector('#wind-speed').textContent;

document.querySelector('#wind-chill').textContent = calcWindChill(highTemp, wind);