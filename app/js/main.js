$(function(){
 
	 /***************** Info ********************/
	 $('.contact__info').click(function(event){
		$('.contact__list').toggleClass('active');
	 });
		 
		 $(document).mouseup(function (e){ // событие клика по странице
			if (!$(".contact__info").is(e.target) && // если клик сделан не по элементу
				 $(".contact__info").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
				 $(".contact__list").removeClass('active'); // скрываем блок
			}
	  });


	/***************** Accordion ********************/
	$(".menu__link").click(function(event){
	if($(".menu__link").hasClass("active")){
		$(".menu__link").not($(this)).removeClass("active");
	}
	$(this).toggleClass("active");
	});


	/***************** mixitup ********************/
	var mixer = mixitup('.content');
	
});