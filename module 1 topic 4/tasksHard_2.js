'use strict';

//Дополнительное задание 1
let income = prompt('Введите ваш доход в рублях:');
let tax;

if (income === null) {
    console.log('Вы ничего не ввели.');
} else {
    income = +income;

    if (income >= 0 && income <= 15000 && Number.isFinite(income)) {
        tax = Math.round(income * 0.13);
        console.log(`Сумма налога составляет ${tax} руб.`);
    } else if (income > 15000 && income <= 50000 && Number.isFinite(income)) {
        tax = Math.round(15000 * 0.13 + (income - 15000)*0.2);
        console.log(`Сумма налога составляет ${tax} руб.`);
    } else if (income > 50000 && Number.isFinite(income)) {
        tax = Math.round(15000 * 0.13 + (50000 - 15000) * 0.2 + (income - 50000) * 0.30);
        console.log(`Сумма налога составляет ${tax} руб.`);
    } else {
        console.log('Вы ввели  некорректные данные.');
    }
}