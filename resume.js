$(function () {
		$('#cv').show();  

		$('#items li').click(function () {
			if ($(this).attr('class') == 'active') {
				return false;
			}

			var link = $(this).children().attr('href');
			var prevActive = $('li.active').children().attr('href');

			$('li.active').removeClass('active');
			$(this).addClass('active');

			$(prevActive).fadeOut(500, function () {
				$(link).fadeIn();

				$('#items li').css('background', '#ccc');
				$('li.active').css('background', '#f3f3f3');
			});
		});
	});
