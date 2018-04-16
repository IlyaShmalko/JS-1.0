window.addEventListener('DOMContentLoaded', function() {

		let tab = require('../parts/tab.js');
		let ajax = require('../parts/ajax.js');
		let calc = require('../parts/calc.js');
		let modal = require('../parts/modal.js');
		let scroll = require('../parts/scroll.js');
		let slider = require('../parts/slider.js');
		let timer = require('../parts/timer.js');

		tab();
		ajax();
		calc();
		modal();
		scroll();
		slider();
		timer();

});