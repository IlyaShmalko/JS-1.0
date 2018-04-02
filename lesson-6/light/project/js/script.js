let money,
		price;

let openBtn           = document.getElementById('open-btn'),
		nameValue         = document.getElementsByClassName('name-value')[0],
		budgetValue       = document.getElementsByClassName('budget-value')[0],
		goodsValue        = document.getElementsByClassName('goods-value')[0],
		itemsValue        = document.getElementsByClassName('items-value')[0],
		employersValue    = document.getElementsByClassName('employers-value')[0],
		discountValue     = document.getElementsByClassName('discount-value')[0],
		isOpenValue       = document.getElementsByClassName('isopen-value')[0],
		goodsItem         = document.getElementsByClassName('goods-item'),
		goodsBtn          = document.getElementsByTagName('button')[1],
		budgetBtn         = document.getElementsByTagName('button')[2],
		employersBtn      = document.getElementsByTagName('button')[3],
		chooseItem        = document.querySelector('.choose-item'),
		timeValue         = document.querySelector('.time-value'),
		countBudgetValue  = document.querySelector('.count-budget-value'),
		hireEmployersItem = document.querySelectorAll('.hire-employers-item');

openBtn.addEventListener('click', () => {
		money   = prompt('Ваш бюджет?', '');

		while (isNaN(money) || money === '' || money === null) {
				money   = prompt('Ваш бюджет?', '');
		}
		budgetValue.textContent = money;

		nameValue.textContent  = prompt('Название вашего магазина?', '').toUpperCase();

		let discount = confirm('Включить дисконтную систему?', '');

		if (discount == true) {
				mainList.discountSystem = true;
				discountValue.style.backgroundColor = 'green';
		} else {
					mainList.discountSystem = false;
					discountValue.style.backgroundColor = 'red';
			}
});

goodsBtn.addEventListener('click', () => {

		for (let i = 0; i < goodsItem.length; i++) {
			let a = goodsItem[i].value;
				
			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
			} else {
					i = i - 1;
					}
			}
});

chooseItem.addEventListener('change', () => {

		let items = chooseItem.value;

		if (isNaN(items) && items !== '') {

				mainList.shopItems = items.split(',');
				mainList.shopItems.sort();

				itemsValue.textContent = mainList.shopItems;
		}
		
});

timeValue.addEventListener('change', () => {
		let time = timeValue.value;

		if (time < 0) {
				console.log('Такого не может быть!');
				mainList.open = false;
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.open = true;
				} else if (time < 24) {
						console.log('Уже слишком поздно!');
						mainList.open = false;
						} else {
								console.log('В сутках только 24 часа!');
								mainList.open = false;
								}
		if (mainList.open == true) {
				isOpenValue.style.backgroundColor = 'green';
		} else {
					isOpenValue.style.backgroundColor = 'red';
			}
});

budgetBtn.addEventListener('click', () => {
		countBudgetValue.value = money / 30;
});

employersBtn.addEventListener('click', () => {

		for (let i = 0; i < hireEmployersItem.length; i++) {
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;

		employersValue.textContent += mainList.employers[i] + ', ';			 
		}	
});

const mainList = {
	budget: money,
	shopGoods: [],
	employers: {},
	open: false,
	shopItems: [],
	workTime: function workTime() {

		let today = new Date();
		let hourNow = today.getHours();

		if (hourNow < 0) {
				console.log('Такого не может быть!');
				mainList.open = false;
		} else if (hourNow > 8 && hourNow < 20) {
				console.log('Время работать!');
				mainList.open = true;
				} else if (hourNow < 24) {
						console.log('Уже слишком поздно!');
						mainList.open = false;
						} else {
								console.log('В сутках только 24 часа!');
								mainList.open = false;
								}
		if (mainList.open == true) {
				isOpenValue.style.backgroundColor = 'green';
		} else {
					isOpenValue.style.backgroundColor = 'red';
			}
	},
	discountSystem: false
				
};

// mainList.workTime();
