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