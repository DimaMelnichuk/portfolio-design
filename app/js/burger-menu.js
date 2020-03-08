$(function(){
 

	 /***************** Actibe item menu ********************/
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
		$(".menu__burger,.menu").toggleClass("active");
		});
	

});