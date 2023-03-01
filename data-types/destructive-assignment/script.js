// 1.Деструктурирующее присваивание
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)


// let user = { 
//     name: "John", 
//     years: 30 
// };

//  let {name, years: age, isAdmin = false} = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false



// 2.У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   function topSalary(salaries) {
    
//    let [maxNum, name] = [0, null];
    
//     for (let [key, value] of Object.entries(salaries)) {
//      if (maxNum < value) {
//         [maxNum, name] = [value, key];
//       }
//     }
  
//     return name;
//   }
  
//   console.log(topSalary(salaries))