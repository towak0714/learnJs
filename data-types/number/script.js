// 1.Сумма пользовательских чисел
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// P.S. Есть «подводный камень» при работе с типами.

    // let a = +prompt('Введите первое число','');
    // let b = +prompt('Введите второе число','');
    // alert(a + b)


    // 2.Почему 6.35.toFixed(1) == 6.3?
    // Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 
    // 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
    // например:
    // alert( 1.35.toFixed(1) ); // 1.4
    // Но почему в примере ниже 6.35 округляется до 6.3?
    
    // alert( 6.35.toFixed(1) ); // 6.3
    // Как правильно округлить 6.35?

    // решение:
    //  alert( Math.round(6.35 * 10) / 10 ); // 6.4



    // 3.Ввод числового значения
    // Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
    // Функция должна возвращать числовое значение.
    // Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
    // В этом случае функция должна вернуть null.

    // function readNumber() {
    //     let num;

    //     do {
    //       num = prompt("Введите число", '');
    //     } while ( !isFinite(num) );
      
    //     if (num === null || num === '') {
    //         return alert(null);
    //     }      
    //     return alert(+num);
    //   }
      
    //   readNumber();






    // 4.Случайное число от min до max
    // Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
    // Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
    // Пример работы функции:
    
    // function random(min, max) {
    //     return min + Math.random() * (max - min);
    //   }
    //   alert( random(1, 5) ); 
    //   alert( random(1, 5) ); 
    //   alert( random(1, 5) );    



    // 5.Случайное целое число от min до max
    // Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
    // Любое число из интервала min..max должно появляться с одинаковой вероятностью.
    // Пример работы функции:
    
    // function randomInteger(min, max) {
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    //   }
      
    // alert( randomInteger(1, 5) ); 
    // alert( randomInteger(1, 5) ); 
    // alert( randomInteger(1, 5) );
