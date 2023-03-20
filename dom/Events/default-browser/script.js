// 1.Поймайте переход по ссылке
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
// действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. 
// Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

// contents.onclick = function(event) {

//     function handleLink(href) {
//       let isLeaving = confirm(`Leave for ${href}?`);
//       if (!isLeaving) return false;
//     }

//     let target = event.target.closest('a');

//     if (target && contents.contains(target)) {
//       return handleLink(target.getAttribute('href'));
//     }
//   };



// 2.Галерея изображений
// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.


//     let thumbs = document.querySelector('#thumbs');
//     thumbs.addEventListener('click', (event) => {

//       if(event.target.tagName != 'IMG') return;

//       event.preventDefault();

//       let largeImg = document.querySelector('#largeImg');

//       largeImg.src = event.target.closest('a');
//     })
