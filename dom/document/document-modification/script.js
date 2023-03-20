// 1.Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>

// function clear(elem) {
//     elem.innerHTML = '';
//   }

//   clear(elem)


// 2.Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//   let data = prompt("Введите текст для элемента списка", "");

//   if (!data) {
//     break;
//   }

//   let li = document.createElement('li');
//   li.textContent = data;
//   ul.append(li);
// }



// 3.Создайте дерево из объекта
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };

// let container = document.getElementById('container');

// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
//   }

//   function createTreeText(obj) { // отдельная рекурсивная функция
//     let li = '';
//     let ul;
//     for (let key in obj) {
//       li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//       ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
//   }

//   createTree(container, data);



// 4. Выведите список потомков в дереве
// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
// Узлы нижнего уровня, без детей – пропускайте.

// let lis = document.getElementsByTagName('li');

// for (let li of lis) {
//   // получить количество всех <li> ниже этого <li>
//   let descendantsCount = li.getElementsByTagName('li').length;
//   if (!descendantsCount) continue;

//   // добавить непосредственно к текстовому узлу (добавить к тексту)
//   li.firstChild.data += ' [' + descendantsCount + ']';
// }


// 5.Создайте календарь в виде таблицы
// Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. 
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, 
// первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:

// function createCalendar(elem, year, month) {

//     let table = document.createElement("table");

//     let week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
//     let date = new Date(year, month).getDate();
//     let dayWeek = new Date(year, month).getDay() || 7;
//     let lastDate = new Date(year, month + 1, 0).getDate();
//     let start = 1;

//     for (let i = 1; i <= Math.ceil((dayWeek - 1 + lastDate) / 7) + 1; i++) {
//         let tr = document.createElement("tr");

//         if (i == 1) {
//             for (let h = 0; h <= 6; h++) {
//                 let th = document.createElement("th");
//                 th.innerHTML = week[h];
//                 tr.append(th);
//             }
//         } else {
//             for (let j = 1; j <= 7; j++) {
//                 let td = document.createElement("td");
//                 if (start >= dayWeek && date <= lastDate) {
//                     td.innerHTML = date++;
//                 }
//                 start++;
//                 tr.append(td);
//             }
//         }

//         table.append(tr);
//     }
//     elem.append(table);
// }

// createCalendar(calendar, 2012, 9);



// 6.Цветные часы с использованием setInterval
// Создайте цветные часы как в примере ниже:
// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.

// let timerId;

//     function update() {
//       let clock = document.getElementById('clock');
//       let date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
//       clock.children[0].innerHTML = hours;

//       let minutes = date.getMinutes();
//       if (minutes < 10) minutes = '0' + minutes;
//       clock.children[1].innerHTML = minutes;

//       let seconds = date.getSeconds();
//       if (seconds < 10) seconds = '0' + seconds;
//       clock.children[2].innerHTML = seconds;
//     }

//     function clockStart() {
//       if (!timerId) {
//         timerId = setInterval(update, 1000);
//       }
//       update();
//     }

//     function clockStop() {
//       clearInterval(timerId);
//       timerId = null;
//     }



// 7.Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>


// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');




// 8.Сортировка таблицы
// Вот таблица:

// <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В ней может быть больше строк.
// Напишите код для сортировки по столбцу "name".




// let tbody = document.querySelector('tbody')
// let arr = Array.from(tbody.children)

// tbody.innerHTML = ''

// arr.sort((a, b) => {
// const textA = a.firstElementChild.textContent
// const textB = b.firstElementChild.textContent

// return textA > textB ? 1 : -1
// })

// tbody.append(...arr)

