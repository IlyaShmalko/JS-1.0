function modal() {

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

}

module.exports = modal;