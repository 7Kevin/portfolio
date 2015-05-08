$(function(){
	$("button").hide();
    $('.afb img:gt(0)').hide();
    setInterval(function(){
      $('.afb :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.afb');}, 
      5000);
});

$(".eenentwee").on("click" , function(){
	$(".picture").hide();
	$("#opdracht1").show();
	$("#opdracht2").show();
});

$(".drieenvier").on("click" , function(){
	$(".picture").hide();
	$("#opdracht3").show();
	$("#opdracht4").show();
});

$(".vijfenzes").on("click" , function(){
	$(".picture").hide();
	$("#opdracht5").show();
	$("#opdracht6").show();
});