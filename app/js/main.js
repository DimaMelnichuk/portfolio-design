$(function(){
 

	/***************** Play and stop vide on hover ********************/
	$("body").on("mouseover", "video", function(){
		this.play();
	 });
	 $("body").on("mouseleave", "video", function(){
		this.pause();
	 })


	 /***************** Slick-slider for post ********************/
	$('.post-slider').slick({
		arrows: false,
		dots: true,
		waitForAnimate: false,
	});

	$('.gallery-post__slider').slick({

	});

	/***************** Menu-btn ********************/
	$(".menu__burger").click(function(event){
		$(".menu__burger,.menu").toggleClass("active");
		});
	

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