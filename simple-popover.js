// simple-popover 0.3

$(document).ready(function() {

	$.fn.simplePopover = function(){

		return this.each(function() {
			var popoverOpen = false;
			$('html').click(function (event) {
				if(!$(event.target).parents("div").has('.popover').length) {
					console.log("clicked on not popover", popoverOpen);
					if(popoverOpen === true){
						popoverOpen=false;
						console.log("popover closed (from outside)");
						$('.popover').css("opacity", "0.0");
						$('.popover').css("pointerEvents","none");
						$('.popover').css("display", "none");
					}
				}
			});
			$(this).has("img").click(function (event){
				event.stopPropagation();
				if(popoverOpen === false){
					popoverOpen=true;
					console.log("popover open");
					$(this).children( ".popover" ).css("opacity", "1.0");
					$(this).children( ".popover" ).css("pointerEvents","auto");
					$(this).children( ".popover" ).css("display", "block");
				} else {
					popoverOpen=false;
					console.log("popover closed (from inside)");
					$(this).children( ".popover" ).css("opacity", "0.0");
					$(this).children( ".popover" ).css("pointerEvents","none");
					$(this).children( ".popover" ).css("display", "none");
				}
			});
			$('.popover', this).click(function (event){
				event.stopPropagation();
			});
		});
	};
});