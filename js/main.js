$( document ).ready(function() {
	
	$(".next").click(function(){
		var currentIndex = $(".current").data("order");
		var nextIndex = currentIndex + 1;
		var currentContent = $(".speech-content").find("[data-order='" + currentIndex + "']");
		var nextContent = $(".speech-content").find("[data-order='" + nextIndex + "']");
		
		if( nextContent && !(currentContent.hasClass("last")) ){
			currentContent.removeClass("current");
			nextContent.addClass("current");
		}
		if( nextIndex >= 1){
			$(".prev").show();
		}
		if( nextContent.hasClass("last") ){
			$(".next").hide();
		}
	});
	$(".prev").click(function(){
		var currentIndex = $(".current").data("order");
		var prevIndex = currentIndex - 1;
		var currentContent = $(".speech-content").find("[data-order='" + currentIndex + "']");
		var prevContent = $(".speech-content").find("[data-order='" + prevIndex + "']");
		
		if( prevContent && !(currentContent.hasClass("first")) ){
			currentContent.removeClass("current");
			prevContent.addClass("current");
		}
		if( prevIndex === 0){
			$(".prev").hide();
		}
		if( currentContent.hasClass("last") ){
			$(".next").show();
		}
	});
	
	
	
	
});