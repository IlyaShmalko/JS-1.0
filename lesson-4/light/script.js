let money,
		name,
		time,
		price

function start () {

	money   = prompt('Ваш бюджет?', '');

	while (isNaN(money) || money === '' || money === null) {
			money   = prompt('Ваш бюджет?', '');
	}

	name  = prompt('Название вашего магазина?', '').toUpperCase();
	time = 19;

}

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров будем продавать?', '');
			
			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
					i = i - 1;
					}
			}
	},
	workTime: function workTime(time) {

		if (time < 0) {
				console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.open = true;
				} else if (time < 24) {
						console.log('Уже слишком поздно!');
						} else {
								console.log('В сутках только 24 часа!');
								}
	},	
	dayBudget: function dayBudget() {
			alert('Ваш дневной бюджет: ' + mainList.budget / 30 );
	},
	discountSystem: function discountSystem() {

			if (mainList.discount === true) {
				price = (price/100) * 80;	
				console.log(price);	
			}
	},
	hiringEmployees: function hiringEmployees() {
	for (let i = 1; i < 5; i++) {
	let name = prompt('Имя вашего сотрудника?', '');

			if ((typeof(name)) === 'string' && (typeof(name)) !== null && /^[А-Яа-яЁё, a-zA-Z_]+$/.test(name) && name !== '' && name.length < 50) {
				mainList.employers[i] = i + ' - ' + name;
			} else {
					i = i - 1;
					}
			}
	},
	chooseShopItem: function chooseShopItem() {
			let items = prompt('Перечислите через запятую ваши товары', '');

			while ((typeof(items)) !== 'string' || items === '' || items === null) {
					items = prompt('Перечислите через запятую ваши товары', '');
			}

			mainList.shopItems = items.split(',');
			mainList.shopItems.push(prompt('Подождите, еще', ''));
			mainList.shopItems.sort();

			mainList.shopItems.forEach(function(item,i,shopItems) {
					alert( "У нас вы можете купить: " + ++i + ') ' + shopItems[--i]);
			});

			for(let key in mainList.shopItems) {
				console.log("Наш магазин включает в себя: " + mainList.shopItems[key]);
			}
			
	}	
};


console.log(mainList);







// workTime(18);
// start();
// chooseGoods();
// dayBudget();
// discountSystem();
// hiringEmployees();