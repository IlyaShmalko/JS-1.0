let money,
		name,
		time,
		price

function start () {

	money   = prompt('Ваш бюджет?');

	while (isNaN(money) || money === '' || money === null) {
			money   = prompt('Ваш бюджет?');
	}

	name  = prompt('Название вашего магазина?').toUpperCase();
	time = 19;

}

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
};

function chooseGoods() {

		for (let i = 0; i < 5; i++) {

			let a = prompt('Какой тип товаров будем продавать?');
			
			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
					i = i - 1;
					}

		}
}

function workTime(time) {

		if (time < 0) {
				console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				} else if (time < 24) {
						console.log('Уже слишком поздно!');
						} else {
								console.log('В сутках только 24 часа!');
								}
}

function dayBudget() {

	alert('Ваш дневной бюджет: ' + mainList.budget / 30 );

}

function discountSystem() {

	if (mainList.discount === true) {
		price = price * 0.8;	
		console.log(price);	
	} else {
				console.log('У вас нет скидки!');
				}

}

function hiringEmployees() {

	for (let i = 1; i < 5; i++) {

		let b = prompt('Имя вашего сотрудника?');

		if ((typeof(b)) === 'string' && (typeof(b)) !== null && /^[А-Яа-яЁё, a-zA-Z_]+$/.test(b) && b !== '' && b.length < 50) {
			mainList.employers[i] = i + ' - ' + b;
		} else {
				i = i - 1;
				}
	}

}	



// workTime(18);
// start();
// chooseGoods();
// dayBudget();
// discountSystem();
// hiringEmployees();

console.log( mainList );

/*let i = 0;

while (i < 5) {

	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
			console.log('Не верно!');
			}
	i++;
}*/

/*let i = 0;

do {
	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
			console.log('Не верно!');
			}
	i++;
} while (i < 5);*/

//document.write(mainList.shopGoods);