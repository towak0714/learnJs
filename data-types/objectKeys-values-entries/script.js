// 1.Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   function sumSalaries(salaries) {
//     let sum = 0;
//     for (let value of Object.values(salaries)) {
//      sum += value;
//   }
//     return sum;
//   }
  
//   console.log( sumSalaries(salaries) )




// 2.Напишите функцию count(obj), которая возвращает количество свойств объекта:
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».


// let user = {
//     name: 'John',
//     age: 30
//   };
  
//   function count(obj) {
//     return Object.keys(obj).length;
//   }
  
//   console.log( count(user) ); // 2