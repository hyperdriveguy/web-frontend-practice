const menu_button = document.querySelector('.menu');
const main_nav = document.querySelector('#main-nav');

menu_button.addEventListener('click', () => {main_nav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) main_nav.classList.remove('responsive')};

// Change logo to compact at small widths
resize_logo = function() {
    if (window.innerWidth < 507) {
        logo_image.src = 'images/logo-compact.png';
    }
    else {
        logo_image.src = 'images/logo-100px.png';
    }
}


const logo_image = document.querySelector('#logo');
window.onresize = () => {resize_logo()};
window.onload = () => {resize_logo()};
