$(function(){

	const currentLocation = this.location.href;
	const menuItem = document.querySelectorAll('a');
	const menuLenght = menuItem.length
	for (let i = 0; i<menuItem.length; i++){
		if(menuItem[i].href === currentLocation){
			menuItem[i].classList.add('active')
		} else {
			menuItem[i].classList.remove('active')
		}
	}

	/***************** Menu-btn ********************/
	$(".menu__burger").click(function(event){
		$(".menu__burger,.aside-header").toggleClass("active");
		$("body").toggleClass("lock");
	});

	/***************** Slick-sliders ********************/
  $('.page-slider').slick({
	  arrows: false,
	  dots: true,

  });

  $('.gallery-post__slider').slick({

  });

  $('.testi-slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		waitForAnimate: false,
  });


});

/***************** Modal info********************/
let info_icon = document.querySelector('.info__icon');
let info_list = document.querySelector('.info__list');
info_icon.addEventListener("click", function (e) {
	info_list.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.info')) {
		info_list.classList.remove('active');
	}
});


/***************** Overlay on click  ********************/
document.querySelectorAll('.content__item').forEach((item) =>
	item.addEventListener('click', () => {
		const contentItem = item;

		if (contentItem.classList.contains('content__item--active')) {
			contentItem.classList.remove('content__item--active');
		} else {
			document
				.querySelectorAll('.content__item')
				.forEach((child) => child.classList.remove('content__item--active'))

				contentItem.classList.add('content__item--active');
		}

	})
)
