const menu_button = document.querySelector('.menu');
const main_nav = document.querySelector('header nav');

menu_button.addEventListener('click', () => {main_nav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class untoggled
window.onresize = () => {if (window.innerWidth > 760) main_nav.classList.add('responsive')};

WebFont.load({
    google: {
        families: [
            'Abril Fatface',
            'Roboto Slab'
        ]
    }
})
