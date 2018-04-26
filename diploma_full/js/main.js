// popup

let overlay = document.querySelector('.overlay'),
		popupBtn = document.getElementById('popup-btn'),
		custom = document.querySelector('.custom'),
		main = document.querySelector('.main'),
		customInfo = document.querySelector('.custom-info'),
		customChar = document.querySelector('.custom-char'),
		customStyle = document.querySelector('.custom-style');

popupBtn.addEventListener('click', function() {

		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';
		customInfo.style.display = 'block';
		customChar.style.display = 'block';
		customStyle.style.display = 'block';

});

// Customization

let personSkin = document.getElementById('person-skin'),
		personClothes = document.getElementById('person-clothes'),
		personHair = document.getElementById('person-hair'),
		slideColor = document.getElementsByClassName('skin-color'),
		slideClothes = document.getElementsByClassName('clothes-style'),
		slideHair = document.getElementsByClassName('hair-style'),
		prev_1 = document.querySelectorAll('.prev_1'),
		next_1 = document.querySelectorAll('.next_1'),
		prev_2 = document.querySelectorAll('.prev_2'),
		next_2 = document.querySelectorAll('.next_2'),
		male = document.getElementById('male'),
		female = document.getElementById('female'),
		colorIndex = 1,
		clothesIndex = 1,
		hairIndex = 1,
		sex;

male.addEventListener('change', function(){

		sex = male.value;

		changeMan();

});

female.addEventListener('change', function(){

		sex = female.value;

		changeWoman();

});

function showFirstSlides(n) {

		if (n > slideColor.length) {
				colorIndex = 1;
		}
		if (n < 1) {
				colorIndex = slideColor.length;
		}

		for (let i = 0; i < slideColor.length; i++) {
				slideColor[i].style.display = 'none';
		}

		slideColor[colorIndex - 1].style.display = 'block';
		personSkin.style.background = `url("img/skin/skin-${colorIndex}.png") center / cover no-repeat`;

}	

function plusFirstSliders(n) {
		showFirstSlides(colorIndex += n);
}

prev_1[0].addEventListener('click', () => {
		plusFirstSliders(-1);
});

next_1[0].addEventListener('click', () => {
		plusFirstSliders(1);		
});

//  Clothes slide

function showThirdSlides(n) {

		if (n > 3) {
				clothesIndex = 1;
		}
		if (n < 1) {
				clothesIndex = 3;
		}

		for (let i = 0; i < slideClothes.length; i++) {
				slideClothes[i].style.display = 'none';
		}

		slideClothes[clothesIndex - 1].style.display = 'block';
		personClothes.style.background = `url("img/clothes/construct/clothes-${clothesIndex}.png") center / cover no-repeat`;

}

function plusThirdSliders(n) {
		showThirdSlides(clothesIndex += n);
}

prev_1[2].addEventListener('click', () => {
		plusThirdSliders(-1);
});

next_1[2].addEventListener('click', () => {
		plusThirdSliders(1);		
});

// Hair slide

function showSecondSlides(n) {

		if (n > 3) {
				hairIndex = 1;
		}
		if (n < 1) {
				hairIndex = 3;
		}

		for (let i = 0; i < slideHair.length; i++) {
				slideHair[i].style.display = 'none';
		}

		slideHair[hairIndex - 1].style.display = 'block';
		personHair.style.background = `url("img/hair/construct/hair-${hairIndex}.png") center / cover no-repeat`;

}

function plusSecondSliders(n) {
		showSecondSlides(hairIndex += n);
}

prev_1[1].addEventListener('click', () => {
		plusSecondSliders(-1);
});

next_1[1].addEventListener('click', () => {
		plusSecondSliders(1);	
});

