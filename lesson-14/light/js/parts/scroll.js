function scroll() {

		function animate(draw, duration) {
        let start = performance.now();// определяем текущее время
        requestAnimationFrame(function animate(time) {
            let timePassed = time - start;//Сколько времени прошло с момента начала анимации
            if (timePassed > duration) {//если врем 
                timePassed = duration; //анимация останавливается
            }
            draw(timePassed);// отвечает за отрисовку
            if (timePassed < duration) {// если аниманиция еще не закончилась
                requestAnimationFrame(animate);// запускаем анимацию снова
            }
        })
    };
    let menu = document.getElementsByTagName('nav')[0];// елемент

     menu.addEventListener('click', function(event) {// клик
        event.preventDefault();// отменяем стандартное действие
        animate(function(timePassed) {//вызываем функцию
            let target = event.target;// отслеживаем на что мы кликнули
          if (target.tagName = 'li') {
          	//ищем то на что мы кликнули и у него забираем href < и отрезаем первый символ(убираем решотку)
            let section = document.getElementById(target.getAttribute('href').slice(1));
              //скролим, от 0 к месту от верха страницы до елемента section
              window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);// -3 отступ с верху
          }  
        }, 1500)
        
     })

}

module.exports = scroll;