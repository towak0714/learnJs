// 1.Привет, object
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// решение
// let user = [];

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete'
// delete user.name;


// 2.Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false



// function isEmpty(obj) {
//     for (let key in obj) {
//       return true;
//     }
//     return false;
//   }

// test1= {};
// test2= {
//     data: "08:30",
// };

// alert( isEmpty(test1) );
// alert( isEmpty(test2) );





// 3.Объекты-константы?
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//   name: "John"
// };
// это будет работать
// user.name = "Pete"; 

// это не будет
// user = test;





// 4.Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// function sum(obj) {
//     let sum = 0
//     for (let key in obj) {
//       sum += obj[key];
//     }
//     return sum;
// }
  
// console.log(sum(salaries))



// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.



// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(multiplyNumeric(menu))

