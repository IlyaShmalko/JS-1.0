//Первое задание
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
let date = new Date();

function getWeekDay(date) {
	date = date || new Date();
	let day = date.getDay();

	return week[day];
}

for ( let i = 0; i < week.length; i++) {

	if (week[i] !== getWeekDay(date) && i !== 6 && i !== 0) {

		document.write(week[i] + '<br>');

	} else if (getWeekDay(date) && i !== 6 && i !== 0) {

				document.write('<i>' + getWeekDay(date) + '</i>' + '<br>');

	} else if (week[6] && i !== 0 ) {

		    if (week[i] === getWeekDay(date)) {

		    	document.write('<strong><i>' + week[6] + '</i></strong>' + '<br>');

		    } else {

		    			document.write('<strong>' + week[6] + '</strong>' + '<br>');

		    }

	} else if (week[0]) {

		    if (week[i] === getWeekDay(date)) {

		    	document.write('<strong><i>' + week[0] + '</i></strong>' + '<br>');

		    } else {

		    			document.write('<strong>' + week[0] + '</strong>' + '<br>');
		    }

	}

}

//Второе задание
let arr = ['453', '35466', '76543', '564663', '789', '325677', '737373'];

for (let j = 0; j < arr.length; j++) {

	if (arr[j][0] == '3' || arr[j][0] == '7') {
		console.log(arr[j]);
	}
}
