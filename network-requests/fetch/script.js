// Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, 
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: 
// https://api.github.com/users/USERNAME.
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.


// async function getUsers(names) {

//     let mas = [];

//     for(let item of names){

//         let response = await fetch(`https://api.github.com/users/${item}`);

//         if(response.ok) {

//             let result = await response.json();
//             mas.push(result);

//         }
//     }
    
//     return mas;
// }