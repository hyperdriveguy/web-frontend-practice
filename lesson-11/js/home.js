const townSection = document.querySelector(".towns");

const townData = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const allTowns = jsonObject['towns'];
    const towns = [allTowns[6], allTowns[2], allTowns[0]];
    towns.forEach(town => {
        const townContainer = document.createElement('article');
        const textContainer = document.createElement('div');
        const townName = document.createElement('h3');
        const townMotto = document.createElement('p');
        const townFounded= document.createElement('p');
        const townPop = document.createElement('p');
        const townRain = document.createElement('p');
        const townImg = document.createElement('img');

        townName.textContent = town.name;
        townMotto.textContent = town.motto;
        townMotto.classList.add('motto');
        townFounded.textContent = `Year Founded: ${town.yearFounded}`;
        townPop.textContent = `Population: ${town.currentPopulation}`;
        townRain.textContent = `Average Rainfall: ${town.averageRainfall}`;
        townImg.src = `images/${town.photo.split('.')[0]}.webp`;
        townImg.alt = town.name;

        textContainer.appendChild(townName);
        textContainer.appendChild(townMotto);
        textContainer.appendChild(townFounded);
        textContainer.appendChild(townPop);
        textContainer.appendChild(townRain);
        townContainer.appendChild(textContainer);
        townContainer.appendChild(townImg);

        townSection.appendChild(townContainer);
    });
  });
