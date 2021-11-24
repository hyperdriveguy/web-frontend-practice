const cur_date = new Date();
const date_options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

const formatted_day = cur_date.toLocaleDateString('en-UK', date_options);

document.querySelector('#cur-date').innerHTML = formatted_day;

const cur_weekday = cur_date.getDay();

if (cur_weekday == 5) {
    const body_node = document.querySelector('.menu').parentNode.parentNode;

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