const options = {year: 'numeric'};

let copyright = document.querySelector('#copyright');
let modified = document.querySelector('#modified');

let cur_year = new Date().toLocaleDateString('en-US', options);
let mod_date = document.lastModified;

modified.innerHTML = `Last Modified: ${mod_date}`;
copyright.innerHTML = cur_year;

WebFont.load({
    google: {
        families: [
            'Oswald',
            'Ubuntu'
        ]
    }
})