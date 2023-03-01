// 1.Две функции - один объект

// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// let obj = {

// };

// function A() { 
//     return obj;
//  }
// function B() { 
//     return obj;
//  }

// let a = new A();
// let b = new B();

// alert( a == b ); 






// 2.Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.


// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('Первое число?', '');
//       this.b = +prompt('Второе число?', '');
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( calculator.sum() );
//   alert( calculator.mul() );




// 3.Создайте new Accumulator
// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.a = +prompt('Первое число?', '')
//         this.b = +prompt('Второе число?', '')
//         this.value += this.a + this.b;
//     };
// }

// let accumulator = new Accumulator(1);

// accumulator.read();

// alert(accumulator.value);
