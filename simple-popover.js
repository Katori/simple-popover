// simple-popover.js 0.4 by Zac North (@kato)
// Licensed under MIT License
// Requires only jQuery
// Call the function .simplePopover(); on any div which contains a ".popover" child div.
// The .popover content will be hidden, and revealed when clicking on the scripted parent div.
// The example site was created with SCSS, but does not require anything else to be run.

$(document).ready(function() {
	$.fn.simplePopover = function( popoverToggleSelector ){
		return this.each(function() {
			var popoverOpen = false;
			$('html').click(function (event) {
				if(!$(event.target).parents("div").has('.popover').length) {
					togglePopover();
				}
			});
			$(this).has("img,p").click(function (event){
				console.log("yay, I found a click!");
				event.stopPropagation();
				togglePopover();
			});
			$('.popover', this).click(function (event){
				event.stopPropagation();
			});
			function togglePopover(){
				console.log("togglePopover triggered");
				if(popoverOpen === true){
					popoverOpen=false;
					$('.popover').css("opacity", "0.0");
					$('.popover').css("pointerEvents","none");
					$('.popover').css("display", "none");
					console.log("popover closed");
				}
				else if(popoverOpen === false){
					popoverOpen=true;
					$(this).children( ".popover" ).css("opacity", "1.0");
					$(this).children( ".popover" ).css("pointerEvents","auto");
					$(this).children( ".popover" ).css("display", "block");
					console.log("popover open");
				}
				else{
					console.error("popover failed");
				} 
			}
		});
	};
});