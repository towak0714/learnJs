// 1.Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("вася"))

// ucFirst("вася") == "Вася";




// 2.Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'xxx', а иначе false.
// Функция должна быть нечувствительна к регистру:

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log( checkSpam('buy ViAgRA now') );
// console.log( checkSpam('free xxxxx') );
// console.log( checkSpam("innocent rabbit") ) ;





// 3.Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//     let strDot = '…'
//     if( str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + strDot;
//     } else {
//         return str;
//     }
    
// }

// console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
// console.log( truncate("Всем привет!", 20) );



// 4.Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); 