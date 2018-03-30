// Меняем местами второй и третий элемент
let menu = document.querySelector('.menu');

menu.insertBefore(menu.children[2], menu.children[1]);

// Добавляем в конец списка пятый элемент
let li = document.createElement('li');
let liText = document.createTextNode('Пятый пункт');

li.classList.add('menu-item');
li.appendChild(liText);
menu.appendChild(li);

// Меняем заголовок
let title = document.getElementById('title');

title.innerHTML = 'Мы продаем только подлинную технику Apple';

// Удаляем рекламму
let adv = document.querySelector('.adv');
let column = document.getElementsByClassName('column');

column[1].removeChild(adv);

// Вопрос и запись в prompt
document.getElementById('prompt').textContent = prompt('Как вы относитесь к технике Apple?', '')