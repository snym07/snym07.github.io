$(".preview").hide();
$(".effect").mouseover(function(){
	//$(this).css("background-color", "blue");
	$(".preview").show();
	$(".effect").css("background-color", "pink");
});
$(".effect").mouseout(function(){
	$(".preview").hide();
});