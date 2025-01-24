'use strict';

//Вторая задача
{
    const rain = Math.round(Math.random());

    if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
    }

    if (rain === 0) {
    console.log('Дождя нет!');
    }
}

//Третья задача
{
    let resultMath = prompt('Введите количество баллов по математике:');
    let resultRus = prompt('Введите количество баллов по русскому языку:');
    let resultInform = prompt('Введите количесвто баллов по информатике:');

    if (resultMath === null || resultRus === null || resultInform === null) {
        console.log('Для правильного подсчета введите полученные баллы по всем трём предметам.');
    } else {
        resultMath = Number(resultMath);
        resultRus = Number(resultRus);
        resultInform = Number(resultInform);
        const totalResults = resultMath + resultRus + resultInform;

        if (resultMath >= 0 && resultRus >= 0 && resultInform >= 0 && Number.isFinite(resultMath) && Number.isFinite(resultRus) && Number.isFinite(resultInform)) {
            if (totalResults >= 265) {
                console.log(`Ваше количество баллов в сумме равно ${totalResults}. Поздравляем, вы поступили на бюджет!`);
            } else {
                    console.log(`Ваше количество баллов в сумме равно ${totalResults}. К сожалению, для поступления на бюджет этого недостаточно.`);
            }
        } else {
        console.log('Вы ввели некорректные данные.');
        }
    }
}