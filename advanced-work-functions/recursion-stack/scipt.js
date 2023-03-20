// 1.Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:


// Решение с помощью цикла:

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alert( sumTo(100) );

// // Решение через рекурсию:

// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// alert( sumTo(100) );

// // Решение по формуле: sumTo(n) = n*(n+1)/2:

// function sumTo(n) {
//   return n * (n + 1) / 2;
// }

// alert( sumTo(100) );


// 2.Вычислить факториал
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", 
// и так далее до 1. Факториал n обозначается как n!

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }

//   alert( factorial(5) ); // 120


// 3.Числа Фибоначчи
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, 
// следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы:
// function fib(n) {
//     let a;
//     let b;
//     let c;
//     let d;
//     if (n > 0 && n <= 2) return 1;

//     for (let i = 1; i < n; i++) {
//         if (i == 1) {
//             a = 1; b = 1;
//         } else {
//             if (i % 3 == 2) { c = a + b; d = c; }
//             if (i % 3 == 1) { a = c + b; d = a; }
//             if (i % 3 == 0) { b = c + a; d = b; }
//         }
//     }
//     return d;
// }


// 4.Вывод односвязного списка
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.


// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };


// let printReverseListС = (list) => {
//     let arr = [list.value];

//     while (list.next) {
//         list = list.next;
//         arr.push(list.value);
//     }
//     arr.map(item => alert(item));

// }

// printReverseListС(list);


// рекурсия
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printList(list) {

//     alert(list.value);

//     if (list.next) {
//         printList(list.next);
//     }

// }

// printList(list);



// 5.Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

// цикл
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };


// let printReverseListС = (list) => {
//     let arr = [list.value];

//     while (list.next) {
//         list = list.next;
//         arr.push(list.value);
//     }
//     arr.reverse().map(item => alert(item));

// }

// printReverseListС(list);



// рекурсия

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printReverseList(list) {

//     if (list.next) {
//         printReverseList(list.next);
//     }

//     alert(list.value);
// }

// printReverseList(list);