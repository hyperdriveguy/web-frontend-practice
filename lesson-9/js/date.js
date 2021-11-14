const cur_date = new Date();

// Date display
const date_options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

const formatted_day = cur_date.toLocaleDateString('en-UK', date_options);

document.querySelector('#cur-date').innerHTML = formatted_day;

// Pancake day check
// const cur_weekday = cur_date.getDay();
const cur_weekday = 0;

if (cur_weekday == 5) {
    const body_node = document.querySelector('body');

    const pancake_container = document.createElement('div');
    pancake_container.style.border = '0.2em solid #00e3ff';
    pancake_container.style.backgroundColor = '#ffd382';
    pancake_container.style.padding = '0.25em';

    const pancake_notif = document.createElement('p');
    pancake_notif.textContent = 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.';
    pancake_notif.style.color = '#222222'

    const pancake_dismiss = document.createElement('button');
    pancake_dismiss.textContent = '❌';
    pancake_dismiss.style.float = 'right';
    pancake_dismiss.style.borderRadius = '5px';
    pancake_dismiss.style.backgroundColor = '#222222'

    pancake_dismiss.addEventListener('click', function() {
        pancake_container.remove();
    });

    pancake_container.appendChild(pancake_dismiss);
    pancake_container.appendChild(pancake_notif);

    body_node.insertBefore(pancake_container, body_node.firstChild);
}

// Check days since last visit
function formatVisit(unit, amount) {
    return 'Last Visited: ' + amount + ' ' + unit + ' ago';
}

function calcDateDiff(firstDate, secondDate) {
    const milsPassed = secondDate.getTime() - firstDate.getTime();
    const secsPassed = Math.floor(milsPassed / 1000);
    const minsPassed = Math.floor(secsPassed / 60);
    const hoursPassed = Math.floor(minsPassed / 60);
    const daysPassed = Math.floor(hoursPassed / 24);
    const monthsPassed = Math.floor(daysPassed / 30);
    const yearsPassed = Math.floor(monthsPassed / 12);

    if (yearsPassed > 0) {
        return formatVisit('years', yearsPassed);
    }
    else if (monthsPassed > 0) {
        return formatVisit('months', monthsPassed);
    }
    else if (daysPassed > 0) {
        return formatVisit('days', daysPassed);
    }
    else if (hoursPassed > 0) {
        return formatVisit('hours', hoursPassed);
    }
    else if (minsPassed > 0) {
        return formatVisit('minutes', minsPassed);
    }
    else if (secsPassed > 0) {
        return formatVisit('seconds', secsPassed);
    }
    else {
        return 'Just Barely Visited ' + milsPassed;
    }
}

const store = window.localStorage;
const vistedOutput = document.querySelector('#last-visited');

if (vistedOutput != null) {
    lastVisit = store.getItem('visited-gallery');

    if (lastVisit == null) {
        vistedOutput.textContent = 'First Time Visiting Gallery';
    }
    else {
        const lastVisitDate = new Date(lastVisit);
        vistedOutput.textContent = calcDateDiff(lastVisitDate, cur_date);
    }

    store.setItem('visited-gallery', cur_date.toString())
}
