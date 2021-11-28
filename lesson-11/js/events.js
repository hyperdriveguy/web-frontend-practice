const eventSection = document.querySelector("#events");

const townData = 'https://byui-cit230.github.io/weather/data/towndata.json';

const idTown = document.querySelector('#town-id').textContent

const idKey = {
    5604473: 'Preston',
    5603240: 'Fish Haven',
    5607916: 'Soda Springs'
}

fetch(townData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const allTowns = jsonObject['towns'];
    const towns = [allTowns[6], allTowns[2], allTowns[0]];
    towns.forEach(town => {
        if (town.name == idKey[idTown]) {
            town.events.forEach( e => {
                const event = document.createElement('p');
                event.textContent = e;
                eventSection.appendChild(event);
            });
        }
    });
  });