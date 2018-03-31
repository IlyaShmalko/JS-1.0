function matrix() {
	let num = Number(prompt('Сколько массивов включить во внутрь arr?'));
	let arr = new Array(num);

	for (let i = 0; i < arr.length; i++) {

	    arr[i] = new Array(5);
	    for ( let j = 0; j < 5; j++) {

	    	arr[i][j] = Math.floor(Math.random()*99);
	    }
	}

	function arrSum(array, i = 0) {
	  if (isFinite(array))
	    return Number(array);
	  else if (typeof array == "object" && i < array.length)
	    return arrSum(array[i]) + arrSum(array, i + 1);
	  return 0;
	}

	alert(arrSum(arr));
}

matrix();
