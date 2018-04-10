window.addEventListener('DOMContentLoaded', function() {
		let tab = document.getElementsByClassName('info-header-tab'),
				tabContent = document.getElementsByClassName('info-tabcontent'),
				info = document.getElementsByClassName('info-header')[0];

		function hideTabContent(a) {
				for (let i = a; i < tabContent.length; i++) {
						tabContent[i].classList.remove('show');
						tabContent[i].classList.add('hide');
				}
		}

		hideTabContent(1);

		function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
						hideTabContent(0);
						tabContent[b].classList.remove('hide');
						tabContent[b].classList.add('show');
				}
		}

		info.addEventListener('click', function(event) {
				let target = event.target;
				if (target.className == 'info-header-tab') {
						for (let i = 0; i < tab.length; i++) {
								if (target == tab[i]) {
										showTabContent(i);
										break;
								}
						}
				}
		});

		// Timer

		let deadline = '2018-03-20';

		function getTimeRemaining(endtime) {
				let t = Date.parse(endtime) - Date.parse(new Date()),
						seconds = Math.floor((t / 1000) % 60),
						minutes = Math.floor((t / 1000 / 60) % 60),
						hours = Math.floor((t / (1000*60*60)));

				return {
						'total': t,
						'hours': hours,
						'minutes': minutes,
						'seconds': seconds
				};
		};

		function setClock(id, endtime) {

				let timer = document.getElementById(id),
						hours = timer.querySelector('.hours'),
						minutes = timer.querySelector('.minutes'),
						seconds = timer.querySelector('.seconds');

				function updateClock() {

						let t = getTimeRemaining(endtime);

						if (t.total > 0) {
								hours.innerHTML = t.hours;
								minutes.innerHTML = t.minutes;
								seconds.innerHTML = t.seconds;
						} else {
								clearInterval(timeInterval);
								hours.innerHTML = "00";
								minutes.innerHTML = "00";
								seconds.innerHTML = "00";
						}
				};

				let timeInterval = setInterval(updateClock, 1000);
				updateClock();
		};

		setClock('timer', deadline);
		
		// Smooth transition

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
				



});