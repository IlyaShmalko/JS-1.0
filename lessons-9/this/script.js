let age = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age, 'John', 'Snow');
//showUser.apply(age, ['John', 'Snow']);

/*let obj = {
	age: age,
	showUser: function(surname, name) {
			alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
	}
}
 
obj.showUser();*/