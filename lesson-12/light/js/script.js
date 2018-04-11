$(document).ready(function() {

		$('nav ul li:eq(1), .main_btna, .main_btn').click(function() {

				$('.overlay').fadeTo(600, 1);
				$('.modal').slideDown(600);

		});

		$('.close, .overlay').click(function() {
				$('.modal').slideUp(600);
				$('.overlay').fadeOut(600, 0);
		});

		

});