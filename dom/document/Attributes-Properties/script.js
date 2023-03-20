// 1.Получите атрибут
// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
//     /* your code */
//   </script>
// </body>
// </html>



let elem = document.querySelector('[data-widget-name]');
    console.log(elem.getAttribute('data-widget-name'));



// 2.Сделайте внешние ссылки оранжевыми
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
// Ссылка является внешней, если:
// Её href содержит ://
// Но не начинается с http://internal.com.
// Пример:

// <a name="list">the list</a>
// <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>

document.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || !href.includes('://') || href.includes('http://internal.com')) {
      return;
    }
    a.style.color = 'orange';
  });