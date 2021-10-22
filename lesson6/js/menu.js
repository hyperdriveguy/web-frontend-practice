const menu_button = document.querySelector('.menu');
const main_nav = document.querySelector('#main-nav');

menu_button.addEventListener('click', () => {main_nav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) main_nav.classList.remove('responsive')};

const logo_image = document.querySelector('#logo');

WebFont.load({
    google: {
        families: [
            'Comic Neue',
            'Noto Sans',
            'Noto Sans Deseret'
        ]
    }
})

// change label based on viewport size
const imageSize = document.querySelector('#img-size');

function heroImageSize() {
    if (window.innerWidth >= 705) {
        imageSize.textContent = 'Image Size: Large';
    }
    else if (window.innerWidth >= 546) {
        imageSize.textContent = 'Image Size: Medium';
    }
    else {
        imageSize.textContent = 'Image Size: Small';
    }
}

window.onresize = () => {heroImageSize()};
window.onload = () => {heroImageSize()};

