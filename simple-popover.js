// simple-popover.js 0.4 by Zac North (@kato)
// Licensed under MIT License
// Requires only jQuery
// Link the script and CSS to an HTML page, then call the function .simplePopover(); on any
// div which contains a ".popover" child div.
// The .popover content will be hidden, and revealed when clicking on the scripted parent div.
// The CSS file and example site were created with SCSS, but it is not required to run this.

$(document).ready(function() {
	// Call this function (simplePopover();) on any div which contains a ".popover" child div to get popover functionality.
	// Add the "example" class to your popover div for the example style.
	$.fn.simplePopover = function(){
		return this.each(function() {
			// Grabbing and storing the popover of this container for future use:
			var popoverContainer = $(this).find('.popover');
			// Detect a click anywhere in the document:
			$('html').click(function (event) {
				// If the click is not in the popover and the popover is open, then toggle popover (closing it):
				if(!popoverContainer.is(event.target) && popoverContainer.hasClass("open")){
					togglePopover();
				}
			});
			// Detect a click inside the container:
			$(this).click(function (event){
				// Stop event propogation and toggle popover.
				event.stopPropagation();
				togglePopover();
			});
			$(popoverContainer, this).click(function (event){
				// Stop event propagation upon click of popoverContainer or popover's parent, in case there are links or buttons inside.
				event.stopPropagation();
			});
			function togglePopover(){
				// Simple function to determine if the popover is opened or closed, then toggle it.
				if(popoverContainer.hasClass("open")){
					$(popoverContainer).removeClass("open");
				}
				else{
					$(popoverContainer).addClass("open");
				}
			}
		});
	};
});