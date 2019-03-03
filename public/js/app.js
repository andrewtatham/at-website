function jamesAge() {
    var from = new Date(2016, 4, 5, 10, 44);
    var to = new Date();
    var age = to - from;
    var days = age / (1000 * 60 * 60 * 24);
    var weeks = age / (1000 * 60 * 60 * 24 * 7);
    var months = age / (1000 * 60 * 60 * 24 * 365.25 / 12);
    var years = age / (1000 * 60 * 60 * 24 * 365.25);

    document.getElementById("days").innerHTML = days.toFixed(6);
    document.getElementById("weeks").innerHTML = weeks.toFixed(6);
    document.getElementById("months").innerHTML = months.toFixed(6);
    document.getElementById("years").innerHTML = years.toFixed(6);
}

function loadRandomFact() {
    var facts = document.getElementsByClassName("fact");
    var index = Math.floor(Math.random() * facts.length)
    document.getElementById("random-fact").innerHTML = facts[index].outerHTML;
}

function onload() {
    var timer1 = setInterval(jamesAge, 1000);
    jamesAge();

    var timer2 = setInterval(loadRandomFact, 10000);
    loadRandomFact();

    particlesJS.load('particles-js', '/js/particlesjs-config.json');
}

onload();