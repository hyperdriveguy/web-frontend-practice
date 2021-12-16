const mainSection = document.querySelector('.business-card-container');

fetch('data/directory.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        jsonObject.businesses.forEach(business => {
            const businessCard = document.createElement('article');
            const logo = document.createElement('img');
            const name = document.createElement('h3');
            const info = document.createElement('p');

            businessCard.classList.add('business-card');

            logo.src = business.logo;
            logo.alt = `${business.name}'s logo`;

            name.textContent = business.name;

            let shownSite;

            if (business.website.length > 26) {
                shownSite = 'Website';
            }
            else {
                shownSite = business.website;
            }

            info.innerHTML = `${business.contact.phone}<br><a href=mailto:${business.contact.email}>${business.contact.email}</a><br><a href=https://${business.website}>${shownSite}</a>`;

            businessCard.appendChild(name);
            businessCard.appendChild(logo);
            businessCard.appendChild(info);

            mainSection.appendChild(businessCard);
        });
    });

const listView = document.querySelector('.list-view');
const gridView = document.querySelector('.grid-view');

listView.addEventListener('click', () => {mainSection.classList.add('force-list')});

gridView.addEventListener('click', () => {mainSection.classList.remove('force-list')});

// Revert to grid view on resize from smaller view
window.onresize = () => {if (window.innerWidth > 476) mainSection.classList.remove('force-list')};
