// toLocalDateString
const options = {year: 'numeric'};
//document.getElementById('yeet').textContent = new Date().toLocaleDateString('en-US', options);

//document.getElementById('foo').textContent = 'You retarded foobar';
//let yeet = document.getElementById('lorem').textContent;
//document.getElementById('lorem').textContent = `Yeety ${ yeet } yeet`;


let copyright = document.querySelector('#copyright');
let modified = document.querySelector('#modified');

let cur_year = new Date().toLocaleDateString('en-US', options);
let mod_date = document.lastModified;

modified.innerHTML = `Last Modified: ${mod_date}`;
copyright.innerHTML = cur_year;

