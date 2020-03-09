$(function(){

/***************** Play and stop vide on hover ********************/
	$("body").on("mouseover", "video", function(){
		this.play();
	 });
	 $("body").on("mouseleave", "video", function(){
		this.pause();
	 });

});