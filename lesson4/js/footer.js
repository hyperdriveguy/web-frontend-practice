const cur_date = new Date();
const date_options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

const formatted_day = cur_date.toLocaleDateString('en-UK', date_options);

document.querySelector('#cur-date').innerHTML = formatted_day;