function updateAges() {
    var to = new Date();
    updateAge(new Date(2016, 4, 5, 10, 44), to, "james");
    updateAge(new Date(2021, 4, 16, 18, 10), to, "emily");
}

function updateAge(from, to, prefix) {
    var age = to - from;
    var days = age / (1000 * 60 * 60 * 24);
    var weeks = age / (1000 * 60 * 60 * 24 * 7);
    var months = age / (1000 * 60 * 60 * 24 * 365.25 / 12);
    var years = age / (1000 * 60 * 60 * 24 * 365.25);
    document.getElementById(`${prefix}-days`).innerHTML = days.toFixed(6);
    document.getElementById(`${prefix}-weeks`).innerHTML = weeks.toFixed(6);
    document.getElementById(`${prefix}-months`).innerHTML = months.toFixed(6);
    document.getElementById(`${prefix}-years`).innerHTML = years.toFixed(6);
}

function onload() {
    var myVar = setInterval(updateAges, 1000);
    updateAges();
    particlesJS.load('particles-js', '/js/particlesjs-config.json');
}

onload();