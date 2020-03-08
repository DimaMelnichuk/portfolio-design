$(function(){

	/***************** Info ********************/
	 $('.info__icon').click(function(event){
		$('.info__list').toggleClass('active');
	 });
		 
		 $(document).mouseup(function (e){ // событие клика по странице
			if (!$(".info__icon").is(e.target) && // если клик сделан не по элементу
				 $(".info__icon").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
				 $(".info__list").removeClass('active'); // скрываем блок
			}
	  });

	});