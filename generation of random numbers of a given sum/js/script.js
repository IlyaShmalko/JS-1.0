let num_1 = 0,
		num_2 = 0,
		num_3 = 0;

function random(num) {
		num_1 = Math.ceil(Math.random()*num);
		num_2 = Math.ceil(Math.random()*(num-num_1));
		num_3 = num - num_1 - num_2;
		return num_1, num_2, num_3;
}

random(100);

console.log(num_1 + " " + num_2 + " " + num_3);