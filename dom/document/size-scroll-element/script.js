// 1.Найти размер прокрутки снизу
// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху.
// А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
// Напишите соответствующее выражение для произвольного элемента elem.


// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;




// 2.Узнать ширину полосы прокрутки
// Напишите код, который возвращает ширину стандартной полосы прокрутки.
// Для Windows она обычно колеблется от 12px до 20px.
// Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом),
// тогда значение может быть 0px.
// P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.

// let div = document.createElement('div');

// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';

// document.body.append(div);
// let scrollWidth = div.offsetWidth - div.clientWidth;

// div.remove();

// console.log(scrollWidth);



// 3.Поместите мяч в центр поля
// Исходный документ выглядит так:
// Каковы координаты центра поля?
// Вычислите их и используйте, чтобы поместить мяч в центр поля:

// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
// P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».


// const field = document.querySelector('.field');
//   const ball = document.querySelector('.ball');

//   const positionX = '50%';
//   const positionY = '50%';

//   ball.style.left = positionX;
//   ball.style.top = positionY;
//   ball.style.transform = `translate(-${positionX},-${positionY})`



