const $inputDay = document.querySelector('#inputDay');
const $inputMonth = document.querySelector('#inputMonth');
const $inputYear = document.querySelector('#inputYear');

const $inputLeapYear = document.querySelector('#inputLeap');
const $inputWeekDay = document.querySelector('#inputWeekday');
const $inputWorkingDay = document.querySelector('#inputWorkingDay');

const $btnCalculate = document.querySelector('#btnCalculate');

const $textError = document.querySelector('#textError');

const WEEKDAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const date = new Date();
$inputDay.value = date.getDate();
$inputMonth.value = date.getMonth();
$inputYear.value = date.getFullYear();

$btnCalculate.addEventListener('click', () => {
    const day = $inputDay.value;
    const month = $inputMonth.value;
    const year = $inputYear.value;

    if (day > 31 || day < 1) return $textError.textContent = 'El día debe estar entre 1 y 31';
    if (month > 11 || month < 0) return $textError.textContent = 'El mes debe estar entre 1 y 12';
    if (day > 29 && month === 2 ) return $textError.textContent = 'El día debe estar entre 1 y 31';

    const date = new Date(year, month, day);

    const leapYear = isLeapYear(year);
    const isWorkingDay = itsWorkingDay(date.getDay());
    const weekDay = WEEKDAYS[date.getDay()];

    $inputLeapYear.value = leapYear ? 'Año bisiesto' : 'Año normal';
    $inputWorkingDay.value = `${weekDay}, ${isWorkingDay ? 'día laborable' : 'fin de semana'}`;
});

function isLeapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
}

function itsWorkingDay(day) {
    switch (day) {
        case 0: case 6:
            return false;
        default:
            return true;
    }
}