$(function(){

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
let menuBurger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
let menuLock = document.querySelector('body');
let asideHeader = document.querySelector('.aside-header');
menuBurger.addEventListener("click", function (e) {
	menuBurger.classList.toggle('active');
	menu.classList.toggle('active');
	asideHeader.classList.toggle('active');
	menuLock.classList.toggle('lock');
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

/***************** WebP ********************/
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

/***************** loaded ********************/
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}


var mixer = mixitup('.content');
document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages;    
 
	if ("IntersectionObserver" in window) {
	  lazyloadImages = document.querySelectorAll(".lazy");
	  var imageObserver = new IntersectionObserver(function(entries, observer) {
		 entries.forEach(function(entry) {
			if (entry.isIntersecting) {
			  var image = entry.target;
			  image.src = image.dataset.src;
			  image.classList.remove("lazy");
			  imageObserver.unobserve(image);
			}
		 });
	  });
 
	  lazyloadImages.forEach(function(image) {
		 imageObserver.observe(image);
	  });
	} else {  
	  var lazyloadThrottleTimeout;
	  lazyloadImages = document.querySelectorAll(".lazy");
	  
	  function lazyload () {
		 if(lazyloadThrottleTimeout) {
			clearTimeout(lazyloadThrottleTimeout);
		 }    
 
		 lazyloadThrottleTimeout = setTimeout(function() {
			var scrollTop = window.pageYOffset;
			lazyloadImages.forEach(function(img) {
				 if(img.offsetTop < (window.innerHeight + scrollTop)) {
					img.src = img.dataset.src;
					img.classList.remove('lazy');
				 }
			});
			if(lazyloadImages.length == 0) { 
			  document.removeEventListener("scroll", lazyload);
			  window.removeEventListener("resize", lazyload);
			  window.removeEventListener("orientationChange", lazyload);
			}
		 }, 20);
	  }
 
	  document.addEventListener("scroll", lazyload);
	  window.addEventListener("resize", lazyload);
	  window.addEventListener("orientationChange", lazyload);
	}
 })
