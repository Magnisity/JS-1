'use strict';

{
    const item = prompt('Введите наименование товара:', 'Компьютерный стол');
    let count = +prompt('Введите количество товара:', '5');  //правильно ли сразу писать +promt, чтобы преобразовать в число? или лучше это делать где-то на другом шаге?
    const category = prompt('Введите категорию товара:', 'Офисная мебель');
    let price = +prompt('Введите цену товара:', '4500');

    if (count > 0 && price > 0 && Number.isInteger(count) && Number.isFinite(count) && Number.isFinite(price)) {
        console.log(`Вы заказали ${count} шт товара "${item}" на общую сумму ${count * price} руб.`);
    } else {
        console.log('Вы ввели некорректные данные');
    }
}