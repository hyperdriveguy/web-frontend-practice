function updateSeverity(num) {
    document.getElementById('severity-value').innerHTML = num;
}

const slider = document.querySelector('.slider input');

window.addEventListener('load', () => {updateSeverity(slider.value)});