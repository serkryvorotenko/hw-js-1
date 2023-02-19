alert('Hello!')
const userName = prompt('Как тебя зовут?');
const userYear = prompt('Какого ты года рождения?');
const userCountry = prompt('С какой ты страны?');
const userAge = 2023 - userYear;
const message = 'Привет, ' + userName + '! Твой возраст: ' + userAge + '. Твоя страна: ' + userCountry + '.';
alert(message);