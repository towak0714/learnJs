// 1.Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

// let date = new Date(2012, 1, 20, 3, 12);
// alert( date );


// 2.Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// let date = new Date(2012, 0, 3); 

//  function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// }

// console.log( getWeekDay(date) ); 


// 3.День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.


// let date = new Date(2012, 0, 3);

// function getLocalDay(date) {

//   let day = date.getDay();
//   if (day == 0) { 
//     day = 7;
//   }

//   return day;
// }

// console.log( getLocalDay(date) )


// 4. Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
  
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
//   }
  
//   let date = new Date(2015, 0, 2)
  
  
//   console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
//   console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
//   console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)





// 5.Последнее число месяца?
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).



// function getLastDayOfMonth(year, month) {
//     let lastDay = new Date(year, month + 1, 0);
//      return lastDay.getDate()
//    }
   
   
//    console.log(getLastDayOfMonth(2012, 1))
//    console.log(getLastDayOfMonth(2013, 1))
//    console.log(getLastDayOfMonth(2015, 5))





// 6.Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


// let date = new Date();

// function getSecondsToday() {
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }


// console.log( getSecondsToday() );





// 7.Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// let date = new Date();

// function getSecondsToTomorrow() {
//   let sec = 86400;
//   return sec - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
// }



// console.log( getSecondsToTomorrow(date) );




// 8.Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.


// function formatDate(date) {
//     let data2 = new Date();
      
//     let result = data2.getTime() - date.getTime();
      
//     if (result < 1000) {
//       return "прямо сейчас";
//     } if (result < 60000) {
//       return `${new Date(result).getSeconds()} сек. назад`;
//     } if (result < 3600000) {
//       return `${new Date(result).getMinutes()} мин. назад`;
//     }  
//       return new Date(data2 - result);
//     }
    
//     let date = new Date();
    
//     console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
//     console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//     console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад" 
//     console.log( formatDate(new Date(new Date - 86400 * 1000)) );   // вчерашняя дата