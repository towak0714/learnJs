// 1. Добавьте пункт к выпадающему списку
// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

let select = document.querySelector("select");

let newOption = new Option("Классика", "classic");
select.append(newOption);