function showWomenFirstSlides(n) {

		if (n > slideColor.length) {
				colorIndex = 1;
		}
		if (n < 1) {
				colorIndex = slideColor.length;
		}

		for (let i = 0; i < slideColor.length; i++) {
				slideColor[i].style.display = 'none';
		}

		slideColor[colorIndex-1].style.display = 'block';
		personSkin.style.background = `url("img/skin/skin-${colorIndex+3}.png") center / cover no-repeat`;

}

function plusWomenFirstSliders(n) {
		showWomenFirstSlides(colorIndex += n);
}

prev_2[0].addEventListener('click', () => {
		plusWomenFirstSliders(-1);
});

next_2[0].addEventListener('click', () => {
		plusWomenFirstSliders(1);	
});

function showWomanSecondSlides(n) {

		if (n > 3) {
				hairIndex = 1;
		}
		if (n < 1) {
				hairIndex = 3;
		}

		for (let i = 0; i < slideHair.length; i++) {
				slideHair[i].style.display = 'none';
		}

		slideHair[hairIndex + 2].style.display = 'block';
		personHair.style.background = `url("img/hair/construct/hair-${hairIndex+3}.png") center / cover no-repeat`;

}

function plusWomanSecondSliders(n) {
		showWomanSecondSlides(hairIndex += n);
}

prev_2[1].addEventListener('click', () => {
		plusWomanSecondSliders(-1);
});

next_2[1].addEventListener('click', () => {
		plusWomanSecondSliders(1);		
});

function showWomanThirdSlides(n) {

		if (n > 3) {
				clothesIndex = 1;
		}
		if (n < 1) {
				clothesIndex = 3;
		}

		for (let i = 0; i < slideClothes.length; i++) {
				slideClothes[i].style.display = 'none';
		}

		slideClothes[clothesIndex + 2].style.display = 'block';
		personClothes.style.background = `url("img/clothes/construct/clothes-${clothesIndex+3}.png") center / cover no-repeat`;

}

function plusWomanThirdSliders(n) {
		showWomanThirdSlides(clothesIndex += n);
}

prev_2[2].addEventListener('click', () => {
		plusWomanThirdSliders(-1);
});

next_2[2].addEventListener('click', () => {
		plusWomanThirdSliders(1);		
});

function changeMan() { 

		for (let i = 0; i < prev_1.length; i++) {

					prev_2[i].style.display = 'none';
					next_2[i].style.display = 'none';
					prev_1[i].style.display = 'block';
					next_1[i].style.display = 'block';

		}

		showFirstSlides(colorIndex);
		showSecondSlides(hairIndex);
		showThirdSlides(clothesIndex);

}

function changeWoman() {

		for (let i = 0; i < prev_2.length; i++) {

					prev_1[i].style.display = 'none';
					next_1[i].style.display = 'none';
					prev_2[i].style.display = 'block';
					next_2[i].style.display = 'block';

		}

		showWomenFirstSlides(colorIndex);
		showWomanSecondSlides(hairIndex);
		showWomanThirdSlides(clothesIndex);

}



// Ready

let ready = document.getElementById('ready'),
		mainCardsItem = document.querySelector('.main-cards-item').cloneNode(true),
		progressBar = document.getElementsByClassName('progress-bar'),
		resultCount = document.getElementsByClassName('result-count'),
		allCardItem,
		volitionalViews;

document.getElementById('select').addEventListener('change', function(){

				volitionalViews = this.options[this.selectedIndex].value;

});

let candidateName;

document.getElementById('name').addEventListener('blur', function() {

		switch (true) {

				case /^[А-Яа-яЁё ]+$/.test(this.value) && this.value !== '':

						this.style.border = '';
						candidateName = this.value;
						break;

				default:

						this.value = '';
						this.style.border = '1px solid red';
						break;

		}

});

let candidateAge;

document.getElementById('age').addEventListener('blur', function() {

		switch (true) {

				case isNaN(this.value) || this.value < 35 || this.value > 80:

						this.value = '';
						this.style.border = '1px solid red';
						break;

				default:

						this.style.border = '';
						candidateAge = this.value;
						break;
		}

});


