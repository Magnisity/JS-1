'use strict';

//Дополнительное задание 1
let income = prompt('Введите ваш доход в рублях:');
let tax;

if (income === null) {
    console.log('Вы ничего не ввели.');
} else {
    income = +income;

    if (income >= 0 && income < 15000 && Number.isFinite(income)) {
        tax = Math.round(income * 0.13);
        console.log(`Сумма налога составляет ${tax} руб.`);
    } else if (income >= 15000 && income < 50000 && Number.isFinite(income)) {
        tax = Math.round(income * 0.20);
        console.log(`Сумма налога составляет ${tax} руб.`);
    } else if (income >= 50000 && Number.isFinite(income)) {
        tax = Math.round(income * 0.30);
        console.log(`Сумма налога составляет ${tax} руб.`);
    } else {
        console.log('Вы ввели  некорректные данные.');
    }
}