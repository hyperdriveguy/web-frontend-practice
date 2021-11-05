function updateSeverity(num) {
    document.getElementById('severity-value').innerHTML = num;
}

const slider = document.querySelector('.slider input');
console.log(slider.value);

window.addEventListener('load', () => {updateSeverity(slider.value)});