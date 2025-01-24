'use strict';

//Первая задача
{
    const item = prompt('Введите наименование товара:', 'Компьютерный стол');
    let count = prompt('Введите количество товара:', '5');
    const category = prompt('Введите категорию товара:', 'Офисная мебель');
    let price = prompt('Введите цену товара:', '4500');

    if (count === null || price === null) {
        console.log('Для подсчета необходимо ввести количество и цену товара.');
    } else {
        count = Number(count);  //почему в этих двух строках перевод в число с помощью "+" (+count, +price) не работает?
        price = Number(price);

        if (count > 0 && price > 0 && Number.isInteger(count) && Number.isFinite(count) && Number.isFinite(price)) {
            console.log(`Вы заказали ${count} шт товара "${item}" на общую сумму ${count * price} руб.`);
        } else {
            console.log('Вы ввели некорректные данные');
        }
    }
}