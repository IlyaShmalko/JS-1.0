// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr_2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}

console.log(each(arr_2, myFunc));



let assert = require('chai').assert

// 

describe("sum", function() {
		it("Получаем true?", function() {
				assert.equal(sum(5,6), true)
		});
});

//

describe("arr", function() {
		it("Переменная num должна быть равна 5", function() {
				assert.equal(num, 5)
		});
});

// 

describe("each", function() {
		it("Соответствие типу данных", function() {
				assert.typeOf(each(arr_2, myFunc), "Array")
		});
});

describe("each-2", function() {
		it("Соответствие с длиной массива", function() {
				assert.lengthOf(each(arr_2, myFunc), 5)
		});
});

let expect = require('chai').expect

describe("each-1", function() {
		it("Соответствие с результатом", function() {
				expect(each(arr_2, myFunc)).to.include.members([8, 7, 6, 5, 4])
		});
});