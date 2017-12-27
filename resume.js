$(function () {
		$('#cv').show();

		$('#items li').click(function () {
			if ($(this).attr('class') == 'active') {
				return false;
			}

			var link = $(this).children().attr('href');//ссылка на текст для показа
			var prevActive = $('li.active').children().attr('href'); // ссылка на текст пока что активной вкладки
			//console.log(prevActive);
			$('li.active').removeClass('active');
			$(this).addClass('active');
			//скрываем.показываем текст
			$(prevActive).fadeOut(500, function () {
				$(link).fadeIn();
				//изменяем цвет
				$('#items li').css('background', '#ccc');
				$('li.active').css('background', '#f3f3f3');
			});
		});
	});
