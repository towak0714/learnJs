// Поиск элементов
// Вот документ с таблицей и формой.
https://learn.javascript.ru/task/find-elements/table.html

// Как найти?…
// 1. Таблицу с id="age-table".
// 2. Все элементы label внутри этой таблицы (их три).
// 3. Первый td в этой таблице (со словом «Age»).
// 4. Форму form с именем name="search".
// 5. Первый input в этой форме.
// 6. Последний input в этой форме.
// 7. Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.


let table = document.getElementById('age-table');

table.getElementsByTagName('label');

table.querySelector('td');

let form = document.getElementsByName('search')[0];

form.querySelector('input');

let inputs = form.querySelectorAll('input')
inputs[inputs.length-1] 

