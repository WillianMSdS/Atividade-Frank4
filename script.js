const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos');
const dias = document.getElementById('dias');
const meses = document.getElementById('meses');
const anos = document.getElementById('anos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let mill = dateToday.getMilliseconds();
    let day = dateToday.getDate();
    let mont = dateToday.getMonth() + 1;
    let ye = dateToday.getFullYear();

    if (hr <10) hr = '0' + hr;

    if (min <10) min = '0' + min;

    if (s <10) s = '0' + s;
    
    if (mill <10) mill = '0' + mill;

    if (day <10) day = '0' + day;

    if (mont <10) mont = '0' + mont;

    if (ye <10) ye = '0' + ye;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milesimos.textContent = mill;
    dias.textContent = day;
    meses.textContent = mont;
    anos.textContent = ye;

})