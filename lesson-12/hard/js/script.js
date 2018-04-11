$(document).ready(function() {

		$('nav ul li:eq(1), .main_btna, .main_btn').click(function() {

				$('.overlay').animate({
						opacity: 'show'
				}, 600);
				$('.modal').css('margin-top', '0rem').animate({
						top: '5rem',
						height: 'show',
						opacity: '1'
				}, 600);

		});

		$('.close, .overlay, .back').click(function() {
				$('.modal').animate({
						top: '0rem',
						height: 'hide',
						opacity: '0'
				}, 600);
				$('.thanks').slideUp(600);
				$('.overlay').fadeOut(600, 0);
		});


		$('.form button[type=submit]').click(function(event) {
				event.preventDefault();
				let data = $('.form input').serialize();

				$.ajax({

					type: 'POST',
					url: 'server.php',
					data: 'data',

					success:function(){
							$('.modal').animate({
									top: '0rem',
									height: 'hide',
									opacity: '0'
							}, 600);
							$('.form input').val('');
							$('.form input[type=checkbox]').prop('checked',false);;
							$('.thanks').slideDown(600);
					},
					fail:function(){
							$('.form').append('<div>Отправка не удалась...</div>')
					}

				});

		});



				

});