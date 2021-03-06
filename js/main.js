$( document ).ready(function() {
	

	// määrittele mitä ohjekuplassa näkyy
	var triggers = $(".guide-trigger");
	var all_guide_content = $(".guide-content");
	var vh = $(window).height();
	var of;
	var old = $("section").first();

	$( ".row1" ).scroll( function(){
		
		if( $(".row1").scrollTop() >= (vh-70) ){
			$(".guide-wrapper").fadeIn();

			triggers.each(function(i){

				of = Math.abs( $(this).offset().top );
				
				if ( of < Math.abs(old.offset().top) ){
					showGuideContent(i);
					old = $(this);
				}
			});			
			
		}
		else{
			$(".guide-wrapper").fadeOut();
		}
	});

	function showGuideContent( index ){
		all_guide_content.each(function(j){
			if (j === index){
				$(this).fadeIn()
			}
			else{
				$(this).hide()
			}
		});
	}



	$(".next span, .prev span").css({ top: ($(".speech-main").height() / 2) - 10 });
	

	function nextHandler() {
		var currentIndex = $(".current").data("order");
		var nextIndex = currentIndex + 1;
		var currentContent = $(".speech-content").find("[data-order='" + currentIndex + "']");
		var nextContent = $(".speech-content").find("[data-order='" + nextIndex + "']");
		
		if( nextContent && !(currentContent.hasClass("last")) ){
			currentContent.removeClass("current");
			nextContent.addClass("current");
		}
		if( nextIndex >= 1){
			$(".prev span").css("visibility", "visible");
		}
		if( nextContent.hasClass("last") ){
			$(".next span").css("visibility", "hidden");
		}
		$(".next span, .prev span").css({ top: ($(".speech-main").height() / 2) - 10 });
	}

	function prevHandler() {
		var currentIndex = $(".current").data("order");
		var prevIndex = currentIndex - 1;
		var currentContent = $(".speech-content").find("[data-order='" + currentIndex + "']");
		var prevContent = $(".speech-content").find("[data-order='" + prevIndex + "']");
		
		if( prevContent && !(currentContent.hasClass("first")) ){
			currentContent.removeClass("current");
			prevContent.addClass("current");
		}
		if( prevIndex === 0){
			$(".prev span").css("visibility", "hidden");
		}	
		if( currentContent.hasClass("last") ){
			$(".next span").css("visibility", "visible");
		}
		$(".next span, .prev span").css({ top: ($(".speech-main").height() / 2) - 10 });
	}

	$(".speech").on("swipeleft", nextHandler);
	$(".speech").on("swiperight", prevHandler);

	$(".next").click(nextHandler);
	$(".prev").click(prevHandler);

	$.event.special.swipe.horizontalDistanceThreshold = 100
	

	//Smooth scrolling

	var current = 0;

	$("#nextBtn").click(function() {

		var targets = $('[id^=target]');

		if(current < targets.length) {
			current++;
			var target = $("#target" + current);
			$("#row1").animate({
				scrollTop: target.offset().top + $("#row1").scrollTop()
			}, 1000);
		}
	});

	$("#prevBtn").click(function() {

		var targets = $('[id^=target]');

		if(current > 0) {
			current--;
			var target = $("#target" + current);
			$("#row1").animate({
				scrollTop: target.offset().top + $("#row1").scrollTop()
			}, 1000);
		}
	});
	


	//Tietovisa

	var count = 0;

	$(".answer").click(function(event){

		var target = $(event.target);
		if(target.hasClass("correct")) {
			count++;
		}

		var currentIndex = $(".quiz.current").data("order");
		var nextIndex = currentIndex + 1;
		var currentContent = $(".quiz-content").find("[data-order='" + currentIndex + "']");
		var nextContent = $(".quiz-content").find("[data-order='" + nextIndex + "']");
		
		if(nextContent){
			if(!(currentContent.hasClass("last"))) {
				currentContent.removeClass("current");
				nextContent.addClass("current");
			} else {
				currentContent.removeClass("current");
				$(".result").addClass("showresult");
				$(".result").append("<p><b>Sait " + count + "/8 oikein!</b></p>");
			}
		}

	});	
	
});