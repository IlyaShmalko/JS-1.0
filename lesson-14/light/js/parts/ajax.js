function ajax() {

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

}

module.exports = ajax;