let candidateBio;

document.getElementById('bio').addEventListener('blur', function() {

		switch (true) {

				case this.value === '':

						this.style.border = '1px solid red';
						break;

				default:

							this.style.border = '';
							candidateBio = this.value;
							break;

		}

});
						

ready.addEventListener('click', function() {

		let	personePhoto = document.querySelector('.person').cloneNode(true);

		switch (true) {

				case candidateName === undefined:

						alert('Вы ввели не все данные!\n  ФИО на Русском языке...');
						break;

				case candidateAge === undefined:

						alert('Вы ввели не все данные!\n  Укажите возраст от 35 до 80 лет...');
						break;

				case sex === undefined:

						alert('Вы ввели не все данные!\n  Укажите ваш пол!');
						break;

				case volitionalViews === undefined:

						alert('Вы ввели не все данные!\n  Укажите ваши политические взгляды!');
						break;

				case candidateBio === undefined || candidateBio.length < 40:

						alert('Вы ввели не все данные!\n  Расскажите нам о себе...\n  Не менее 40 символов!');
						break;

				default:

						custom.style.display = 'none';
						main.style.display = '';
						document.querySelector('.main-cards').appendChild(mainCardsItem);
						document.getElementsByClassName('photo')[2].style.background = "transparent";
						document.getElementsByClassName('photo')[2].appendChild(personePhoto);
						document.getElementsByClassName('name')[2].innerHTML = candidateName;
						document.getElementsByClassName('age')[2].innerHTML = candidateAge + ' лет';
						document.getElementsByClassName('sex')[2].innerHTML = sex;
						document.getElementsByClassName('views')[2].innerHTML = volitionalViews;
						document.getElementsByClassName('bio')[2].innerHTML = candidateBio;

						allCardItem = document.getElementsByClassName('main-cards-item');

						for (let i = 0; i < allCardItem.length; i++) {
								allCardItem[i].classList.remove('main-cards-item-active');
						}
						
						for (let i = 0; i < resultCount.length; i++) {
								progressBar[i].style.height = '0%';
								resultCount[i].innerHTML = '0%';
						}
						break;

		}

});

// Voting results

let num_1 = 0,
		num_2 = 0,
		num_3 = 0,
		refreshNum_2 = 0,
		refreshNum_1 = 0,
		refreshNum = 0;


function random(num) {

		num_1 = Math.ceil(Math.random()*num);
		num_2 = Math.ceil(Math.random()*(num-num_1));
		num_3 = num - num_1 - num_2;
}

function progressMove(number, i) {

		let id = setInterval(frame, 10);

		let height = 0;

		function frame() {

				switch (true) {

						case height >= number:

								clearInterval(id);
								break;

						default:

								height++;
								break;

				}

		}

		progressBar[i].style.height = number + '%';
		resultCount[i].innerHTML = number + '%';

}

function isBigest() {

		for (let i = 0; i < allCardItem.length; i++) {
				allCardItem[i].classList.remove('main-cards-item-active');
		}

		if (num_1 > num_2 && num_1 > num_3) {
				allCardItem[0].classList.add('main-cards-item-active');
		} else if (num_2 > num_1 && num_2 > num_3) {
				allCardItem[1].classList.add('main-cards-item-active');
		} else if (num_3 > num_1 && num_3 > num_2) {
				allCardItem[2].classList.add('main-cards-item-active');
		} else if (num_1 === num_2 && num_1 > num_3) {
				allCardItem[0].classList.add('main-cards-item-active');
				allCardItem[1].classList.add('main-cards-item-active');
		} else if (num_1 === num_3 && num_1 > num_2) {
				allCardItem[0].classList.add('main-cards-item-active');
				allCardItem[2].classList.add('main-cards-item-active');
		} else if (num_3 === num_2 && num_3 > num_1) {
				allCardItem[2].classList.add('main-cards-item-active');
				allCardItem[1].classList.add('main-cards-item-active');
		}

}

