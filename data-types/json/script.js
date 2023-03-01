// 1.Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };
  
//   let json1 = JSON.stringify(user);
  
//   console.log(typeof json1);
//   console.log(json1);
  
//   let json2 = JSON.parse(json1);
  
//   console.log(typeof json2);
//   console.log(json2);



// 2.Исключить обратные ссылки
// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. 
// Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };
  
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  
//   console.log( JSON.stringify(meetup, function replacer(key, value) {
//      return (key != '' && value == meetup) ? undefined : value;
//   }));