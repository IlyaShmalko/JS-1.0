window.addEventListener('DOMContentLoaded', function() {

		// Tabs

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

		// Modal

		let more = document.querySelector('.more'),
				overlay = document.querySelector('.overlay'),
				close = document.querySelector('.popup-close'),
				descrBtn = document.querySelectorAll('.description-btn');

		function openModal(btn) {
				btn.addEventListener('click', () => {
						btn.classList.add('more-splash');
						overlay.style.animation = 'popdown 0.6s linear forwards';
						overlay.style.display = 'block';
				});
		}

		openModal(more);

		for (let i = 0; i < descrBtn.length; i++) {
				openModal(descrBtn[i])
		}

		close.addEventListener('click', () => {
				overlay.style.animation = 'popup 0.6s linear forwards';
				setTimeout(function() {
						overlay.style.display = '';
				}, 600);
				more.classList.remove('more-splash');
				popupForm.removeChild(statusMassage);
		});

		// Form

		let massage = new Object();

		massage.loading = '<img src="img/ajax-loader.gif" alt="Загрузка">';
		massage.success = '<img src="img/001-like.svg" alt="Отправлено" style="width:50px; height:50px;">';
		massage.failure = '<img src="img/002-dislike.svg" alt="Неудача" style="width:50px; height:50px;>';

		let popupForm = document.getElementsByClassName('main-form')[0],
				contactForm = document.getElementById('form'),
				statusMassage = document.createElement('div');
				statusMassage.classList.add('status');

		function formRequest(form) {
				let input = form.getElementsByTagName('input');
				form.addEventListener('submit', function(event) {
						event.preventDefault();
						form.appendChild(statusMassage);

						// AJAX

						let request = new XMLHttpRequest();
						request.open('POST', 'server.php');

						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

						let formData = new FormData(form);

						request.send(formData);

						request.onreadystatechange = function() {
								if (request.readyState < 4) {
										statusMassage.innerHTML = massage.loading;
								} else if (request.readyState === 4){
											if (request.status == 200 && request.status < 300) {
													statusMassage.innerHTML = massage.success;
													// Добавляем контент на страницу здесь!
											} else {
														statusMassage.innerHTML = massage.failure;
												}
								}
						}
						for (let i = 0; i < input.length; i++) {
								input[i].value = '';
								// Очищаем поля ввода
						}
				});
		}

		formRequest(popupForm);
		formRequest(contactForm);

		// Slider

		let slideIndex = 1,
				slides = document.getElementsByClassName('slider-item'),
				prev = document.querySelector('.prev'),
				next = document.querySelector('.next'),
				dotsWrap = document.querySelector('.slider-dots'),
				dot = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n) {

				if (n > slides.length) {
						slideIndex = 1
				};
				if (n < 1) {
						slideIndex = slides.length;
				};

				for (let i = 0; i < slides.length; i++) {
						slides[i].style.display = 'none';
				};

				for (let i = 0; i < dot.length; i++) {
						dot[i].classList.remove('dot-active');
				};

				slides[slideIndex - 1].style.display = 'block';
				dot[slideIndex - 1].classList.add('dot-active');
		} 

		function plusSliders(n) {
				showSlides(slideIndex += n);
		}

		function currentSlide(n) {
				showSlides(slideIndex = n);
		}

		prev.addEventListener('click', () => {
				plusSliders(-1);
		});

		next.addEventListener('click', () => {
				plusSliders(1);		
		});

		dotsWrap.addEventListener('click', function(event) {
				for (let i = 0; i < dot.length + 1; i++) {
						if (event.target.classList.contains('dot') && event.target == dot[i - 1]) {
								currentSlide(i);
						}
				}
		});

		// Calc

		let persons = document.getElementsByClassName('counter-block-input')[0],
				restDays = document.getElementsByClassName('counter-block-input')[1],
				place = document.getElementById('select'),
				totalValue = document.getElementById('total'),
				personsSum = 0,
				daysSum = 0,
				total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('change', function() {
				personsSum = +this.value;
				total = (personsSum * daysSum) * 4000;
				if (daysSum > 0) {
						totalValue.innerHTML = total;
				}						
		});

		restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (personsSum * daysSum) * 4000;
				if (personsSum > 0) {
						totalValue.innerHTML = total;							
				}
		});

		place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '' || daysSum < 0 || personsSum < 0) {
				totalValue.innerHTML = 0;
		} else {
						let a = total;
						totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
		});

		// Scroll

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