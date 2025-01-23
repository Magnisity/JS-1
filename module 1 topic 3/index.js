'use strict';

{
    const item = prompt('Введите наименование товара:', 'Компьютерный стол');
    let count = prompt('Введите количество товара:', '5');
    const category = prompt('Введите категорию товара:', 'Офисная мебель');
    let price = prompt('Введите цену товара:', '4500');

    console.log('Тип данных параметра "количество товара":', typeof count);
    console.log('Тип данных параметра "цена товара":', typeof price);

    +count;
    +price;

    console.log(`Вы заказали ${count} шт товара "${item}" на общую сумму ${count * price} руб.`);
}