let voting = document.getElementById('voting');

voting.addEventListener('click', function(){

		random(100);

		progressMove(num_1, 0);
		progressMove(num_2, 1);
		progressMove(num_3, 2);

		isBigest();

});

// Crime

let crime = document.getElementById('crime');

crime.addEventListener('click', function(){

		random(100);

		if (num_1 > num_2 && num_1 > num_3) {

				progressMove(num_2, 1);
				refreshNum_1 = num_1 - 25;
				progressMove(refreshNum_1, 0);
				refreshNum = num_3 + 25;
				progressMove(refreshNum, 2);
				isBigest_1();

		} else if (num_2 > num_1 && num_2 > num_3) {

					progressMove(num_1, 0);
					refreshNum_2 = num_2 - 25;
					progressMove(refreshNum_2, 1);
					refreshNum = num_3 + 25;
					progressMove(refreshNum, 2);
					isBigest_1();

			} else if (num_3 > num_1 && num_3 > num_2) {

						progressMove(num_1, 0);
						progressMove(num_2, 1);
						progressMove(num_3, 2);

						isBigest();

				}

		function isBigest_1() {

				for (let i = 0; i < allCardItem.length; i++) {
						allCardItem[i].classList.remove('main-cards-item-active');
				}

				if (refreshNum_1 > refreshNum && refreshNum_1 > num_2) {
						allCardItem[0].classList.add('main-cards-item-active');
				}	else if (refreshNum_2 > refreshNum && refreshNum_2 > num_1) {
						allCardItem[1].classList.add('main-cards-item-active');
				} else if (refreshNum > refreshNum_1 && refreshNum > num_2) {
						allCardItem[2].classList.add('main-cards-item-active');
				} else if (refreshNum > refreshNum_2 && refreshNum > num_1) {
						allCardItem[2].classList.add('main-cards-item-active');
				} else if (num_2 > refreshNum && num_2 > refreshNum_1) {
						allCardItem[1].classList.add('main-cards-item-active');
				} else if (num_1 > refreshNum && num_1 > refreshNum_2) {
						allCardItem[0].classList.add('main-cards-item-active');
				} else if (num_1 === refreshNum && num_1 > refreshNum_2) {
						allCardItem[0].classList.add('main-cards-item-active');
						allCardItem[2].classList.add('main-cards-item-active');
				} else if (num_2 === refreshNum && num_2 > refreshNum_1) {
						allCardItem[1].classList.add('main-cards-item-active');
						allCardItem[2].classList.add('main-cards-item-active');
				} else if (num_1 === refreshNum_2 && num_1 > refreshNum) {
						allCardItem[0].classList.add('main-cards-item-active');
						allCardItem[1].classList.add('main-cards-item-active');
				} else if (num_2 === refreshNum_1 && num_2 > refreshNum) {
						allCardItem[0].classList.add('main-cards-item-active');
						allCardItem[1].classList.add('main-cards-item-active');
				}

		}

});

// Reset

let reset =  document.getElementById('reset');

reset.addEventListener('click', function() {

		document.getElementsByClassName('photo')[2].removeChild(document.querySelector('.person'));
		document.querySelector('.main-cards').removeChild(document.getElementsByClassName('main-cards-item')[2]);

		colorIndex = 1;
		hairIndex = 1;
		clothesIndex = 1;

		changeMan();

		document.getElementById('bio').value = '';
		document.getElementById('age').value = '';
		document.getElementById('name').value = '';
		document.getElementById('select').options[0].selected = true;

		candidateName = undefined;
		candidateAge = undefined;
		sex = undefined;
		volitionalViews = undefined;
		candidateBio = undefined;

		male.checked = false;
		female.checked = false;

		main.style.display = 'none';
		custom.style.display = 'flex';

});










		
