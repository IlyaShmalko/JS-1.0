let str = 'урок-3-был слишком легким'

// Первый символ строки с большой буквы
console.log(str[0].toUpperCase()+str.substr(1));

// Замена всех “-” на пробелы
console.log(str.replace(/-/g, " "));

// Вырезать слово “легким”, заменить 2 последние буквы на “о”
let light = str.split(' ')[2];
alert(light.replace(/им/, 'о'));

// Квадратный корень из суммы кубов
let arr = [20, 33, 1, "Человек", 2, 3]; 

arr.splice(3, 1); 

let b = 0;

for (let i = 0; i < arr.length; i++) { 

		b = b + Math.pow(arr[i], 3); 
} 

alert('Квадратный корень из суммы кубов массива arr - ' + Math.sqrt(b));


